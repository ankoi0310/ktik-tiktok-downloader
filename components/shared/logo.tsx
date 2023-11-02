import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import React from 'react'

type LogoProps = {
  width: number
  height: number
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <Image
      src={logo}
      alt='logo'
      width={width}
      height={height}
    />
  )
}
