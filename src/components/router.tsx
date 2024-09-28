/* Thi is router */
import * as React from 'react';
// https://reactrouter.com/en/main/start/overview
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppFC } from './App';

const router_ = createBrowserRouter([
  {
    path: '/',
    element: <AppFC />
  }
]);

const pagesProvider = (
  <RouterProvider router={router_} />
);


type PP = typeof pagesProvider;
export function PagesRouter(): PP {
  return pagesProvider;
}
