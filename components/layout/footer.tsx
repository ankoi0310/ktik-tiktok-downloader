'use client'

import HowToUseDialog from '@/components/dialogs/how-to-use-dialog'
import { Logo } from '@/components/shared/logo'
import { Label } from '@/components/ui/label'
import { APP_PLAY_STORE_URL, LEGAL_NAV_ITEMS, RESOURSES_NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import * as rs from 'react-scroll'

const Footer = () => {
  return (
    <footer className={'flex flex-col items-center gap-4 bg-primary text-background rounded-t-xl'}>
      <div className={'w-full flex items-center justify-between gap-8 p-8 pb-4'}>
        <div className={'hidden w-1/3 md:flex flex-col items-center justify-center gap-4 pt-4'}>
          <Logo height={70} width={70} />
          <p>KTik - TikTok Downloader</p>
        </div>
        <div className={'w-full grid gap-4 md:w-2/3 grid-cols-2 lg:grid-cols-4'}>
          <div className={'flex flex-col gap-2 text-sm'}>
            <p className={'font-semibold'}>Resources</p>
            <ul className={'nav-menu'}>
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
                <HowToUseDialog>
                  <Label className={'cursor-pointer'}>How to use</Label>
                </HowToUseDialog>
              </li>
            </ul>
          </div>
          <div className={'flex flex-col gap-2 text-sm'}>
            <p className={'font-semibold'}>Tools</p>
            <ul className={'nav-menu'}>
              <li className={'nav-link'}>
                <Link href={'https://ktik.vercel.app'}>
                  KTik
                </Link>
              </li>
            </ul>
          </div>
          <div className={'flex flex-col gap-2 text-sm'}>
            <p className={'font-semibold'}>Legal</p>
            <ul className={'nav-menu'}>
              {
                LEGAL_NAV_ITEMS.map((item, index) => (
                  <li key={index} className={'nav-link'}>
                    <Link href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={'flex flex-col gap-2 text-sm'}>
            <p className={'font-semibold'}>Download</p>
            <ul className={'nav-menu'}>
              <li className={'nav-link'}>
                <Link target={'_blank'} href={APP_PLAY_STORE_URL}>
                  KTik for Android
                </Link>
              </li>
              <li className={'nav-link'}>
                <Label>
                  KTik for iOS (Coming Soon)
                </Label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={'w-full text-center text-background py-4'}>
        <p>Copyright © 2023 KTik | All Rights Reserved</p>
      </div>
    </footer>
  )
}
export default Footer
