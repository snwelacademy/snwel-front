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
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"
import { constants } from "@/config/constants"
import { useQuery } from "@tanstack/react-query"
import { getAllCourseCategories } from "@/services/admin/course-category-service"


const MobileNavbar = () => {
    const { data: categories } = useQuery({
        queryKey: ['/admin/course-category'],
        queryFn: () => getAllCourseCategories()
    });
    return (
        <Drawer direction="left" shouldScaleBackground>
            <DrawerTrigger asChild ><Button><MenuIcon /></Button></DrawerTrigger>
            <DrawerContent className="h-full rounded-none rounded-tr-2xl rounded-br-2xl w-[80%] overflow-hidden" style={{ backgroundImage: `url(${constants.imagePath + '/mobile-menu-bg.jpg'})` }}>
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10 bg-white"></div>
                <DrawerHeader className="justify-center">
                    <DrawerTitle><Logo /></DrawerTitle>
                </DrawerHeader>
                <div className="h-full flex  flex-col items-center justify-center">
                    <div className="px-4 py-4 text-3xl font-extralight" key={nanoid()}>
                        <Link to="/" >Home</Link>
                    </div>
                    {
                        categories?.docs.map(ctg => {
                            return <DrawerClose key={nanoid()}>
                                <div className="px-4 py-4 text-3xl font-extralight" key={nanoid()}>
                                    <Link to={`/category/${ctg.slug}` || '#'} className="" key={nanoid()} >

                                        {ctg.title}
                                    </Link>
                                </div>
                            </DrawerClose>
                        })
                    }
                    <div className="px-4 py-4 text-3xl font-extralight" key={nanoid()}>
                        <Link to="/about" >About</Link>
                    </div>
                    <div className="px-4 py-4 text-3xl font-extralight" key={nanoid()}>
                        <Link to="/contact" >Contact</Link>
                    </div>
                    <div className="px-4 py-4 text-3xl font-extralight" key={nanoid()}>
                        <Link to="/blogs" >Blogs</Link>
                    </div>
                    <div className="px-4 py-4 text-3xl font-extralight" key={nanoid()}>
                        <Link to="/webinars" >Webinars</Link>
                    </div>
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