import React, { useState } from 'react';
import { TaskFormData } from '../../types';

interface Props {
  onSubmit: (data: TaskFormData) => void;
}

const TaskForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    status: 'pending'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onSubmit(formData);
    setFormData({ title: '', description: '', dueDate: '', priority: 'medium', status: 'pending' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border" />
      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="w-full p-2 border" />
      <select name="priority" value={formData.priority} onChange={handleChange} className="w-full p-2 border">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
