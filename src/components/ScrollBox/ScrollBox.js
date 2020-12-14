import React, { useState, useCallback } from 'react'

import './ScrollBox.css'

import { throttle as rawThrottle } from '../../helpers'

const throttle = rawThrottle()

function ScrollBox({ delay, bottomOffset = 200, parent, children }) {
  const [isBottom, setIsBottom] = useState(false)

  const memoCheckBottomScroll = useCallback((e) => {
    throttle(() => checkBottomScroll(e, setIsBottom, bottomOffset), delay)
  }, [])

  let parentClass = parent ? `scroll-box_${parent}` : ''
  return (
    <div className={`scroll-box ${parentClass}`}>
      {React.Children.map(children, (child) => {
        return {
          ...child,
          props: {
            ...child.props,
            scrollDecarator: {
              onScroll: memoCheckBottomScroll,
              isBottom,
            },
          },
        }
      })}
    </div>
  )
}

function checkBottomScroll(e, setIsBottom, bottomOffset) {
  let { scrollTop, scrollTopMax } = e.target

  if (scrollTop + bottomOffset < scrollTopMax) {
    setIsBottom(false)
    return
  }

  setIsBottom(true)
}

export default ScrollBox
