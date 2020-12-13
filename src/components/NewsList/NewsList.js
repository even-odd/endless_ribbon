import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ScrollBox from '../ScrollBox/ScrollBox'
import EndlessLoader from '../EndlessLoader/EndlessLoader'
import News from '../News/News'
import Preloader from '../Preloader/Preloader'

import './NewsList.css'
import actions from './NewsActions'

const PARENT = 'NewsList'

function NewsList(props) {
  const { news } = props

  return (
    <div className="news-list">
      <h1>Новостная лента</h1>

      <ScrollBox delay={300} bottomOffset={300}>
        <EndlessLoader
          parent={PARENT}
          getNewElements={() => props.getNews_API(PARENT)}
        >
          {news.map((item) => (
            <News
              key={item.fakeId}
              item={item}
              onClick={() => props.showFullScreenNews(item)}
            />
          ))}
          <Preloader parent={PARENT} />
        </EndlessLoader>
      </ScrollBox>
    </div>
  )
}

const mapStateToProps = (state) => ({
  news: state.news.news,
})
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
