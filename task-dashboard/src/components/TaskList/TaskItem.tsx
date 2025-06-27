import React from 'react';
import { Task } from '../../types';

interface Props {
  task: Task;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggleStatus, onDelete }) => {
  return (
    <li className="border p-4 flex justify-between items-center">
      <div>
        <h3 className={`font-bold ${task.status === 'completed' ? 'line-through text-gray-400' : ''}`}>{task.title}</h3>
        <p>{task.description}</p>
        <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
      </div>
      <div className="space-x-2">
        <button onClick={() => onToggleStatus(task.id)} className="px-2 py-1 bg-green-500 text-white rounded">
          {task.status === 'pending' ? 'Complete' : 'Undo'}
        </button>
        <button onClick={() => onDelete(task.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
