import React, { useState } from 'react'
import Previous from '../../assets/previous-arrow.svg'
import Next from '../../assets/next-arrow.svg'

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
        <img src={Next} alt="click to scroll down" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {handleDescription ? (
        <div className="details-collapse">{section}</div>
      ) : (
        <div className="details-collapse">
          <ul>
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
