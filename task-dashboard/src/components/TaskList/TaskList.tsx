import React from 'react';
import { Task } from '../../types';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onToggleStatus, onDelete }) => {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggleStatus={onToggleStatus} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
