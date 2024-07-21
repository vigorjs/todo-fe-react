import React, { useState } from 'react';
import { Button } from '../ui/button';

interface TaskFormProps {
  onCreate: (task: { name: string; date: string; deadline: string; status: string; category: number }) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('ON_PROGRESS');
  const [category, setCategory] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ name, date, deadline, status, category });
    setName('');
    setDate('');
    setDeadline('');
    setStatus('ON_PROGRESS');
    setCategory(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Task name" required />
      <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
      <input value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Deadline" />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ON_PROGRESS">On Progress</option>
        <option value="COMPLETED">Completed</option>
      </select>
      <input value={category} onChange={(e) => setCategory(Number(e.target.value))} placeholder="Category ID" />
      <Button type="submit">Add Task</Button>
    </form>
  );
};
