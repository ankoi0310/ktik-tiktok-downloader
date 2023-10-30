import ProgressBar from '@/components/shared/progress-bar'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { VideoInfo } from '@/lib/types'
import Image from 'next/image'
import React, { useEffect } from 'react'
import useDownloader from 'react-use-downloader'

type Props = {
  videoInfo: VideoInfo
}

const VideoCard = ({ videoInfo }: Props) => {
  const { toast } = useToast()
  const { percentage, download, error, isInProgress } = useDownloader();
  
  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Failed to download',
        description: error.errorMessage,
      })
    }
  }, [error])
  
  return (
    <Card className={'flex flex-col gap-4 p-4'}>
      {
        isInProgress && <ProgressBar percentage={percentage} />
      }
      <div className={'flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 justify-between'}>
        <div className={'w-full lg:w-2/3 flex gap-4'}>
          <div className={'border-2 border-primary rounded-md p-1'}>
            <Image
              src={videoInfo.dynamic_cover[0]}
              alt='cover'
              priority
              width={150}
              height={150}
              className={'w-full h-auto object-cover'}
            />
          </div>
          <div className='flex-1 flex flex-col gap-2 pt-2'>
            <CardTitle className={'line-clamp-5 md:line-clamp-7'}>
              {videoInfo.description}
            </CardTitle>
            <CardDescription>
              {videoInfo.author}
            </CardDescription>
          </div>
        </div>
        <div className={'flex-1'}>
          <div className={'flex-1 flex justify-end lg:pr-4 xl:pr-16'}>
            <Button
              onClick={async () => await download(videoInfo.video[0], `KTik_${Date.now()}.mp4`)}
              className={'w-full lg:w-fit'}
            >
              Download Video
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
export default VideoCard
