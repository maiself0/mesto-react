import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import React from 'react';
import ImagePopup from './ImagePopup';


function App() {

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false)

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />

      <Main onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} onCardClick={handleCardClick}/>

      <Footer />


        <PopupWithForm name="edit" title="Редактировать профиль" buttonLabel="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input
                type="text"
                name="heading"
                className="popup__input popup__input_text_heading"
                required
                minLength="2"
                maxLength="40"
                id="profile-name"
              />
              <span className="profile-name-error error"></span>
              <input
                type="text"
                name="subheading"
                className="popup__input popup__input_text_subheading"
                required
                minLength="2"
                maxLength="200"
                id="profile-desc"
              />
              <span className="profile-desc-error error"></span>
        </PopupWithForm>


        <PopupWithForm name="add" title="Новое место" buttonLabel="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input
              type="text"
              placeholder="Название"
              name="place"
              className="popup__input popup__input_text_heading"
              id="place-name"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="place-name-error error"></span>
            <input
              type="url"
              placeholder="Ссылка на картинку"
              name="src"
              className="popup__input popup__input_text_src"
              id="place-url"
              required
            />
            <span className="place-url-error error"></span>
        </PopupWithForm>


        <PopupWithForm name="avatar" title="Обновить аватар" buttonLabel="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input
              type="url"
              
              name="src"
              className="popup__input popup__input_text_src"
              id="avatar-url"
              required
            />
            <span className="avatar-url-error error"></span>
        </PopupWithForm>


        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

  </div>
  );
}

export default App;
