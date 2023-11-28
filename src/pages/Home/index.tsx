import React from 'react'
import HomeBanner from '../../assets/home-banner.webp'
import Card, { type LocationType } from '../../components/Card'
import Banner from '../../components/ui/Banner'
import Locations from '../../shared/locations.json'

export type dataProps = {
  locations: LocationType[]
}

const Home = () => {
  return (
    <main>
      <div className="banner">
        <Banner imgSrc={HomeBanner} />
        <p className="banner__title">
          Chez vous, partout <br></br>et ailleurs
        </p>
      </div>

      <div className="card__layout">
        {Locations.map((location: LocationType) => {
          return <Card key={location.id} location={location} />
        })}
      </div>
    </main>
  )
}

export default Home
