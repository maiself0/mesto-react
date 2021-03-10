function ImagePopup(props) {
  return (
    <div className={`popup popup_type_view-image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_image">
        <button
          type="button"
          className="popup__button-close popup__button-close_image"
          onClick={props.onClose}
        ></button>
        <img className="popup__image" src={props.card.link} alt="фото места" />
        <p className="popup__caption"></p>
      </div>
    </div>
  );
}

export default ImagePopup;