import React from 'react'
import Locations from '../../shared/locations.json'
import BeachLandscape from '../../assets/beach-landscape.png'
import Card, { type LocationType } from '../../components/Card'
import Banner from '../../components/Banner'

const Home = () => {
  return (
    <div className="main">
      <Banner imgSrc={BeachLandscape} />
      <div className="locations">
        {Locations.map((location: LocationType) => {
          return <Card key={location.id} location={location} />
        })}
      </div>
    </div>
  )
}

export default Home
