import React from 'react'

type BannerProps = {
  imgSrc: string
}

const Banner = ({ imgSrc }: BannerProps) => {
  return <img src={imgSrc} alt="banner" className="banner-img" />
}

export default Banner
