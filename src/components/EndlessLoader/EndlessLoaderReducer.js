import { EDLESS_LOADER_ACTION_TYPES as actionTypes } from './EndlessLoaderActions'

const initialState = {
  loaders: [],
}

const endlessLoader = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loaders: { ...state.loaders, [action.parent]: true },
      }
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loaders: { ...state.loaders, [action.parent]: false },
      }
    default:
      return state
  }
}

export default endlessLoader
