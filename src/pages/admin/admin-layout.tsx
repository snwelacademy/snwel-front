/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ProtectedRoute.js


import Loader from '@/components/Loader';
import PageLoader from '@/components/PageLoader';
import { useAuth } from '@/components/auth/AuthProvider';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/header';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AdminLayout() {
  const { currentUser, token } = useAuth()

  if (!currentUser || !token) {
    console.log("Not logged in")
    return <Navigate to={'/login'} />
  }

  return <>
    <Header />
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="w-full pt-16 overflow-auto relative">
        <React.Suspense fallback={<PageLoader/>}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  </>
}

export default AdminLayout;

