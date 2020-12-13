import { NEWS_ACTION_TYPES as actionTypes } from './NewsActions'

const initialState = {
  news: [],
}

const news = (state = initialState, action) => {
  switch (action.type) {
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
