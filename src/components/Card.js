function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <article className="element">
      <div className="element__photo" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}/>
      <div className="element__caption">
        <h2 className="element__heading">{props.heading}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like"></button>
          <p className="element__like-count">{props.likes}</p>
        </div>
      </div>
      <button type="button" className="element__delete"></button>
    </article>
  )
}

export default Card;