import React from 'react'

type TagProps = {
  labels: string[] | undefined
}

const Tag = ({ labels }: TagProps) => {
  return (
    <div className="tags__layout">
      {labels?.map((title: string) => {
        return (
          <div className="tag" key={title}>
            {title}
          </div>
        )
      })}
    </div>
  )
}

export default Tag
