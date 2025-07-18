import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import BookDetails from './components/Books/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ReadList from './components/ListedBooks/ReadList';
import WishList from './components/ListedBooks/WishList';
import PagesToRead from './components/PagesToRead/PagesToRead';
import LogIn from './components/Authentication/LogIn';
import Register from './components/Authentication/register';
import AuthProvider from './components/Authentication/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:'/details/:bookId',
        element:<BookDetails></BookDetails>,
        loader:  () => fetch('/books.json').then(res => res.json())
      },
      {
        path:'/pages',
        element: <PagesToRead></PagesToRead>,
        loader:  () => fetch('/books.json').then(res => res.json())
      },
      {
        path:'/list/read',
        element:<ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json').then(res => res.json()),
        children:[
          {
            path:'/list/read',
            element: <ReadList></ReadList>,
            loader: () => fetch('/books.json').then(res => res.json())
          },
          {
            path:'/list/read/wishlist',
            element: <WishList></WishList>,
            loader: () => fetch('/books.json').then(res => res.json())
          }
        ]
      },
      {
        path:'/login',
        element: <LogIn></LogIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
