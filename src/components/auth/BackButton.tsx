import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

interface BackButtonProps{
    label: string
    href: string
}

const BackButton = ({label, href}:BackButtonProps) => {
  return (
    <Button variant="link" className='font-normal w-full underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800' size="sm" asChild>
        <Link to={href}>
                {label}
        </Link>
    </Button>
  )
}

export default BackButton