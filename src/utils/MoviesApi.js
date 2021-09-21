export const MOVIES_API_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const serverStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  export const getMovies = () => {
    return fetch(MOVIES_API_URL, {
      method: "GET",
    }).then(serverStatus);
  };