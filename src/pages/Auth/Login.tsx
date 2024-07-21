import UserLoginForm from '@/components/auth/UserLoginForm';
import HeadUpdater from '@/components/HeadUpdater';
import GuestLayout from '@/layouts/GuestLayout';
import { LoginSchema } from '@/schema';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

export default function Login() {

  const headerTags = {
    title: 'Login', 
    keywords: 'login, todo, java todo app', 
    titleTemplate: "%s - Java Todo App"
  };

  const router = useNavigate();

  const getData = async (data: z.infer<typeof LoginSchema>) => {
      try {
        const response = await axios.post('http://localhost/api/v1/auth/authenticate', data);

        localStorage.setItem('access_token', response.data.data.access_token);
        localStorage.setItem('refresh_token', response.data.data.refresh_token);

        toast.success("Berhasil Login")
        router('/');
      } catch (error: any | unknown) {
          toast.error(error.response?.data?.data || 'Something went wrong');
          console.error('Error:', error.response ? error.response.data : error.message);
      }
  };

  return (
    <>
        <HeadUpdater headerTags={headerTags}/>

        <GuestLayout>
            {/* {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>} */}
            <UserLoginForm onSubmit={getData}/>
        </GuestLayout>
    </>
  )
}
