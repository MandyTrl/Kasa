import React, { useState } from 'react'
import HomeBanner from '../../assets/pink-home.webp'
import Card, { type LocationType } from '../../components/Card'
import Banner from '../../components/Banner'
import Locations from '../../shared/locations.json'

export type dataProps = {
  locations: LocationType[]
}

const Home = () => {
  return (
    <div className="main">
      <>
        <Banner imgSrc={HomeBanner} />
        <div className="locations">
          {Locations.map((location: LocationType) => {
            return <Card key={location.id} location={location} />
          })}
        </div>
      </>
    </div>
  )
}

export default Home
