import UserRegisterForm from '@/components/auth/UserRegisterForm';
import HeadUpdater from '@/components/HeadUpdater';
import GuestLayout from '@/layouts/GuestLayout';
import { RegisterSchema } from '@/schema';
import axios from 'axios';
import { z } from 'zod';

export default function Register() {

    const headerTags = {
        title: 'Register', 
        keywords: 'register, todo, java todo app', 
        titleTemplate: "%s - Java Todo App"
      }

    const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
        try {
            const response = await axios.post('http://localhost/api/v1/auth/register', data);
            console.log('Response:', response.data); 
        } catch (error: any | unknown) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    }

    return (
        <>
            <HeadUpdater headerTags={headerTags}/>

            <GuestLayout>
                <UserRegisterForm onSubmit={onSubmit} />
            </GuestLayout>
        </>
  )
}
