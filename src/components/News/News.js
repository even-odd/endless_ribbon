import React, { useRef } from 'react'

import './News.css'

import RetractableWrapper from '../RetractableWindow/RetractableWrapper'
import FullNews from './FullNews/FullNews'
import ShortNews from './ShortNews/ShortNews'

function News({ item, actions }) {
  const { showFullScreenNews, closeFullScreenNews } = actions
  let shortNewsRef = useRef()

  return (
    <>
      {item.fullScreen && (
        <RetractableWrapper>
          <FullNews
            item={item}
            onClick={(e) => {
              closeFullScreenNews(e)
              shortNewsRef.current.scrollIntoView()
            }}
          />
        </RetractableWrapper>
      )}
      <ShortNews
        shortNewsRef={shortNewsRef}
        item={item}
        onClick={showFullScreenNews}
      />
    </>
  )
}

export default News
