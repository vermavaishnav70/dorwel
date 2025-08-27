import { useAppDispatch, useAppSelector } from '../store';
import {
  fetchDashboardData,
  setStats,
  addProject,
  updateProject,
  removeProject,
  addTask,
  updateTask,
  removeTask,
  setChartData,
  clearError,
} from '../store/slices/dashboardSlice';
import type { DashboardStats, Project, Task, ChartData } from '../types/dashboard';

export const useDashboard = () => {
  const dispatch = useAppDispatch();
  const {
    stats,
    projects,
    tasks,
    clients,
    chartData,
    loading,
    error,
  } = useAppSelector((state) => state.dashboard);

  return {
    // State
    stats,
    projects,
    tasks,
    clients,
    chartData,
    loading,
    error,
    
    // Actions
    fetchDashboardData: () => dispatch(fetchDashboardData()),
    setStats: (stats: DashboardStats) => dispatch(setStats(stats)),
    addProject: (project: Project) => dispatch(addProject(project)),
    updateProject: (id: string, updates: Partial<Project>) => 
      dispatch(updateProject({ id, updates })),
    removeProject: (id: string) => dispatch(removeProject(id)),
    addTask: (task: Task) => dispatch(addTask(task)),
    updateTask: (id: string, updates: Partial<Task>) => 
      dispatch(updateTask({ id, updates })),
    removeTask: (id: string) => dispatch(removeTask(id)),
    setChartData: (data: ChartData[]) => dispatch(setChartData(data)),
    clearError: () => dispatch(clearError()),
  };
}; 