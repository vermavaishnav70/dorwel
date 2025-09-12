"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { DayData } from "@/types/dashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign } from "lucide-react";

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface InsightsChartProps {
  /** Chart data for each day */
  data: DayData[];
  /** Initially selected day index */
  defaultSelectedIndex?: number;
  /** Callback when selection changes */
  onSelectionChange?: (index: number, dayData: DayData) => void;
  /** Custom className for the container */
  className?: string;
  /** Accessible chart title */
  title?: string;
  /** Accessible chart description */
  description?: string;
  /** Color theme configuration */
  theme?: {
    background?: string;
    track?: string;
    dot?: string;
    selectedColumn?: string;
    selectedButton?: string;
    unselectedButton?: string;
  };
  /** Chart dimensions */
  dimensions?: {
    containerHeight?: number;
    trackTop?: number;
    baseOffset?: number;
  };
  /** Test ID for testing */
  testId?: string;
}

// ============================================================================
// Constants
// ============================================================================

const DEFAULT_THEME = {
  background: "bg-muted/30",
  track: "bg-gray-300",
  dot: "bg-indigo-500",
  selectedColumn: "bg-gradient-to-b from-gray-100 to-gray-200",
  selectedButton: "bg-black text-white",
  unselectedButton: "bg-gray-200 text-gray-800",
};

const DEFAULT_DIMENSIONS = {
  containerHeight: 320,
  trackTop: 28,
  baseOffset: 72,
};

const ANIMATION_CLASSES = "transition-all duration-200 ease-in-out" as const;
const DOT_SIZE = 10 as const;
const BUTTON_SIZE = 40 as const;

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Calculates the normalized position for a data point within the chart bounds
 */
const calculateNormalizedPosition = (
  value: number,
  min: number,
  max: number
): number => {
  if (max === min) return 0.5;
  const span = Math.max(1, max - min);
  return Math.min(1, Math.max(0, (value - min) / span));
};

/**
 * Validates chart data
 */
const validateData = (data: DayData[]): void => {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("Chart data must be a non-empty array");
  }

  data.forEach((item, index) => {
    if (!item.label || typeof item.projects !== "number" || item.projects < 0) {
      throw new Error(`Invalid data at index ${index}`);
    }
  });
};

// ============================================================================
// Hooks
// ============================================================================

/**
 * Custom hook for managing chart state and calculations
 */
const useChartState = (data: DayData[], defaultSelectedIndex = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(() =>
    Math.max(0, Math.min(defaultSelectedIndex, data.length - 1))
  );
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const chartMetrics = React.useMemo(() => {
    if (data.length === 0) {
      return { minProjects: 0, maxProjects: 0 };
    }

    const projectValues = data.map((d) => d.projects);
    return {
      minProjects: Math.min(...projectValues),
      maxProjects: Math.max(...projectValues),
    };
  }, [data]);

  const handleSelectionChange = React.useCallback(
    (index: number) => {
      if (index >= 0 && index < data.length) {
        setSelectedIndex(index);
      }
    },
    [data.length]
  );

  const handleHover = React.useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  return {
    selectedIndex,
    hoveredIndex,
    chartMetrics,
    handleSelectionChange,
    handleHover,
  };
};

// ============================================================================
// Sub-Components
// ============================================================================

interface ChartColumnProps {
  dayData: DayData;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  normalizedValue: number;
  dimensions: typeof DEFAULT_DIMENSIONS;
  theme: typeof DEFAULT_THEME;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

const ChartColumn = React.memo<ChartColumnProps>(
  ({
    dayData,
    index,
    isSelected,
    isHovered,
    normalizedValue,
    dimensions,
    theme,
    onSelect,
    onHover,
  }) => {
    const { containerHeight, trackTop, baseOffset } = dimensions;
    const chartHeight = containerHeight - trackTop - baseOffset;
    const travel = Math.round(normalizedValue * chartHeight);
    const dotBottom = baseOffset + travel;

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect(index);
      }
    };

