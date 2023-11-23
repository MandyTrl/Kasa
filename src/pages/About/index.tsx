import React from 'react'
import AboutBanner from '../../assets/about-banner.webp'
import Banner from '../../components/ui/Banner'
import Collapse, { CollapseTypeEnum } from '../../components/ui/Collapse'
import AboutDatas from '../../shared/about.json'

const About = () => {
  return (
    <div className="main">
      <Banner imgSrc={AboutBanner} />

      {AboutDatas.map((el) => (
        <div className="about" key={el.title}>
          <Collapse sectionContent={el.sections} typeOfSection={CollapseTypeEnum.ABOUT} sectionName={el.title} />
        </div>
      ))}
    </div>
  )
}

export default About
