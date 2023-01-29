import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDown } from 'phosphor-react';

export function NavigationMenuComponent() {
  return (
    <NavigationMenu.Root className='lg:relative'>
      <NavigationMenu.List className='flex flex-col lg:flex-row gap-7'>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='text-black lg:text-white flex items-center gap-1'>
            Product
            <CaretDown />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='bg-gray-200 lg:bg-white text-center absolute left-0 top-8 py-5 px-3 rounded-md shadow-xl'>
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Newsletter</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='text-black lg:text-white flex items-center gap-1'>
            Company
            <CaretDown />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='bg-gray-200 lg:bg-white text-center absolute top-1/2 translate-y-4 lg:left-1/2 lg:-translate-x-1/2 lg:top-8 py-5 px-3 rounded-md shadow-xl'>
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Newsletter</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='text-black lg:text-white flex items-center gap-1'>
            Connect
            <CaretDown />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='bg-gray-200 lg:bg-white text-center absolute max-lg:top-32 lg:right-0 lg:top-8 py-5 px-3 rounded-md shadow-xl'>
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Newsletter</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>


        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}