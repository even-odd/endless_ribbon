export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

export const startLoading = (parent) => (dispatch) => {
  dispatch({ type: START_LOADING, parent })
}

export const stopLoading = (parent) => (dispatch) => {
  dispatch({ type: STOP_LOADING, parent })
}

const EDLESS_LOADER_ACTIONS = {
  startLoading,
  stopLoading,
}
export default EDLESS_LOADER_ACTIONS

export const EDLESS_LOADER_ACTION_TYPES = { START_LOADING, STOP_LOADING }