    return (
      <div
        className="relative w-10 md:w-12"
        style={{ height: containerHeight }}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        data-testid={`chart-column-${index}`}
      >
        {/* Highlight column background */}
        {isSelected && (
          <div
            className={cn(
              "absolute inset-x-0 rounded-[24px]",
              theme.selectedColumn
            )}
            style={{
              bottom: baseOffset - 20,
              top: trackTop - 24,
            }}
            aria-hidden="true"
          />
        )}

        {/* Vertical track line - stops below the dot with gap */}
        <div
          className={cn(
            "absolute left-1/2 -translate-x-px rounded-full",
            theme.track
          )}
          style={{
            bottom: baseOffset,
            height: travel - 8, // Stop 8px below the dot to create gap
            width: 4,
          }}
          aria-hidden="true"
        />

        {/* Data point dot */}
        <div
          className={cn(
            "absolute left-1/2 z-10 -translate-x-1/2 rounded-full shadow-sm",
            theme.dot,
            ANIMATION_CLASSES
          )}
          style={{
            bottom: dotBottom,
            width: DOT_SIZE,
            height: DOT_SIZE,
          }}
          aria-hidden="true"
        />

        {/* Tooltip on hover/selection */}
        {(isHovered && isSelected) && (
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-20"
            style={{ bottom: dotBottom + 18 }}
            role="tooltip"
            aria-live="polite"
          >
            <div className="rounded-full whitespace-nowrap bg-black px-3 py-1 text-sm font-medium text-white shadow-lg">
              {`${dayData.projects} Project${
                dayData.projects !== 1 ? "s" : ""
              }`}
            </div>
          </div>
        )}

        {/* Day selector button */}
        <button
          type="button"
          onClick={() => onSelect(index)}
          onKeyDown={handleKeyDown}
          className={cn(
            "absolute left-1/2 bottom-2 -translate-x-1/2 rounded-full text-sm font-medium",
            ANIMATION_CLASSES,
            isSelected ? theme.selectedButton : theme.unselectedButton
          )}
          style={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
          }}
          aria-pressed={isSelected}
          aria-label={`${dayData.fullName}: ${dayData.projects} projects${
            isSelected ? " (selected)" : ""
          }`}
          data-testid={`day-selector-${index}`}
        >
          {dayData.label}
        </button>
      </div>
    );
  }
);

ChartColumn.displayName = "ChartColumn";

// ============================================================================
// Main Component
// ============================================================================

/**
 * InsightsChart - A professional weekly activity chart component
 *
 * @example
 * ```tsx
 * const weeklyData = [
 *   { label: "M", fullName: "Monday", projects: 5 },
 *   { label: "T", fullName: "Tuesday", projects: 8 },
 *   // ... more days
 * ]
 *
 * <InsightsChart
 *   data={weeklyData}
 *   onSelectionChange={(index, day) => console.log('Selected:', day)}
 *   title="Weekly Project Activity"
 * />
 * ```
 */
