import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import './EndlessLoader.css'

function EndlessLoader({
  loaders,
  parent,
  children,
  getNewElements,
  scrollDecarator,
}) {
  let { onScroll, isBottom } = scrollDecarator
  onScroll = onScroll ? onScroll : () => {}

  const isLoading = loaders[parent] || false
  const bottomRef = useRef()

  useEffect(() => {
    if (isLoading || !isBottom) return
    getNewElements()
  }, [isBottom])

  let parentClass = parent ? `endless-loader_${parent}` : ''
  return (
    <div className={`endless-loader ${parentClass}`} onScroll={onScroll}>
      {children || 'Нет новостей'}
      <div className="endless-loader_bottom" ref={bottomRef}></div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loaders: state.endlessLoader.loaders,
})
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(EndlessLoader)
