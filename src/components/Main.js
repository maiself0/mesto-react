import React from 'react'
import api from '../utils/api.js'
import Card from './Card.js'


function Main(props) {
  const [userName, setUserName] = React.useState('Jaen')
  const [userDescription, setUserDescription] = React.useState('Jaen')
  const [userAvatar, setUserAvatar] = React.useState('../images/profile-avatar.jpg')

  const [cards, setCards] = React.useState([])



  React.useEffect(()=>{
    Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([profileData, cards])=>{
      setUserName(profileData.name)
      setUserDescription(profileData.about)
      setUserAvatar(profileData.avatar)

      setCards(cards)
  })
  .catch(err=>console.log(err))
}, [])
 


  return (
    <main className="main">
      <section className="profile">
        <div className="profile__description">
          <div 
            className="profile__avatar-overlay" 
            onClick={props.onEditAvatar}>
          </div>
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />

          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__heading">{userName}</h1>
              <button 
                type="button" 
                className="profile__button-edit" 
                onClick={props.onEditProfile}></button>
            </div>

            <p className="profile__subheading">{userDescription}</p>
          </div>
        </div>

        <button 
          type="button" 
          className="profile__button-add" 
          onClick = {props.onAddPlace}>

        </button>
      </section>

      <section className="elements">
        {
          cards.map(card => <Card key={card._id} card={card} heading={card.name} likes={card.likes.length} url={card.link} onCardClick={props.onCardClick}/>)                
        }
      </section>
    </main>
  )
}


export default Main;