export function InsightsChart({
  data,
  defaultSelectedIndex = 0,
  onSelectionChange,
  className,
  title = "Weekly Activity Chart",
  description = "Interactive chart showing project activity across the week",
  theme = DEFAULT_THEME,
  dimensions = DEFAULT_DIMENSIONS,
  testId = "insights-chart",
}: InsightsChartProps) {
  // Validate data on mount and when data changes
  React.useEffect(() => {
    try {
      validateData(data);
    } catch (error) {
      console.error("InsightsChart: Invalid data provided:", error);
    }
  }, [data]);

  const mergedTheme = { ...DEFAULT_THEME, ...theme } as typeof DEFAULT_THEME;
  const mergedDimensions = {
    ...DEFAULT_DIMENSIONS,
    ...dimensions,
  } as typeof DEFAULT_DIMENSIONS;

  const {
    selectedIndex,
    hoveredIndex,
    chartMetrics,
    handleSelectionChange,
    handleHover,
  } = useChartState(data, defaultSelectedIndex);

  // Call external callback when selection changes
  React.useEffect(() => {
    onSelectionChange?.(selectedIndex, data[selectedIndex]);
  }, [selectedIndex, onSelectionChange, data]);

  // Handle keyboard navigation
  const handleContainerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft" && selectedIndex > 0) {
      event.preventDefault();
      handleSelectionChange(selectedIndex - 1);
    } else if (event.key === "ArrowRight" && selectedIndex < data.length - 1) {
      event.preventDefault();
      handleSelectionChange(selectedIndex + 1);
    }
  };

  if (data.length === 0) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-3xl p-6",
          mergedTheme.background,
          className
        )}
        data-testid={`${testId}-empty`}
      >
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  return (
    <figure
      className={cn(
        "relative isolate mx-auto max-w-5xl rounded-3xl",
        mergedTheme.background,
        className
      )}
      role="img"
      aria-labelledby={`${testId}-title`}
      aria-describedby={`${testId}-description`}
      data-testid={testId}
      onKeyDown={handleContainerKeyDown}
      tabIndex={-1}
    >
      {/* Screen reader content */}
      <div className="sr-only">
        <h2 id={`${testId}-title`}>{title}</h2>
        <p id={`${testId}-description`}>
          {description}. Use arrow keys to navigate between days, or click on
          day buttons to select.
        </p>
      </div>

      {/* Chart grid */}
      <div
        className="grid grid-cols-7 items-end justify-items-center gap-6 md:gap-10"
        role="group"
        aria-label="Weekly activity data"
      >
        {data.map((dayData, index) => {
          const normalizedValue = calculateNormalizedPosition(
            dayData.projects,
            chartMetrics.minProjects,
            chartMetrics.maxProjects
          );

          return (
            <ChartColumn
              key={`${dayData.label}-${index}`}
              dayData={dayData}
              index={index}
              isSelected={index === selectedIndex}
              isHovered={hoveredIndex === index}
              normalizedValue={normalizedValue}
              dimensions={mergedDimensions}
              theme={mergedTheme}
              onSelect={handleSelectionChange}
              onHover={handleHover}
            />
          );
        })}
      </div>

      {/* Selected day summary for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {data[selectedIndex] &&
          `Selected: ${data[selectedIndex].fullName} with ${data[selectedIndex].projects} projects`}
      </div>
    </figure>
  );
}

// ============================================================================
// ProjectInsights Component
// ============================================================================

interface ProjectInsightsProps {
  chartData?: DayData[];
}

export const ProjectInsights: React.FC<ProjectInsightsProps> = ({
  chartData,
}) => {
  // Default weekly data if none provided
  const defaultData: DayData[] = [
    { label: "S", fullName: "Sunday", projects: 2 },
    { label: "M", fullName: "Monday", projects: 5 },
    { label: "T", fullName: "Tuesday", projects: 8 },
    { label: "W", fullName: "Wednesday", projects: 6 },
    { label: "T", fullName: "Thursday", projects: 9 },
    { label: "F", fullName: "Friday", projects: 7 },
    { label: "S", fullName: "Saturday", projects: 3 },
  ];

  const data = chartData || defaultData;

  const handleSelectionChange = (index: number, dayData: DayData) => {
    console.log("Selected day:", dayData);
    // You can add your custom logic here
  };

  return (
    <div className="xl:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Project Insights</CardTitle>
          <CardDescription>
            Track how many tasks were completed and total hours logged each
            week. This gives you an overview of your workload distribution.{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-end gap-4">
          <span className="">
            <span className="text-lg font-bold">$ 2,400</span>
            <div className="text-sm text-gray-500">Total Revenue</div>
          </span>
          <InsightsChart
            data={data}
            title="Weekly Project Activity"
            description="Interactive chart showing project activity across the week"
            onSelectionChange={handleSelectionChange}
            defaultSelectedIndex={0}
          />
        </CardContent>
      </Card>
    </div>
  );
};
