import { combineReducers } from 'redux'

import news from '../components/NewsList/NewsReducer'
import preloader from '../components/Preloader/PreloaderReducer'
import endlessLoader from '../components/EndlessLoader/EndlessLoaderReducer'

export default combineReducers({
  news,
  preloader,
  endlessLoader,
})
