import { Logo } from '@/components/shared/logo'
import React from 'react'

const Footer = () => {
  return (
    <footer className={'flex flex-col items-center gap-4 bg-primary text-background rounded-t-xl'}>
      <div className={'w-full flex justify-between gap-8 p-8 pb-4'}>
        <div className={'hidden w-1/3 md:flex flex-col items-center justify-center gap-4 pt-4'}>
          <Logo height={50} width={50} />
          <p>KTik - TikTok Downloader</p>
        </div>
        <div className={'w-full grid gap-4 md:w-2/3 grid-cols-2 lg:grid-cols-4'}>
          <div className={'flex flex-col gap-2 text-sm'}>
            <p className={'font-semibold'}>Resources</p>
            <ul className={'flex flex-col gap-1 text-muted/50'}>
              <li>About</li>
              <li>Contact</li>
              <li>How to use</li>
            </ul>
          </div>
          <div className={'flex flex-col gap-2 text-sm'}>
            <p className={'font-semibold'}>Tools</p>
            <ul className={'flex flex-col gap-1 text-muted/50'}>
              <li>KTik</li>
            </ul>
          </div>
          <div className={'flex flex-col gap-2 text-sm'}>
            <p className={'font-semibold'}>Legal</p>
            <ul className={'flex flex-col gap-1 text-muted/50'}>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className={'flex flex-col gap-2 text-sm'}>
            <p className={'font-semibold'}>Download</p>
            <ul className={'flex flex-col gap-1 text-muted/50'}>
              <li>KTik for Android</li>
              <li>KTik for iOS</li>
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
