import AudioCard from '@/components/cards/audio-card'
import ImageCard from '@/components/cards/image-card'
import VideoCard from '@/components/cards/video-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { VideoInfo } from '@/lib/types'
import React, { useEffect } from 'react'

type Props = {
  videoInfo: VideoInfo
}

type media = 'video' | 'image' | 'audio'

const MediaTab = ({ videoInfo }: Props) => {
  const [activeTab, setActiveTab] = React.useState<media>('video')
  
  useEffect(() => {
    setActiveTab(videoInfo.post_type === 'video_post' ? 'video' : 'image')
  }, [videoInfo])
  
  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as media)}
      className={'w-full md:w-4/5'}
    >
      <TabsList className='w-full grid grid-cols-2'>
        {
          videoInfo.post_type === 'video_post' ? (
            <TabsTrigger value='video'>Video</TabsTrigger>
          ) : (
            <TabsTrigger value='image'>Image</TabsTrigger>
          )
        }
        <TabsTrigger value='audio'>Audio</TabsTrigger>
      </TabsList>
      {
        videoInfo.post_type === 'video_post' ? (
          <TabsContent value='video'>
            <VideoCard videoInfo={videoInfo} />
          </TabsContent>
        ) : (
          <TabsContent value='image'>
            <ImageCard imageUrls={videoInfo.images!} />
          </TabsContent>
        )
      }
      <TabsContent value='audio'>
        <AudioCard videoInfo={videoInfo} />
      </TabsContent>
    </Tabs>
  )
}
export default MediaTab
