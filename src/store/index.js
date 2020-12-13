import { createStore, applyMiddleware } from 'redux'
import ReactThunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'

// export default createStore(
//   rootReducer,
//   applyMiddleware(ReactThunk)
// )

const createStoreWithThunk = applyMiddleware(ReactThunk)(
  applyMiddleware(logger)(createStore)
)

export default createStoreWithThunk(rootReducer)
