'use client';

import { useDashboard } from '../hooks/useDashboard';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const ReduxExample = () => {
  const {
    stats,
    projects,
    tasks,
    loading,
    error,
    addProject,
    addTask,
    fetchDashboardData,
  } = useDashboard();

  const handleAddSampleProject = () => {
    addProject({
      id: Date.now().toString(),
      name: `Sample Project ${projects.length + 1}`,
      rate: '$50/hr',
      paymentStatus: 'pending',
      type: 'remote',
      description: 'This is a sample project added via Redux',
      progress: 0,
      icon: '🚀',
    });
  };

  const handleAddSampleTask = () => {
    addTask({
      id: Date.now().toString(),
      task: `Sample Task ${tasks.length + 1}`,
      time: 'Today',
      urgent: Math.random() > 0.5,
    });
  };

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Redux State Management Example</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button onClick={handleAddSampleProject}>
              Add Sample Project
            </Button>
            <Button onClick={handleAddSampleTask}>
              Add Sample Task
            </Button>
            <Button onClick={fetchDashboardData} variant="outline">
              Refresh Data
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Stats</CardTitle>
              </CardHeader>
              <CardContent>
                {stats && (
                  <div className="text-sm space-y-1">
                    <div>Revenue: ${stats.revenue.toLocaleString()}</div>
                    <div>Projects: {stats.activeProjects}</div>
                    <div>Conversion: {stats.conversionRate}%</div>
                    <div>Efficiency: {stats.efficiency}%</div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Projects ({projects.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-1">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="flex items-center gap-2">
                      <span>{project.icon}</span>
                      <span className="truncate">{project.name}</span>
                    </div>
                  ))}
                  {projects.length > 3 && (
                    <div className="text-gray-500">+{projects.length - 3} more</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Tasks ({tasks.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-1">
                  {tasks.slice(0, 3).map((task) => (
                    <div key={task.id} className="flex items-center gap-2">
                      <span className={task.urgent ? 'text-red-500' : 'text-gray-500'}>
                        {task.urgent ? '⚡' : '○'}
                      </span>
                      <span className="truncate">{task.task}</span>
                    </div>
                  ))}
                  {tasks.length > 3 && (
                    <div className="text-gray-500">+{tasks.length - 3} more</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 