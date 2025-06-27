import React from 'react';
import { FilterOptions } from '../../types';

interface Props {
  filters: FilterOptions;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
}

const TaskFilter: React.FC<Props> = ({ filters, onFilterChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onFilterChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-wrap gap-2 my-4">
      <input
        type="text"
        name="searchTerm"
        value={filters.searchTerm}
        onChange={handleChange}
        placeholder="Search"
        className="p-2 border"
      />
      <select name="status" value={filters.status} onChange={handleChange} className="p-2 border">
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <select name="priority" value={filters.priority} onChange={handleChange} className="p-2 border">
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default TaskFilter;
