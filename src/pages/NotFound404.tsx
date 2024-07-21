import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function NotFound404() {
  return (
    <>
        <div>NotFound404</div>
        <Link to={"/"}>
            <Button>Click Me</Button>
        </Link>
    </>
  )
}
