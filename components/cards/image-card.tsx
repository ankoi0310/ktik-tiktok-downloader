import ProgressBar from '@/components/shared/progress-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/components/ui/use-toast'
import Image from 'next/image'
import React, { useEffect } from 'react'
import useDownloader from 'react-use-downloader'

type ImageDetailCardProps = {
  imageUrl: string
  fileName: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  downloader: ReturnType<typeof useDownloader>
}

const ImageDetailCard = ({ checked, onCheckedChange, imageUrl, fileName, downloader }: ImageDetailCardProps) => {
  const { toast } = useToast()
  const { percentage, download, error, isInProgress } = downloader
  
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
    <Card className={'relative'}>
      <CardContent className='relative pt-6'>
        <Image
          src={imageUrl}
          alt={fileName}
          priority
          quality={100}
          width={200}
          height={200}
          className={'w-full h-auto object-cover'}
        />
        <div className={'absolute z-10 right-8 top-7'}>
          <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={async () => await download(imageUrl, fileName)}
          className={'w-full'}
        >
          Download
        </Button>
      </CardFooter>
      {
        isInProgress && (
          <div className={'absolute top-0 w-full h-full bg-primary/50 z-20 px-3 flex items-center'}>
            <ProgressBar percentage={percentage} />
          </div>
        )
      }
    </Card>
  )
}

type Props = {
  imageUrls: string[]
}

const ImageCard = ({ imageUrls }: Props) => {
  const downloaders = imageUrls.map(() => useDownloader())
  const [checkList, setCheckList] = React.useState<boolean[]>(imageUrls.map(() => false))
  
  const handleSelectAll = () => {
    setCheckList((prev) => {
      return prev.map(() => true)
    })
  }
  
  const handleUnselectAll = () => {
    setCheckList((prev) => {
      return prev.map(() => false)
    })
  }
  
  const handleDownload = async () => {
    const checkedImages = imageUrls.filter((_, index) => checkList[index])
    const checkedDownloader = downloaders.filter((_, index) => checkList[index])
    
    await Promise.all(checkedDownloader.map((downloader, index) => {
      return downloader.download(checkedImages[index], `KTik_${Date.now()}_${index + 1}.jpg`)
    }))
  }
  
  return (
    <Card className={'flex flex-col gap-4 bg-secondary p-4'}>
      <div className={'flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2'}>
        <Button
          onClick={handleSelectAll}
          variant={'outline'}
          disabled={checkList.every((checked) => checked)}
        >
          Select All
        </Button>
        <Button
          onClick={handleUnselectAll}
          variant={'destructive'}
          disabled={checkList.every((checked) => !checked)}
        >
          Unselect All
        </Button>
        <Button
          onClick={handleDownload}
          variant={'default'}
        >
          Download
        </Button>
      </div>
      <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2 md:grid-cols-3'}>
        {
          imageUrls.map((imageUrl, index) => {
            const fileName = `KTik_${Date.now()}_${index + 1}.jpg`
            
            return (
              <ImageDetailCard
                key={index}
                imageUrl={imageUrl}
                fileName={fileName}
                checked={checkList[index]}
                onCheckedChange={(checked) => {
                  setCheckList((prev) => {
                    prev[index] = checked
                    return [...prev]
                  })
                }}
                downloader={downloaders[index]}
              />
            )
          })
        }
      </div>
    </Card>
  )
}
export default ImageCard
