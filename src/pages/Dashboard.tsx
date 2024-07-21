import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { TaskForm } from '@/components/task/TaskForm';
import { Task } from '@/components/task/Task';
import { UserNav } from '@/components/UserNav';

interface Task {
  id: number;
  name: string;
  createdAt: string;
  date: string | null;
  deadline: string | null;
  status: string;
  category: { id: number; name: string } | null;
}

export const Dashboard = () => {
  console.log(localStorage.getItem('access_token'))
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost/api/v1/task', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          Accept: "*/*"
        }
       });
      setTasks(response.data.data.content);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to fetch tasks');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost/api/v1/task/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
      toast.success('Task deleted successfully');
    } catch (error) {
      toast.error('Failed to delete task');
    }
  };

  // const handleCreate = async (task: {
  //   name: string;
  //   date: string | null;
  //   deadline: string | null;
  //   status: string;
  //   category: number;
  // }) => {
  //   try {
  //     const response = await axios.post('http://localhost/api/v1/task/create', task);
  //     setTasks([...tasks, response.data.data]);
  //     toast.success('Task created successfully');
  //   } catch (error) {
  //     toast.error('Failed to create task');
  //   }
  // };

  const handleUpdate = async (task: Task) => {
    try {
      await axios.put(`http://localhost/api/v1/task/${task.id}`, task, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          Accept: "*/*"
        }
       });
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
      toast.success('Task updated successfully');
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      {/* <h1>Todo List</h1> */}
      {/* <TaskForm onCreate={handleCreate} /> */}
      {/* <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={handleDelete} onUpdate={handleUpdate} />
        ))}
      </ul> */}
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this today!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        {/* <DataTable data={tasks} columns={columns} /> */}
      </div>
    </div>
  );
};
