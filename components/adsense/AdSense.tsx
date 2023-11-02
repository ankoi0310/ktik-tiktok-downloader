import React, { useEffect } from 'react'

type AdSenseProps = {
  adSlot: string
}

const AdSense = ({ adSlot }: AdSenseProps) => {
  useEffect(() => {
    if (window) {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    }
  }, [])
  
  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-4452476152277124'
      data-ad-slot={adSlot}
      data-ad-format='auto'
      data-full-width-responsive='true'
    />
  )
}
export default AdSense
