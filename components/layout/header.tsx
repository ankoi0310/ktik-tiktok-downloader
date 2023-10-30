'use client'

import HowToUseDialog from '@/components/dialogs/how-to-use-dialog'
import MenuSheet from '@/components/layout/menu-sheet'
import { Logo } from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { LucideMenu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import * as rs from 'react-scroll'

const Header = () => {
  return (
    <header className={'w-full flex items-center justify-between p-4 px-8 bg-primary backdrop-blur-xl'}>
      <Link href={'/dashboard'}>
        <Logo width={40} height={40} />
      </Link>
      
      <div className={'hidden w-2/3 sm:flex flex-row items-center justify-between gap-8'}>
        <ul className={'flex-1 flex flex-row justify-evenly gap-4 text-background'}>
          <li>
            <HowToUseDialog>
              <span className={'cursor-pointer'}>How to use</span>
            </HowToUseDialog>
          </li>
          <li>
            <rs.Link
              to={'about'}
              spy
              smooth
              offset={-50}
              duration={500}
              className={'cursor-pointer'}
            >
              About
            </rs.Link>
          </li>
          <li>
            <rs.Link
              to={'faq'}
              spy
              smooth
              offset={-50}
              duration={500}
              className={'cursor-pointer'}
            >
              FAQs
            </rs.Link>
          </li>
          <li>
            <rs.Link
              to={'contact'}
              spy
              smooth
              offset={-50}
              duration={500}
              className={'cursor-pointer'}
            >
              Contact
            </rs.Link>
          </li>
          <li>
            <Link href={'/terms'}>Terms of Service</Link>
          </li>
        </ul>
        <Button variant={'outline'}>
          <Link href={'/download'}>
            Download App
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
