import { useState, useEffect, useContext } from "react";
import { CardContext } from "../contexts/CardContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Card from "./Card.js";
import api from "./../utils/api";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  //поставить лайк карточке
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  //удалениe карточки
  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__description">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            onClick={props.onEditAvatar}
          />

          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__heading">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__button-edit"
                onClick={props.onEditProfile}
              ></button>
            </div>

            <p className="profile__subheading">{currentUser.about}</p>
          </div>
        </div>

        <button
          type="button"
          className="profile__button-add"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <CardContext.Provider value={card} key={card._id}>
            <Card
              key={card._id}
              card={card}
              heading={card.name}
              likes={card.likes.length}
              url={card.link}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          </CardContext.Provider>
        ))}
      </section>
    </main>
  );
}

export default Main;
