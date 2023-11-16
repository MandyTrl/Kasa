import React from 'react'
import HomeBanner from '../../assets/home-banner.webp'
import Card, { type LocationType } from '../../components/Card'
import Banner from '../../components/Banner'
import Locations from '../../shared/locations.json'

export type dataProps = {
  locations: LocationType[]
}

const Home = () => {
  return (
    <div className="main">
      <div className="banner-container">
        <Banner imgSrc={HomeBanner} />
        <p className="banner-title">
          Chez vous, partout <br></br>et ailleurs
        </p>
      </div>
      <div className="locations">
        {Locations.map((location: LocationType) => {
          return <Card key={location.id} location={location} />
        })}
      </div>
    </div>
  )
}

export default Home
