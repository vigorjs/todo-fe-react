import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import AuthHeader from './auth/AuthHeader'
import BackButton from './auth/BackButton'

interface CardWrapperProps {
    label: string
    title: string
    backButtonHref: string
    backButtonLabel: string
    children: React.ReactNode
}

const CardWrapper = ({label, title, backButtonHref, backButtonLabel, children}: CardWrapperProps) => {
  return (
    <Card className='w-full sm:max-w-md mt-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg'>
        <CardHeader>
            <AuthHeader label={label} title={title}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter className='mt-[-10px]'>
                <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
    </Card>
  )
}

export default CardWrapper