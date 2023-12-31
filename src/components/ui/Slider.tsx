import React, { useEffect, useState } from 'react'
import Next from '../../assets/next-arrow.svg'
import Previous from '../../assets/previous-arrow.svg'

type SliderProps = {
  images: string[]
}

const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const moreThanOneImg = images.length > 1

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

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      goToPrevious()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex])

  return (
    <div className="slider">
      <div className="inner__slider">
        {moreThanOneImg && (
          <div className="inner__slider__arrow__group">
            <div onClick={goToPrevious}>
              <img src={Previous} alt="go to previous image" className="left__arrow" />
            </div>
            <div onClick={goToNext}>
              <img src={Next} alt="got to next image" className="right__arrow" />
            </div>
          </div>
        )}

        <div>
          <img src={`${images[currentIndex]}`} alt="location details" className="slider__img" />
          {moreThanOneImg && (
            <div className="slider__pagination">
              {currentIndex + 1}/{images.length}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Slider
