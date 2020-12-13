import { PRELOADER_ACTION_TYPES as actionTypes } from './PreloaderActions'

const initialState = {
  preloaders: [],
}

const preloader = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_PRELOADER:
      return {
        ...state,
        preloaders: { ...state.preloaders, [action.parent]: true },
      }
    case actionTypes.STOP_PRELOADER:
      return {
        ...state,
        preloaders: { ...state.preloaders, [action.parent]: false },
      }
    default:
      return state
  }
}

export default preloader
