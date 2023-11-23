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
      <div className="collapse__name__container">
        <p className="collapse__name">{sectionName}</p>
        <img src={isOpen ? Down : Up} alt="click to scroll down" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {handleDescription ? (
        <div className={clsx(isOpen ? 'details__collapse-open' : 'details__collapse-closed', 'details__collapse')}>
          <p className="inner__details__collapse">{section}</p>
        </div>
      ) : (
        <div className={clsx(isOpen ? 'details__collapse-open' : 'details__collapse-closed', 'details__collapse')}>
          <ul className="inner__details__collapse">
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
