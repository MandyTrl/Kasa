import React from 'react'
import Arrow from '../../assets/newt-arrow.svg'

type CollapseProps = {
  sectionName: string
  section: string | string[]
}

const Collapse = ({ section, sectionName }: CollapseProps) => {
  return (
    <div className="collapse">
      <div className="collapse-name-container">
        <p className="name-collapse">{sectionName}</p>
        <img src={Arrow} alt="click to scroll down" />
      </div>

      <div className="details-collapse">{section}</div>
    </div>
  )
}

export default Collapse
