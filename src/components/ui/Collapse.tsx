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
        return (
          <div className={clsx(isOpen ? 'details__collapse-open' : 'details__collapse-closed', 'details__collapse')}>
            <p className="inner__details__collapse">{sectionContent as string}</p>
          </div>
        )

      case CollapseTypeEnum.STUFF:
        return (
          <div className={clsx(isOpen ? 'details__collapse-open' : 'details__collapse-closed', 'details__collapse')}>
            <ul className="inner__details__collapse">
              {(sectionContent as string[]).map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
        )

      case CollapseTypeEnum.ABOUT:
        return (
          <div className={clsx(isOpen ? 'details__collapse-open' : 'details__collapse-closed', 'details__collapse')}>
            <div className="inner__details__collapse">
              {(sectionContent as AboutSectionType[]).map((el: AboutSectionType, index: number) => (
                <div key={index}>
                  {el.name != null && <p className="inner__details__collapse__title">{el.name}</p>}
                  <p className={el.name != null ? 'inner__details__collapse__content' : ''}>{el.content}</p>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="collapse">
      <div className="collapse__name__container">
        <p className="collapse__name">{sectionName}</p>
        <img src={isOpen ? Down : Up} alt="click to scroll down" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {renderSectionContent()}
    </div>
  )
}

export default Collapse
