// TODO: подумать над тем как сделать модальное окно

// Проблема заключается в том, что ЭТО модальное окно
// должно быть в единственном экземляре на странице.
// Туда, по факту, просто должны прокидываться данные

import './RetractableWindow.css'

function RetractableWindow({}) {
  return <div className="retractable-window"></div>
}

export default RetractableWindow
