
import MainNavbar from './navbar/MainNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import TopStrip from './shared/TopStrip'
import React from 'react'
import PageLoader from './PageLoader'

const MainLayout = () => {
    return (
        <div>
            <TopStrip />
            <nav className=' bg-transparent z-50'>
                <MainNavbar />
            </nav>

            <div>
                <React.Suspense fallback={<PageLoader/>}>
                    <Outlet />
                </React.Suspense>
            </div>

            <footer className='bg-primary/20'><Footer /></footer>
        </div>
    )
}

export default MainLayout