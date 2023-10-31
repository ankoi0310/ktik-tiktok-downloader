'use client'

import HowToUseDialog from '@/components/dialogs/how-to-use-dialog'
import MenuSheet from '@/components/layout/menu-sheet'
import { Logo } from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { RESOURSES_NAV_ITEMS } from '@/lib/constants'
import { LucideDownload, LucideMenu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import * as rs from 'react-scroll'

const Header = () => {
  return (
    <header className={'w-full flex items-center justify-between gap-4 lg:gap-0 p-4 px-8 bg-primary backdrop-blur-xl'}>
      <Link href={'/'}>
        <Logo width={40} height={40} />
      </Link>
      
      <div className={'hidden w-full lg:w-2/3 sm:flex flex-row items-center justify-between gap-4 lg:gap-8'}>
        <ul className={'flex-1 flex flex-row items-center justify-evenly gap-2 lg:gap-4 text-background/50'}>
          <li className={'nav-link'}>
            <HowToUseDialog>
              <span className={'cursor-pointer'}>How to use</span>
            </HowToUseDialog>
          </li>
          {
            RESOURSES_NAV_ITEMS.map((item, index) => (
              <li key={index} className={'nav-link'}>
                <rs.Link
                  to={item.to}
                  spy
                  smooth
                  offset={-50}
                  duration={500}
                  className={'cursor-pointer'}
                >
                  {item.title}
                </rs.Link>
              </li>
            ))
          }
          <li className={'nav-link'}>
            <Link href={'/terms'}>Terms of Service</Link>
          </li>
        </ul>
        <Button variant={'outline'}>
          <Link href={'/download'} className={'hidden md:flex'}>
            Download App
          </Link>
          <Link href={'/download'} className={'flex md:hidden'}>
            <LucideDownload size={20} />
          </Link>
        </Button>
      </div>
      
      <MenuSheet>
        <LucideMenu className={'sm:hidden cursor-pointer text-background'} size={30} />
      </MenuSheet>
    </header>
  )
}
export default Header
