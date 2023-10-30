import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { socialLinks } from '@/lib/constants'
import { LucideFacebook, LucideMail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <Card className={'flex flex-col lg:flex-row justify-between gap-8 p-6'}>
      <div className={'flex flex-col items-center sm:items-start gap-4'}>
        <Label className={'text-lg font-bold'}>
          Feel free to contact me
        </Label>
        <div className={'flex flex-row items-center gap-4'}>
          <LucideFacebook size={24} />
          <Link
            href={'https://www.facebook.com/KOI0310.IT'}
            className={'text-md font-semibold hover:underline'}
          >
            Koi <span className={'opacity-60'}>(Huynh Van Huu An)</span>
          </Link>
        </div>
        <div className={'flex flex-row items-center gap-4'}>
          <LucideMail size={24} />
          <Link
            href={'mailto:huynhvahuuan3620@gmail.com'}
            className={'text-md font-semibold hover:underline'}
          >
            huynhvahuuan3620@gmail.com
          </Link>
        </div>
      </div>
      <div className={'w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col items-center gap-4'}>
        <Label className={'text-lg font-bold'}>
          Don't forget to follow me on
        </Label>
        <div className={'flex flex-row items-center gap-6'}>
          {
            socialLinks.map((link, index) => (
              <Link href={link.href} key={index}>
                <link.icon size={24} ></link.icon>
              </Link>
            ))
          }
        </div>
      </div>
    </Card>
  )
}
export default Contact
