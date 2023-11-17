import React, { useState } from 'react'
import HomeBanner from '../../assets/home-banner.webp'

type SliderProps = {
  images: string[]
}

const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="slider">
      <div className="arrow-group">
        <div onClick={goToPrevious} className="left-arrow">
          ❰
        </div>
        <div onClick={goToNext} className="right-arrow">
          ❱
        </div>
      </div>
      <div className="inner-slider">
        <img src={HomeBanner} alt="Slider" />
      </div>
    </div>
  )
}

export default Slider
