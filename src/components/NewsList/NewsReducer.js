import { NEWS_ACTION_TYPES as actionTypes } from './NewsActions'

const initialState = {
  news: [],
}

const news = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_FULL_SCREEN_NEWS:
      return {
        ...state,
        news: state.news.map((item) => {
          if (item.fakeId === action.news.fakeId) {
            return { ...item, fullScreen: true }
          }
          return item
        }),
      }
    case actionTypes.CLOSE_FULL_SCREEN_NEWS:
      return {
        ...state,
        news: state.news.map((item) => {
          if (item.fakeId === action.news.fakeId) {
            return { ...item, fullScreen: false }
          }
          return item
        }),
      }
    case actionTypes.GET_NEWS_API:
      return {
        ...state,
        news: [...state.news, ...action.news],
      }
    default:
      return state
  }
}

export default news
