import Script from 'next/script'
import React from 'react'

type AdSenseProps = {
  adSlot: string
}

const AdSense = ({ adSlot }: AdSenseProps) => {
  return (
    <>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-4452476152277124'
        data-ad-slot={adSlot}
        data-ad-format='auto'
        data-full-width-responsive='true'
      ></ins>
      <Script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </>
  )
}
export default AdSense
