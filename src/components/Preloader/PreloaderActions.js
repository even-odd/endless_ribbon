export const START_PRELOADER = 'START_PRELOADER'
export const STOP_PRELOADER = 'STOP_PRELOADER'

export const startPreloader = (parent) => (dispatch) => {
  dispatch({ type: START_PRELOADER, parent })
}

export const stopPreloader = (parent) => (dispatch) => {
  dispatch({ type: STOP_PRELOADER, parent })
}

export default {
  startPreloader,
  stopPreloader,
}

export const PRELOADER_ACTION_TYPES = { START_PRELOADER, STOP_PRELOADER }
