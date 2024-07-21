import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { LoginSchema } from '@/schema'
import { useForm } from 'react-hook-form'
import {  } from 'react-dom'
import {
    Form,
    FormControl,
    FormField,
    FormMessage,
  } from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import AuthHeader from './AuthHeader'
import { Loader2 } from 'lucide-react'

const UserLoginForm = ( {onSubmit}: {onSubmit: (data: z.infer<typeof LoginSchema>) => Promise<void>} ) => {

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    
  return (
    <div className='w-full sm:max-w-md mt-6 p-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg'>
        <AuthHeader label='zzz' title='yawn'/>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 '>
            <FormField
            control={form.control}
            name='email'
            render={({ field }) => (

                <div className='space-y-4 mb-2'>
                    <Label htmlFor="email" >Email</Label>
                    <FormControl>
                        <Input
                            {...field}
                            required
                            // type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full"
                            autoComplete="username"
                            placeholder='f4uZAn@gmail.com'
                        />
                    </FormControl>
                    <FormMessage/>
                </div>

            )}
            />

            <FormField
            control={form.control}
            name='password'
            render={({ field }) => (

                <div className="mt-4">
                    <Label htmlFor="password" >Password</Label>
                    <FormControl>
                        <Input
                            {...field}
                            id="password"
                            type="password"
                            name="password"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            placeholder='password'
                        />
                    </FormControl>
                    <FormMessage/>
                </div>

            )}
            />

            <div className="block mt-4">
                <label className="flex items-center">
                    <Checkbox
                        name="remember"
                    />
                    <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
            </div>

            <div className="flex items-center justify-end mt-4">
                <Link
                    to={"/register"}
                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                    don't have an account?
                </Link>

                <Button className="ms-4" type='submit' disabled={form.formState.isSubmitting}>
                    Login
                    {form.formState.isSubmitting ? <Loader2 className='ml-2 h-4 w-4 animate-spin' /> : null}
                </Button>
            </div>
            </form>
        </Form>
    </div>
  )
}

export default UserLoginForm;