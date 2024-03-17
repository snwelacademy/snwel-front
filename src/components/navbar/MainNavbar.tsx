
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
import menus, { Menu } from '@/data/menu';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { SearchIcon, ShoppingBagIcon } from 'lucide-react';

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
      <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className='md:w-[500px] grid grid-cols-2 md:grid-cols-2 gap-2 p-2'>
        {
          menu.children?.map(m => {
            return <Link to={m.link || '#'} className='flex w-full'>
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
    console.log(isActive, Boolean(menu.link && menu.link === pathname))
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
  return (
    <div className='flex items-center justify-between gap-4 py-3 px-2 md:px-10 bg-background'>

      <div>
        <Logo />
      </div>

      <div className=''>
        <NavigationMenu>
          <NavigationMenuList>
            {
              menus.map(m => {
                return !m.children || m.children.length <= 0 ?
                  <SimpleNavlink menu={m} />
                  : <MenuItemChildren menu={m} />
              })
            }

          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className='inline-flex items-center gap-3'>
        <Button size={'icon'} variant={'ghost'}><SearchIcon/></Button>
        <Button size={'icon'} variant={'ghost'}><ShoppingBagIcon/></Button>
        <Button>GET STARTED</Button>
      </div>

    </div>
  )
}

export default MainNavbar