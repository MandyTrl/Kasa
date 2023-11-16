import React from 'react'
import { useParams } from 'react-router-dom'
import type { LocationType } from '@/components/Card'
import Banner from '../../components/Banner'
import Tag from '../../components/ui/Tag'
import Rating from '../../components/ui/Rating'
import Locations from '../../shared/locations.json'

const Logement = () => {
  const { id } = useParams()
  const location: LocationType | undefined = Locations.find((el: LocationType) => el.id === id)
  const host = location != null ? location.host.name.split(' ') : ''
  const firstname = host[0]
  const lastname = host[1]

  return location === null ? (
    <></>
  ) : (
    <div className="main">
      {location != null && <Banner imgSrc={location?.pictures[0]} isLocation />}

      <div className="main-logement">
        <div className="location">
          <div className="intro">
            <div className="location-reference">
              <h3>{location?.title}</h3>
              <p>{location?.location}</p>
            </div>

            <div className="host">
              <div className="host-name">
                <p>{firstname}</p>
                <p>{lastname}</p>
              </div>
              <img src={location?.host.picture} alt="picture of host" />
            </div>
          </div>

          <div className="type">
            <Tag labels={location?.tags} />
            {/* <Rating rating={location?.rating} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logement
