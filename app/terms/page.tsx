import { Label } from '@/components/ui/label'
import React from 'react'

const Terms = () => {
  return (
    <div className={'flex flex-col items-center justify-center gap-8 md:gap-12'}>
      <div className={'flex flex-col items-center justify-start gap-2'}>
        <h1 className={'text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center'}>Terms of Service</h1>
        <p className={'text-sm sm:text-lg md:text-xl text-center'}>
          Please read these Terms of Service carefully before using our services.
        </p>
      </div>
      
      <div className={'w-4/5 flex flex-col gap-6'}>
        <Label className={'italic'}>Last Updated: October 31, 2023</Label>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>1. Acceptance of Terms</Label>
          <Label className={'text-md pl-3'}>
            By accessing or using KTik - TikTok Downloader (hereinafter referred to as "KTik" or "the Service"), you
            agree to abide by and comply with these Terms of Service. If you do not agree with any of these terms,
            please do not use the service.
          </Label>
        </div>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>2. Disclaimer</Label>
          <Label className={'text-md pl-3'}>
            KTik is an independent online platform that allows users to download TikTok videos, images, and audio
            without watermarks or logos. We are not affiliated with TikTok or ByteDance Ltd. We respect copyright laws
            and regulations, and we expect our users to do the same.
          </Label>
        </div>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>3. Use of the Service</Label>
          <div className={'flex flex-col gap-3 pl-3'}>
            <Label className={'text-md'}>
              3.1. You may use the Service for personal, non-commercial purposes only. You are not permitted to use
              KTik for any illegal or unauthorized purposes.
            </Label>
            <Label className={'text-md'}>
              3.2. You agree not to copy, distribute, or modify any content obtained through KTik for commercial
              purposes without obtaining the necessary permissions.
            </Label>
            <Label className={'text-md'}>
              3.3. KTik reserves the right to terminate or restrict access to the service if it suspects or has
              evidence of misuse, abuse, or violations of these terms.
            </Label>
          </div>
        </div>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>4. Copyright</Label>
          <Label className={'text-md pl-3'}>
            KTik respects copyrights and intellectual property rights. Users are responsible for ensuring they have the
            necessary permissions to download and use the content obtained from TikTok through our service.
          </Label>
        </div>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>5. Advertising</Label>
          <div className={'flex flex-col gap-3 pl-3'}>
            <Label className={'text-md'}>
              5.1. KTik uses Google Advertising to maintain and develop the system. By using the Service, you
              acknowledge and agree to the display of advertising as part of your user experience.
            </Label>
            <Label className={'text-md'}>
              5.2. KTik is not responsible for the content or privacy practices of third-party advertisers.
            </Label>
          </div>
        </div>
        <Label className={'italic'}>End of Terms of Service</Label>
      </div>
    </div>
  )
}
export default Terms
