
import MainNavbar from './navbar/MainNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import TopStrip from './shared/TopStrip'

const MainLayout = () => {
    return (
        <div>
            <TopStrip />
            <nav className=' bg-transparent z-50'>
                <MainNavbar />
            </nav>

            <div>
                <Outlet />
            </div>

            <footer className='bg-primary/20'><Footer /></footer>
        </div>
    )
}

export default MainLayout