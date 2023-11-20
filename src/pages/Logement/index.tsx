import React from 'react'
import { useParams } from 'react-router-dom'
import type { LocationType } from '@/components/Card'
import Tag from '../../components/ui/Tag'
import Slider from '../../components/ui/Slider'
import Rating from '../../components/ui/Rating'
import Collapse from '../../components/ui/Collapse'
import Locations from '../../shared/locations.json'

const Logement = () => {
  const { id } = useParams()
  const location: LocationType | undefined = Locations.find((el: LocationType) => el.id === id)
  const host = location != null ? location.host.name.split(' ') : ''
  const firstname = host[0]
  const lastname = host[1]

  return location === undefined ? (
    <></>
  ) : (
    <div className="main">
      <Slider images={location.pictures} />

      <div className="main-logement">
        <div className="location">
          <div className="intro">
            <div className="location-reference">
              <h3>{location.title}</h3>
              <p>{location.location}</p>
            </div>

            <div className="host">
              <div className="host-name">
                <p>{firstname}</p>
                <p>{lastname}</p>
              </div>
              <img src={location.host.picture} alt="picture of host" />
            </div>
          </div>

          <div className="type">
            <Tag labels={location.tags} />
            <Rating rating={location.rating} />
          </div>

          <div className="details">
            <Collapse section={location.description} sectionName="description" />
            <Collapse section={location.equipments} sectionName="équipement" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logement
