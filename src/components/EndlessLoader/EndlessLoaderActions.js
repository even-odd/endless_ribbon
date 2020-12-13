export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

export const startLoading = (parent) => (dispatch) => {
  dispatch({ type: START_LOADING, parent })
}

export const stopLoading = (parent) => (dispatch) => {
  dispatch({ type: STOP_LOADING, parent })
}

export default {
  startLoading,
  stopLoading,
}

export const EDLESS_LOADER_ACTION_TYPES = { START_LOADING, STOP_LOADING }
