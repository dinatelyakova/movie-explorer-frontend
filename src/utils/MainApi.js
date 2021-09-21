class MainApi {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  _serverStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserInfoApi(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(this._serverStatus);
  }

  updateUserInfo(userData, token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
    }).then(this._serverStatus);
  }

  createNewCard(movie, token) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._serverStatus);
  }

  deleteCard(movieId, token) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(this._serverStatus);
  }

  getSavedMovies(token) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this._serverStatus);
  }

  register(data) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this._serverStatus);
  }

  authorize(data) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this._serverStatus);
  }

  checkToken(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }).then(this._serverStatus);
  }
}

const options = {
  baseUrl: "https://api.movies.bystudent.nomoredomains.club",
  headers: {
    "Content-Type": "application/json",
  },
};

const mainApi = new MainApi(options);

export default mainApi;
