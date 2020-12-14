import React from 'react'
import { connect } from 'react-redux'

import './Preloader.css'

function Preloader(props) {
  const { preloaders } = props
  const { parent } = props

  let parentClass = parent ? `preloader_${parent}` : ''

  let isActive = preloaders[parent]
  let activeClass = isActive ? 'preloader_active' : ''

  return (
    <div className={`preloader ${parentClass} ${activeClass}`}>
      <div className="preloader__item"></div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  preloaders: state.preloader.preloaders,
})
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Preloader)
