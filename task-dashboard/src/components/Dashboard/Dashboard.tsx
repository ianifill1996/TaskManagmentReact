import React, { useState, useEffect } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import TaskFilter from '../TaskFilter/TaskFilter';
import { Task, TaskFormData, FilterOptions } from '../../types';
import { filterTasks, sortTasksByDate } from '../../utils/TaskUtils';
import { v4 as uuidv4 } from 'uuid';

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
    status: 'all',
    priority: 'all',
  });

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (data: TaskFormData) => {
    const newTask: Task = { id: uuidv4(), ...data };
    setTasks(prev => [...prev, newTask]);
  };

  const handleToggleStatus = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' } : t));
  };

  const handleDelete = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const handleFilterChange = (updated: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...updated }));
  };

  const filteredTasks = sortTasksByDate(filterTasks(tasks, filters));

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskFilter filters={filters} onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onToggleStatus={handleToggleStatus} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;