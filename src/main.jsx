import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mathematics from './pages/Mathematics';
import BlogPost from './pages/BlogPost';
import SingleBlog from './pages/SingleBlog';
import Physics from './pages/Physics';
import MathematicsTwo from './pages/MathematicsTwo';
import C from './pages/C';
import Ece from './pages/Ece';
import Iot from './pages/Iot';
import Python from './pages/Python';
import Home from './pages/Home';
import './index.css';
import Civil from './pages/Civil';
import Chemistry from './pages/Chemistry';
import Academics from  './pages/Academics';
import Student from './pages/Student';
import About from './pages/About';
import ContactForm from './pages/ContactForm'


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Student/>},
  { path: "/About", element: <About/>},
  { path: "/Contact", element: <ContactForm/>},
  { path: "/Academics", element: <Academics /> },
  { path: "/Academic/Mathematics-I", element: <Mathematics /> },
  { path: "/Blog/Create-Blog", element: <BlogPost /> },
  { path: "/Blog/Single-Blog/:id", element: <SingleBlog /> },
  { path: "/Academic/Applied-Physics", element: <Physics /> },
  { path: "/Academic/Mathematics-II", element: <MathematicsTwo /> },
  { path: "/Academic/C", element: <C /> },
  { path: "/Academic/Ece", element: <Ece /> },
  { path: "/Academic/Iot", element: <Iot /> },
  { path: "/Academic/Python", element: <Python /> },
  { path: "/Academic/Civil", element: <Civil /> },
  { path: "/Academic/Chemistry", element: <Chemistry /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
