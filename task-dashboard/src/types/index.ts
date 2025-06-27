export interface Task {
    id: string;
    title: string;
    description?: string;
    dueDate?: string;
    priority: 'low' | 'medium' | 'high';
    status: 'pending' | 'completed';
  }
  
  export interface TaskFormData extends Omit<Task, 'id'> {}
  
  export interface FilterOptions {
    searchTerm: string;
    status: 'all' | 'pending' | 'completed';
    priority: 'all' | 'low' | 'medium' | 'high';
  }