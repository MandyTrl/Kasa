import React from 'react'
import { Link } from 'react-router-dom'

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
  rating: number
  location: string
  equipments: string[]
  tags: string[]
}

export type CardProps = {
  location: LocationType
}

const Card = ({ location }: CardProps) => {
  return (
    <Link to={`/logement/${location.id}`}>
      <div className="card">
        <img src={location.cover} alt={location.title} className="card-img" />
        <p>{location.title}</p>
      </div>
    </Link>
  )
}

export default Card
