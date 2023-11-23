import React from 'react'
import { useParams } from 'react-router-dom'
import type { LocationType } from '@/components/Card'
import Tag from '../../components/ui/Tag'
import Slider from '../../components/ui/Slider'
import Rating from '../../components/ui/Rating'
import Collapse, { CollapseTypeEnum } from '../../components/ui/Collapse'
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

      <div className="location__layout">
        <div className="location">
          <div className="location__intro">
            <div className="location__intro__reference">
              <h3>{location.title}</h3>
              <p>{location.location}</p>
            </div>

            <div className="location__host">
              <div className="location__host__name">
                <p>{firstname}</p>
                <p>{lastname}</p>
              </div>
              <img src={location.host.picture} alt="picture of host" />
            </div>
          </div>

          <div className="location__attributes">
            <Tag labels={location.tags} />
            <Rating rating={location.rating} />
          </div>

          <div className="location__details">
            <div className="location__collapse__container">
              <Collapse
                typeOfSection={CollapseTypeEnum.DETAILS}
                sectionContent={location.description}
                sectionName="description"
              />
            </div>
            <div className="location__collapse__container">
              <Collapse
                typeOfSection={CollapseTypeEnum.STUFF}
                sectionContent={location.equipments}
                sectionName="équipement"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logement
