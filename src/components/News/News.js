import React from 'react'

function News({ item, onClick }) {
  return (
    <div className="news-item" onClick={onClick}>
      <div className="news-item__title">{item.title}</div>
      <div className="news-item__img-box">
        <img alt="Обложка новости" src={item.urlToImage} />
      </div>
    </div>
  )
}

export default News
