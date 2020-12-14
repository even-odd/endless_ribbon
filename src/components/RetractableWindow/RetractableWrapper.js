import ReactDOM from 'react-dom'

function RetractableWrapper({ children }) {
  // Было бы лучше сделать через Ref,
  // но не знаю как передавать его сюда
  const retractableWindowEl = document.getElementsByClassName(
    'retractable-window'
  )

  return retractableWindowEl && retractableWindowEl[0] ? (
    ReactDOM.createPortal(children, retractableWindowEl[0])
  ) : (
    <>{children}</>
  )
}

export default RetractableWrapper
