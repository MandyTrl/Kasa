import React from 'react'
import Banner from '../../components/Banner'
import BeachLandscape from '../../assets/beach-landscape.png'

const Home = () => {
  return (
    <div className="main">
      <Banner imgSrc={BeachLandscape} />
      <div className="locations">Hello World</div>
    </div>
  )
}

export default Home
