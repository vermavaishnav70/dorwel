import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { DashboardStats, Project, Task, Client, ChartData } from '../../types/dashboard';

interface DashboardState {
  stats: DashboardStats | null;
  projects: Project[];
  tasks: Task[];
  clients: Client[];
  chartData: ChartData[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  stats: null,
  projects: [],
  tasks: [],
  clients: [],
  chartData: [],
  loading: false,
  error: null,
};

// Async thunk for fetching dashboard data
export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchData',
  async () => {
    // Simulate API call - replace with actual API endpoint
    const response = await new Promise<DashboardState>((resolve) => {
      setTimeout(() => {
        resolve({
          stats: {
            revenue: 125000,
            activeProjects: 12,
            conversionRate: 85,
            efficiency: 92,
          },
          projects: [
            {
              id: '1',
              name: 'E-commerce Platform',
              rate: '$2,500',
              paymentStatus: 'paid',
              type: 'remote',
              description: 'Building a modern e-commerce platform',
              progress: 75,
              icon: '🛒',
            },
            {
              id: '2',
              name: 'Mobile App Development',
              rate: '$3,200',
              paymentStatus: 'pending',
              type: 'onsite',
              description: 'iOS and Android app development',
              progress: 45,
              icon: '📱',
            },
          ],
          tasks: [
            {
              id: '1',
              task: 'Review project requirements',
              time: '9:00 AM',
              urgent: true,
            },
            {
              id: '2',
              task: 'Client meeting preparation',
              time: '2:00 PM',
              urgent: false,
            },
          ],
          clients: [
            {
              id: '1',
              name: 'John Smith',
              email: 'john@example.com',
              status: 'active',
            },
            {
              id: '2',
              name: 'Sarah Johnson',
              email: 'sarah@example.com',
              status: 'pending',
            },
          ],
          chartData: [
            { day: 'Mon', value: 45, height: '45%' },
            { day: 'Tue', value: 52, height: '52%' },
            { day: 'Wed', value: 38, height: '38%' },
            { day: 'Thu', value: 65, height: '65%' },
            { day: 'Fri', value: 48, height: '48%' },
            { day: 'Sat', value: 32, height: '32%' },
            { day: 'Sun', value: 55, height: '55%' },
          ],
          loading: false,
          error: null,
        });
      }, 1000);
    });
    return response;
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setStats: (state, action: PayloadAction<DashboardStats>) => {
      state.stats = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
        state.projects.push(action.payload);
      },
    updateProject: (state, action: PayloadAction<{ id: string; updates: Partial<Project> }>) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...action.payload.updates };
      }
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<{ id: string; updates: Partial<Task> }>) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload.updates };
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    setChartData: (state, action: PayloadAction<ChartData[]>) => {
      state.chartData = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload.stats;
        state.projects = action.payload.projects;
        state.tasks = action.payload.tasks;
        state.clients = action.payload.clients;
        state.chartData = action.payload.chartData;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch dashboard data';
      });
  },
});

export const {
  setStats,
  addProject,
  updateProject,
  removeProject,
  addTask,
  updateTask,
  removeTask,
  setChartData,
  clearError,
} = dashboardSlice.actions;

export default dashboardSlice.reducer; 