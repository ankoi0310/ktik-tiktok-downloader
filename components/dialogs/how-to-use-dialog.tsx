'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import React from 'react'

type Props = {
  children: React.ReactNode
  modal?: boolean
}

const HowToUseDialog = ({ children, modal }: Props) => {
  const [open, setOpen] = React.useState(false)
  
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => setOpen(open)}
      modal={modal}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'flex items-center justify-center text-xl font-extrabold uppercase'}>
            How to use
          </DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          <Label className={'text-md'}>
            <span className={'font-bold'}>Step 1:</span> Open TikTok and copy the link of the video you want to
            download.
          </Label>
          <Label className={'text-md'}>
            <span className={'font-bold'}>Step 2:</span> Paste the link in the input field on the homepage.
          </Label>
          <Label className={'text-md'}>
            <span className={'font-bold'}>Step 3:</span> Click the <b>Download</b> button and wait for the video to be
            processed.
          </Label>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} className={'w-full '}>I got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default HowToUseDialog
