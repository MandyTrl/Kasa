import React from 'react'

type BannerProps = {
  imgSrc: string
}

const Banner = ({ imgSrc }: BannerProps) => {
  return <img src={imgSrc} alt="banner" className="banner__img" />
}

export default Banner
