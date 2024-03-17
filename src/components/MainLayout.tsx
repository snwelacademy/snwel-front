
import MainNavbar from './navbar/MainNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import TopStrip from './shared/TopStrip'

const MainLayout = () => {
    return (
        <div>
            <TopStrip />
            <nav className=' bg-transparent'>
                <MainNavbar />
            </nav>

            <div>
                <Outlet />
            </div>

            <footer className='bg-black'><Footer /></footer>
        </div>
    )
}

export default MainLayout