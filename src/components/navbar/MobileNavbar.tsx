import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'
import Logo from "../shared/Logo"

const MobileNavbar = () => {
    return (
        <Drawer direction="left" shouldScaleBackground>
            <DrawerTrigger asChild ><Button><MenuIcon/></Button></DrawerTrigger>
            <DrawerContent className="h-full rounded-none rounded-tr-2xl rounded-br-2xl w-[80%]">
                <DrawerHeader>
                    <DrawerTitle><Logo/></DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}

export default MobileNavbar