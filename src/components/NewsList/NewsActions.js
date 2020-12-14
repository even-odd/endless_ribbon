import { resCheckStatus, resToJSON } from '../../helpers/fetchHelpers'

import preloaderActions from '../Preloader/PreloaderActions'
import endlessLoaderActions from '../EndlessLoader/EndlessLoaderActions'

export const GET_NEWS_API = 'GET_NEWS_API'
export const SHOW_FULL_SCREEN_NEWS = 'SHOW_FULL_SCREEN_NEWS'
export const CLOSE_FULL_SCREEN_NEWS = 'CLOSE_FULL_SCREEN_NEWS'

export const getNews_API = (parent) => (dispatch, getStore) => {
  preloaderActions.startPreloader(parent)(dispatch)
  endlessLoaderActions.startLoading(parent)(dispatch)

  fetch(
    `http://newsapi.org/v2/everything?q=bitcoin&apiKey=a12f365ded9f470b9ec5d544b71cc476`
  )
    .then(resCheckStatus)
    .then(resToJSON)
    .then((data) => {
      let { articles } = data

      let amountNews = getStore().news.news.length
      let news = articles.map((article) => {
        return {
          fakeId: amountNews++, // Так как у них нет id
          title: article.title,
          description: article.description,
          urlToImage: article.urlToImage,
          content: article.content,
          fullScreen: false,
        }
      })

      dispatch({ type: GET_NEWS_API, news })
    })
    .catch((err) => {
      alert('Произошла ошибка')
      console.error('Ошибка загрузки новостей: ', err)
    })
    .finally(() => {
      endlessLoaderActions.stopLoading(parent)(dispatch)
      preloaderActions.stopPreloader(parent)(dispatch)
    })
}

export const showFullScreenNews = (news) => (dispatch) => {
  dispatch({ type: SHOW_FULL_SCREEN_NEWS, news })
}

export const closeFullScreenNews = (news) => (dispatch) => {
  dispatch({ type: CLOSE_FULL_SCREEN_NEWS, news })
}

const NEWS_ACTIONS = {
  getNews_API,
  showFullScreenNews,
  closeFullScreenNews,
}
export default NEWS_ACTIONS

export const NEWS_ACTION_TYPES = {
  GET_NEWS_API,
  SHOW_FULL_SCREEN_NEWS,
  CLOSE_FULL_SCREEN_NEWS,
}
