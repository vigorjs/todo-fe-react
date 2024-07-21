import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './pages/Auth/Login';
import NotFound404 from './pages/NotFound404';
import Register from './pages/Auth/Register';
import HeadUpdater from './components/HeadUpdater';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Dashboard } from './pages/Dashboard';

export default function App() {

  const headerTags = {
    title: 'Home', 
    keywords: 'login, register, todo, java todo app', 
    titleTemplate: "%s - Java Todo App"
  }

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Dashboard/>,
      errorElement: <NotFound404/>
    },
    {
      path: '/login', 
      element: <Login/>
    },
    {
      path: '/register', 
      element: <Register/>
    }
  ]);

  return (
    <>
    <HelmetProvider>
        <HeadUpdater headerTags={headerTags}/>
        <RouterProvider router={router}/>
    </HelmetProvider>
    <Toaster />
    </>
  )
}
