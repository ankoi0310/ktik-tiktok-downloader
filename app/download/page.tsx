import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { APP_PLAY_STORE_URL } from '@/lib/constants'
import { AlertCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import QRCodePlayStore from '@/public/qrcode_playstore.svg'

const Download = () => {
  return (
    <div className={'flex flex-col justify-center gap-8 md:gap-12'}>
      <div className={'flex flex-col items-center justify-start gap-2'}>
        <h1 className={'text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center'}>Download</h1>
        <p className={'text-sm sm:text-lg md:text-xl text-center'}>
          Download the app for your device
        </p>
      </div>
      
      <div className={'flex flex-col-reverse justify-center md:flex-row md:justify-evenly gap-8'}>
        <div className={'flex-1 flex flex-col items-center gap-4'}>
          <Link href={APP_PLAY_STORE_URL} target={'_blank'}>
            <Image
              alt='Get it on Google Play'
              src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
              width={200}
              height={80}
              className={'w-full h-auto object-cover'}
            />
          </Link>
          <div className={'flex flex-col items-center gap-2'}>
            <Label className={'text-sm'}>Or scan this QR code</Label>
            <Card className={'p-4 border-2 border-primary'}>
              <QRCodePlayStore />
            </Card>
          </div>
        </div>
        
        <div className={'flex-1 flex flex-col items-center'}>
          <Alert className={'w-full lg:w-2/3 border-blue-600/50 text-blue-600 [&>svg]:text-blue-600'}>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Notification</AlertTitle>
            <AlertDescription>
              Appstore version is coming soon. Please use the web version for now. Thank you!
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
export default Download
