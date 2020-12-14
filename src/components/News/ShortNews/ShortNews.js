import './ShortNews.css'

function ShortNews({ item, onClick, shortNewsRef }) {
  return (
    <div className="news-item" ref={shortNewsRef} onClick={onClick}>
      <div className="news-item__title">{item.title}</div>
      <div className="news-item__img-box">
        <img
          className="news-item__img"
          alt="Обложка новости"
          src={item.urlToImage}
        />
      </div>
      <div className="news-item__description">{item.description}</div>
    </div>
  )
}

export default ShortNews
