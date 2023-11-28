import React from 'react'

type BannerProps = {
  imgSrc: string
  isLocation?: boolean
}

const Banner = ({ imgSrc, isLocation }: BannerProps) => {
  return <img src={imgSrc} alt="banner" className="banner__img" />
}

export default Banner
