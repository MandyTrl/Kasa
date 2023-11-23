import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import ActiveStar from '../../assets/star-active.svg'
import InactiveStar from '../../assets/star-inactive.svg'

type RatingProps = {
  rating: number
}

const Rating = ({ rating }: RatingProps) => {
  const numberOfInactiveStars = 5 - rating

  const activeStars = Array.from({ length: rating }, () => (
    <img src={ActiveStar} alt="" aria-hidden="true" key={uuidv4()} />
  ))

  const inactiveStars = Array.from({ length: numberOfInactiveStars }, () => (
    <img src={InactiveStar} alt="" aria-hidden="true" key={uuidv4()} />
  ))

  return (
    <div className="rating">
      {activeStars}
      {inactiveStars}
    </div>
  )
}

export default Rating
