import CardWrapper from '../CardWrapper'
import { RegisterSchema } from '@/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Loader2 } from 'lucide-react'

const UserRegisterForm = ({onSubmit}: {onSubmit: (data: z.infer<typeof RegisterSchema>) => Promise<void>}) => {

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  })

  return (
        <CardWrapper
        label="Create an Account"
        title="Register"
        backButtonHref="/login"
        backButtonLabel="Already have an account? Login here."
        >

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <div className='space-y-4 mb-2'>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor='firstName'>First Name</FormLabel>
                          <FormControl>
                            <Input
                            {...field}
                            // required
                            id="firstName"
                            name="firstName"
                            className="mt-1 block w-full"
                            autoComplete="given-name"
                            placeholder='f4uZAn'
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          // required
                          id="lastName"
                          name="lastName"
                          className="mt-1 block w-full"
                          autoComplete="family-name"
                          placeholder='f4uZAn'
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          required
                          id="email"
                          // type="email"
                          name="email"
                          className="mt-1 block w-full"
                          autoComplete="email"
                          placeholder='f4uZAn@gmail.com'
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          required
                          id="password"
                          type="password"
                          name="password"
                          className="mt-1 block w-full"
                          autoComplete="current-password"
                          placeholder='password'
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>
                <Button type='submit' className='w-full' disabled={form.formState.isSubmitting}>
                  Register
                  {form.formState.isSubmitting ? <Loader2 className='ml-2 h-4 w-4 animate-spin' /> : null}
                </Button>
              </form>
            </Form>

        </CardWrapper>
  )
}

export default UserRegisterForm