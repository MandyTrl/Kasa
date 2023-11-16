import React from 'react'

type BannerProps = {
  imgSrc: string
  isLocation?: boolean
}

const Banner = ({ imgSrc, isLocation }: BannerProps) => {
  const handleImgSizeByCSSClass = isLocation === true ? 'banner-location-img' : 'banner-img'

  return <img src={imgSrc} alt="banner" className={handleImgSizeByCSSClass} />
}

export default Banner
