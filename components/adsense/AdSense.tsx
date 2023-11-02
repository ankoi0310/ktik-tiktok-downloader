import React, { useEffect } from 'react'

type AdSenseProps = {
  adSlot: string
}

const AdSense = ({ adSlot }: AdSenseProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])
  
  return (
    <>
      <ins
        className='adsbygoogle adbanner-customize'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-4452476152277124'
        data-ad-slot={adSlot}
        data-ad-format='auto'
        data-full-width-responsive='true'
      ></ins>
      {/*<script>*/}
      {/*  (adsbygoogle = window.adsbygoogle || []).push({});*/}
      {/*</script>*/}
    </>
  )
}
export default AdSense
