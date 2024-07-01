
import MainNavbar from './navbar/MainNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import TopStrip from './shared/TopStrip'
import React from 'react'
import PageLoader from './PageLoader'
import { useWindowScroll } from '@uidotdev/usehooks'
import { cn } from '@/lib/utils'

const MainLayout = () => {
    const [data] = useWindowScroll();

    return (
        <div className='relative'>
            <TopStrip />
            <nav className={cn([
                'bg-transparent z-50 sticky top-0',
                {'shadow-xl': data.y == 200}
            ])}>
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