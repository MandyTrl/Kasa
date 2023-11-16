import React from 'react'
import ActiveStar from '../../assets/star-active.svg'
import InactiveStar from '../../assets/star-inactive.svg'

type RatingProps = {
  rating: number
}

const Rating = ({ rating }: RatingProps) => {
  const numberOfInactiveStars = 5 - rating

  const activeStars = Array.from({ length: rating }, (index: number) => (
    <img src={ActiveStar} alt="" aria-hidden="true" key={index} />
  ))

  const inactiveStars = Array.from({ length: numberOfInactiveStars }, (index: number) => (
    <img src={InactiveStar} alt="" aria-hidden="true" key={index} />
  ))

  return (
    <div className="rating">
      {activeStars}
      {inactiveStars}
    </div>
  )
}

export default Rating
