const onError = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject("ОшибкаFehler");
};

class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  //профиль
  getProfile(link) {
    return fetch(`${this._url}${link}`, {
      headers: this._headers
    }).then(onError);
  }

  //карточки
  getInitialCards(link) {
    return fetch(`${this._url}${link}`, {
      headers: this._headers
    }).then(onError);
  }

  //добавить данные профиля на сервер
  addProfile(data, link) {
    return fetch(`${this._url}${link}`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(onError);
  }
  //добавление новой карточки
  addCard(data, link) {
    return fetch(`${this._url}${link}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(onError);
  }

  removeCard(id) {
    return fetch(`${this._url}cohort-20/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(onError);
  }

  addLike(id) {
    return fetch(`${this._url}cohort-20/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then(onError);
  }

  removeLike(id) {
    return fetch(`${this._url}cohort-20/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(onError);
  }

  addAvatar(data, link) {
    return fetch(`${this._url}${link}`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(onError);
  }
}

const api = new Api({
  url:"https://mesto.nomoreparties.co/v1/",
  headers: {
    "content-type": "application/json",
    authorization: '35f0ed57-1593-40bb-bc35-702beba473b9'
  }
}) 

export default api;