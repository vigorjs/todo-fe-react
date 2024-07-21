import React, { useState } from 'react';
import { Button } from '../ui/button';

interface TaskProps {
  task: {
    id: number;
    name: string;
    createdAt: string;
    date: string | null;
    deadline: string | null;
    status: string;
    category: { id: number; name: string } | null;
  };
  onDelete: (id: number) => void;
  onUpdate: (task: TaskProps['task']) => void;
}

export const Task: React.FC<TaskProps> = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);

  const handleUpdate = () => {
    onUpdate({ ...task, name });
    setIsEditing(false);
  };

  return (
    <li className="task">
      {isEditing ? (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <Button onClick={handleUpdate}>Save</Button>
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <span>{task.status}</span>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button onClick={() => onDelete(task.id)}>Delete</Button>
        </>
      )}
    </li>
  );
};
