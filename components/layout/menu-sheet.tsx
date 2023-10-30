import HowToUseDialog from '@/components/dialogs/how-to-use-dialog'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import React from 'react'
import * as rs from 'react-scroll'

type Props = {
  children: React.ReactNode
}

const MenuSheet = ({ children }: Props) => {
  const [open, setOpen] = React.useState(false)
  
  return (
    <Sheet
      open={open}
      onOpenChange={(open) => setOpen(open)}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <div className={'w-full flex flex-col justify-evenly gap-4 py-4'}>
          <HowToUseDialog modal={true}>
            <span className={'cursor-pointer font-semibold'}>How to use</span>
          </HowToUseDialog>
          <rs.Link
            to={'about'}
            spy
            smooth
            offset={-50}
            duration={500}
            className={'cursor-pointer font-semibold'}
            onClick={() => setOpen(false)}
          >
            About
          </rs.Link>
          <rs.Link
            to={'faq'}
            spy
            smooth
            offset={-50}
            duration={500}
            className={'cursor-pointer font-semibold'}
            onClick={() => setOpen(false)}
          >
            FAQs
          </rs.Link>
          <rs.Link
            to={'contact'}
            spy
            smooth
            offset={-50}
            duration={500}
            className={'cursor-pointer font-semibold'}
            onClick={() => setOpen(false)}
          >
            Contact
          </rs.Link>
          <Link href={'/terms'} className={'font-semibold'}>Terms of Service</Link>
        </div>
        <SheetFooter>
          <Button>
            <Link href={'/download'}>
              Download App
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
export default MenuSheet
