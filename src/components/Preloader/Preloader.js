import React from 'react'
import { connect } from 'react-redux'

function Preloader(props) {
  const { preloaders } = props
  const { parent, children } = props

  let parentClass = parent ? `preloader_${parent}` : ''

  let isActive = preloaders[parent]
  let activeClass = isActive ? 'preloader_active' : ''

  return (
    <div className={`preloader ${parentClass} ${activeClass}`}>
      {children ? children : ''}
    </div>
  )
}

const mapStateToProps = (state) => ({
  preloaders: state.preloader.preloaders,
})
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Preloader)
