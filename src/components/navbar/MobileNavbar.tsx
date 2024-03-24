import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'
import Logo from "../shared/Logo"
import menus from "@/data/menu"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"
import { constants } from "@/config/constants"


const MobileNavbar = () => {
    return (
        <Drawer direction="left" shouldScaleBackground>
            <DrawerTrigger asChild ><Button><MenuIcon /></Button></DrawerTrigger>
            <DrawerContent className="h-full rounded-none rounded-tr-2xl rounded-br-2xl w-[80%] overflow-hidden" style={{ backgroundImage: `url(${constants.imagePath + '/mobile-menu-bg.jpg'})` }}>
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10 bg-white"></div>
                <DrawerHeader className="justify-center">
                    <DrawerTitle><Logo /></DrawerTitle>
                </DrawerHeader>
                <div className="h-full flex  flex-col items-center justify-center">
                    {
                        menus.map(menu => {
                            return <DrawerClose key={nanoid()}>
                             <div className="px-4 py-4 text-3xl font-extralight" key={nanoid()}>
                                    <Link to={menu.link || '#'} className="" key={nanoid()} >

                                        {menu.label}
                                    </Link>
                            </div>
                                </DrawerClose>
                        })
                    }
                </div>
                <DrawerFooter>
                    <DrawerClose>
                        <a href="mail:shivamsi687@gmail.com"><Button className="w-full">Email Us</Button></a>
                    </DrawerClose>
                    {/* <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose> */}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}

export default MobileNavbar