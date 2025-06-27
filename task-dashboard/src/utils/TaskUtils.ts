import { Task, FilterOptions } from '../types';

export const filterTasks = (tasks: Task[], filters: FilterOptions): Task[] => {
  return tasks.filter(task => {
    const matchesStatus = filters.status === 'all' || task.status === filters.status;
    const matchesPriority = filters.priority === 'all' || task.priority === filters.priority;
    const matchesSearch = task.title.toLowerCase().includes(filters.searchTerm.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });
};

export const sortTasksByDate = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => new Date(a.dueDate || '').getTime() - new Date(b.dueDate || '').getTime());
};