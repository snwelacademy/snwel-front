
import { Link, useLocation } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Logo from '../shared/Logo';
import  { Menu } from '@/data/menu';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { SearchIcon, ShoppingBagIcon } from 'lucide-react';
import { nanoid } from 'nanoid';
import MobileNavbar from './MobileNavbar';
import { useQuery } from '@tanstack/react-query';
import { getAllCourseCategories } from '@/services/admin/course-category-service';

// const CategoryMenu = ({
//   menu
// }: {
//   menu: Menu[]
// }) => {
//   <div className='md:w-[500px] lg:w-[]'>
//         {
//            menu.children?.map(m => {
//             return <Link to={m.link || '#'}>
//               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                 {m.label}
//               </NavigationMenuLink>
//             </Link>
//           })
//         }
//         </div>
// }

const MenuItemChildren = ({
  menu
}: { menu: Menu }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger><Link to={menu.link||'#'}>{menu.label}</Link></NavigationMenuTrigger>
      <NavigationMenuContent className="left-0">
        <div className='w-[500px] grid grid-cols-2 md:grid-cols-2 gap-2 p-2'>
        {
          menu.children?.map(m => {
            return <Link to={m.link || '#'} className='flex w-full' key={nanoid()}>
              <NavigationMenuLink className={cn([navigationMenuTriggerStyle(), 'block w-full'])}>
                {m.label}
              </NavigationMenuLink>
            </Link>
          })
        }
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

const SimpleNavlink = ({ menu }: { menu: Menu }) => {
  const [isActive, setIsActive] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    setIsActive(Boolean(menu.link && menu.link === pathname));
  },[pathname] )

  return (
    <Link to={menu?.link||'#'} >
      <NavigationMenuLink className={cn([
        navigationMenuTriggerStyle(),
        {
          'bg-destructive text-destructive-foreground hover:bg-destructive/80 hover:text-destructive-foreground': isActive
        }
      ])}>
        {menu.label}
      </NavigationMenuLink>
    </Link>
  )
}



const MainNavbar = () => {
  const { data: categories } = useQuery({
    queryKey: ['/admin/course-category'],
    queryFn: () => getAllCourseCategories()
  });
  return (
    <div className='flex items-center justify-between gap-4 py-3 px-2 md:px-10 bg-background'>

      <div>
        <Link to="/"><Logo /></Link>
      </div>

      <div className='hidden md:block'>
        <NavigationMenu>
          <NavigationMenuList>

            <SimpleNavlink menu={{label: "Home", link: "/"}} />
            <MenuItemChildren menu={{
              label: "Courses", 
              link: "/courses",
              children: categories?.docs.map(ctg => ({label: ctg.title, link: `/courses/?category=${ctg.slug}`}))
              }} key={nanoid()} />
            <SimpleNavlink menu={{label: "About", link: "/about"}} />
            <SimpleNavlink menu={{label: "Contact", link: "/contact"}} />
            <SimpleNavlink menu={{label: "Blogs", link: "/blogs"}} />
            <SimpleNavlink menu={{label: "Webinars", link: "/webinars"}} />
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className='block md:hidden'>
        <MobileNavbar/>
      </div>

      <div className=' items-center gap-3 hidden md:inline-flex'>
        <Button size={'icon'} variant={'ghost'}><SearchIcon/></Button>
        <Button size={'icon'} variant={'ghost'}><ShoppingBagIcon/></Button>
        <Button>GET STARTED</Button>
      </div>

    </div>
  )
}

export default MainNavbar