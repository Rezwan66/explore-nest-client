import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './providers/AuthProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
