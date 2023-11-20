import React, { useState } from 'react'
import Previous from '../../assets/previous-arrow.svg'
import Next from '../../assets/next-arrow.svg'

type SliderProps = {
  images: string[]
}

const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="slider">
      <div className="inner-slider">
        <div className="arrow-group">
          <div onClick={goToPrevious}>
            <img src={Previous} alt="go to previous image" className="left-arrow" />
          </div>
          <div onClick={goToNext}>
            <img src={Next} alt="got to next image" className="right-arrow" />
          </div>
        </div>

        <div>
          <img src={`${images[currentIndex]}`} alt="location details" className="slider-img" />
          <div className="pagination">
            {currentIndex + 1}/{images.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
