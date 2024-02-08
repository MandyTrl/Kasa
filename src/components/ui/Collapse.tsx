import React, { useState } from 'react'
import clsx from 'clsx'
import Up from '../../assets/next-arrow.svg'
import Down from '../../assets/previous-arrow.svg'

type AboutSectionType = {
  name?: string
  content: string
}

export enum CollapseTypeEnum {
  ABOUT = 'ABOUT',
  STUFF = 'STUFF',
  DETAILS = 'DETAILS'
}

type CollapseProps = {
  sectionName: string
  typeOfSection: CollapseTypeEnum
  sectionContent: string | string[] | AboutSectionType[]
}

const Collapse = ({ sectionName, sectionContent, typeOfSection }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const renderSectionContent = () => {
    switch (typeOfSection) {
      case CollapseTypeEnum.DETAILS:
        return <p className="inner__details__collapse">{sectionContent as string}</p>

      case CollapseTypeEnum.STUFF:
        return (
          <ul className="inner__details__collapse">
            {(sectionContent as string[]).map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        )

      case CollapseTypeEnum.ABOUT:
        return (
          <div className="inner__details__collapse">
            {(sectionContent as AboutSectionType[]).map((el: AboutSectionType, index: number) => (
              <div key={index}>
                {el.name != null && <p className="inner__details__collapse__title">{el.name}</p>}
                <p className={el.name != null ? 'inner__details__collapse__content' : ''}>{el.content}</p>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="collapse" onClick={() => setIsOpen(!isOpen)}>
      <div className="collapse__name__container">
        <p className="collapse__name">{sectionName}</p>
        <img src={isOpen ? Down : Up} alt="click to scroll down" />
      </div>

      <div className={clsx(isOpen ? 'details__collapse-open' : 'details__collapse-closed', 'details__collapse')}>
        {renderSectionContent()}
      </div>
    </div>
  )
}

export default Collapse
