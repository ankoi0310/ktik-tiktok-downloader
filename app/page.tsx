'use client'

import Contact from '@/app/components/contact'
import FaqAccordion from '@/app/components/faq-accordion'
import MediaTab from '@/app/components/media-tab'
import AdSense from '@/components/adsense/AdSense'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { APP_PLAY_STORE_URL } from '@/lib/constants'
import { VideoInfo } from '@/lib/types'
import { signJWT } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  url: z.coerce.string().trim().url({
    message: 'Please enter a valid url',
  }),
})

type Schema = z.infer<typeof schema>

export default function Home() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  
  const onSubmit = async (data: Schema) => {
    setLoading(true)
    const response = await axios.get(
      '/api/video',
      {
        params: {
          url: data.url,
          token: await signJWT(),
        },
      },
    )
    
    if (response.status === 200) {
      setVideoInfo(response.data as VideoInfo)
    } else {
      toast({
        variant: 'destructive',
        title: 'Failed to get video info',
        description: 'Please try again',
      })
    }
    setLoading(false)
  }
  
  return (
    <div id={'home'} className={'flex flex-col items-center justify-center gap-8 md:gap-12'}>
      <div className={'flex flex-col items-center justify-center gap-2'}>
        <h1 className={'text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center'}>
          KTik - TikTok Downloader
        </h1>
        <p className={'text-sm sm:text-lg md:text-xl text-center'}>Download any video, image from TikTok</p>
      </div>
      
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={'flex flex-col justify-center gap-4 w-full sm:flex-row sm:gap-2 sm:w-3/4 lg:w-2/3'}
        >
          <FormField
            control={form.control}
            name='url'
            defaultValue={''}
            render={({ field }) => (
              <FormItem className={'w-full flex flex-col gap-0 sm:gap-2'}>
                <FormControl>
                  <Input
                    {...field}
                    className={'border-primary'}
                    placeholder={'Enter a url'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>
            {
              loading ? (
                <div className={'flex items-center justify-center gap-2'}>
                  <span
                    className='animate-spin rounded-full h-4 w-4 border-b-2 border-background'
                  />
                </div>
              ) : 'Download'
            }
          </Button>
        </form>
      </Form>
      
      {
        videoInfo && (
          <MediaTab videoInfo={videoInfo} />
        )
      }
      
      <AdSense adSlot={'3561411455'} />
      
      <div id={'about'} className={'w-full flex flex-col gap-4'}>
        <h2 className={'text-center sm:text-start text-2xl font-bold'}>About KTik</h2>
        <p className={'text-sm sm:text-lg md:text-xl'}>
          KTik is a free online tool that allows you to download videos and images from TikTok.
          It is very easy to use, just paste the link and download the video or image.
          You can also download the audio from the video.
        </p>
        <i>
          <b>Note:</b> KTik is not affiliated with TikTok or ByteDance Ltd. in any way. TikTok and all related logos,
          designs, and elements are the trademarks of ByteDance Ltd. KTik does not host any pirated or copyright
          content, we just support users to download videos and images from TikTok without watermarks. If you have any
          questions, please contact us at{' '}
          <a href={'mailto:huynhvahuuan3620@gmail.com'}
             className={'text-primary font-bold'}>huynhvahuuan3620@gmail.com</a>
          . We will respond as soon as possible. Thank you!
        </i>
      </div>
      
      <div className={'w-full flex flex-col gap-4'}>
        <h2 className={'text-center sm:text-start text-2xl font-bold'}>Download KTik for mobile</h2>
        <p className={'text-sm sm:text-lg md:text-xl'}>
          KTik is available for Android now. We are working hard to bring KTik to iOS users, you can use the web version instead.
          <br/>
          Download the app for free and enjoy its features.
        </p>
        
        <div className={'flex flex-col sm:flex-row gap-4'}>
          <Button className={'w-full sm:w-fit'}>
            <Link href={APP_PLAY_STORE_URL} target={'_blank'}>
              Download for Android
            </Link>
          </Button>
        </div>
      </div>
      
      <div id={'faq'} className={'w-full flex flex-col gap-4'}>
        <h2 className={'text-center sm:text-start text-2xl font-bold'}>Frequently Asked Questions</h2>
        <FaqAccordion />
      </div>
      
      <AdSense adSlot={'4771983590'} />
      
      <div id={'contact'} className={'w-full flex flex-col gap-4'}>
        <h2 className={'text-center sm:text-start text-2xl font-bold'}>Contact Information</h2>
        <Contact />
      </div>
    </div>
  )
}
