import * as z from 'zod';

export const RegisterSchema = z.object({
    firstName: z.string().min(1, {
        message: "Please enter your name"
    }),
    lastName: z.string().min(1, {
        message: "Please enter your name"
    }) ,
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
})