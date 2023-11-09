import React from 'react'

type HostType = {
  name: string
  picture: string
}

export type LocationType = {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: HostType
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

type CardProps = {
  location: LocationType
}

const Card = ({ location }: CardProps) => {
  return (
    <div className="card">
      <img src={location.cover} alt={location.title} className="card-img" />
      <p>{location.title}</p>
    </div>
  )
}

export default Card
