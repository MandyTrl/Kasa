import React, { useState } from 'react'
import Down from '../../assets/previous-arrow.svg'
import Up from '../../assets/next-arrow.svg'
import clsx from 'clsx'

type CollapseProps = {
  sectionName: string
  section: string | string[]
}

const Collapse = ({ section, sectionName }: CollapseProps) => {
  const handleDescription = typeof section === 'string'
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="collapse">
      <div className="collapse-name-container">
        <p className="name-collapse">{sectionName}</p>
        <img src={isOpen ? Down : Up} alt="click to scroll down" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {handleDescription ? (
        <div className={clsx(isOpen ? 'details-collapse-open' : 'details-collapse-closed', 'details-collapse')}>
          <p className="inner-details">{section}</p>
        </div>
      ) : (
        <div className={clsx(isOpen ? 'details-collapse-open' : 'details-collapse-closed', 'details-collapse')}>
          <ul className="inner-details">
            {section.map((el) => {
              return <li key={el}>{el}</li>
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Collapse
