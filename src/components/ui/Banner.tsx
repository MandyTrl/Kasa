import React from 'react'

type BannerProps = {
  imgSrc: string
  isLocation?: boolean
}

const Banner = ({ imgSrc, isLocation }: BannerProps) => {
  const handleImgSizeByCSSClass = isLocation === true ? 'banner__location__img' : 'banner__img'

  return <img src={imgSrc} alt="banner" className={handleImgSizeByCSSClass} />
}

export default Banner
