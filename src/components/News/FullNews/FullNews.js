import './FullNews.css'

function FullNews({ item, onClick }) {
  return (
    <div className="news-item news-item_full">
      <div className="news-item__header">
        <button className="news-item__btn-close" onClick={onClick}>
          ☚
        </button>
      </div>

      <div>
        <div className="news-item__title">{item.title}</div>
        <div className="news-item__img-box">
          <img alt="Обложка новости" src={item.urlToImage} />
        </div>
        <div className="news-item__content">{item.content}</div>
      </div>
    </div>
  )
}

export default FullNews
