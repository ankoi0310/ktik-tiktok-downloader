import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

const Privacy = () => {
  return (
    <div className={'flex flex-col items-center justify-center gap-8 md:gap-12'}>
      <div className={'flex flex-col items-center justify-start gap-2'}>
        <h1 className={'text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center'}>Privacy Policy</h1>
      </div>
      
      <div className={'w-4/5 flex flex-col gap-6'}>
        <Label className={'italic'}>Last Updated: October 31, 2023</Label>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>1. Collection of Information</Label>
          <div className={'flex flex-col gap-3 pl-3'}>
            <Label className={'text-md'}>
              1.1. Anonymous Usage: Users may visit KTik anonymously without the need to provide any personal
              information or create an account.
            </Label>
            <Label className={'text-md'}>
              1.2. Cookies: KTik may use cookies or similar tracking technologies to enhance user experience and
              gather non-personal information about site usage.
            </Label>
          </div>
        </div>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>2. Disclosure and Sharing</Label>
          <div className={'flex flex-col gap-3 pl-3'}>
            <Label className={'text-md'}>
              2.1. KTik does not collect or store personal information from users, and we do not share any user
              information with third parties.
            </Label>
            <Label className={'text-md'}>
              2.2. While using Google Advertising, please review Google's Privacy Policy for information about their
              data collection and usage practices.
            </Label>
          </div>
        </div>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>3. Security</Label>
          <Label className={'text-md pl-3'}>
            KTik takes reasonable steps to secure its platform; however, we cannot guarantee the security of your
            information.
          </Label>
        </div>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>4. Changes to Privacy Policy</Label>
          <Label className={'text-md pl-3'}>
            KTik may update this Privacy Policy to reflect changes in our practices. It is your responsibility to review
            the policy periodically.
          </Label>
        </div>
        <div className={'flex flex-col gap-2'}>
          <Label className={'text-xl font-bold'}>Contact Us</Label>
          <div className={'flex flex-col gap-3 pl-3'}>
            <Label className={'text-md'}>
              If you have any questions or concerns about these Terms of Service or Privacy Policy, please contact us
              at
              {' '}
              <Link href={'mailto:huynhvahuuan3620@gmail.com'} className={'font-semibold'}>
                huynhvahuuan3620@gmail.com
              </Link>.
            </Label>
          </div>
        </div>
        <Label className={'text-md'}>
          By using KTik, you signify your agreement to these terms and policies. Please read and understand them
          carefully. Your continued use of the service implies acceptance of any updates or modifications to these
          terms.
        </Label>
        <Label className={'italic'}>End of Privacy Policy</Label>
      </div>
    </div>
  )
}
export default Privacy
