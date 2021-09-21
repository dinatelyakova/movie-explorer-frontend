export const durationForm = (card) => {
  const hour = Math.trunc(card.duration / 60);
  const minute = card.duration % 60;
  return `${hour > 0 ? `${hour}ч ` : ""}${minute}м`;
};

export const getCountMovie = (windowSize) => {
  if (windowSize >= 1280) {
    return { first: 12, extra: 3 };
  }
  if (windowSize > 564 && windowSize <= 950) {
    return { first: 8, extra: 2 };
  }
  return { first: 5, extra: 2 };
};

export const filterShortMovies = (movies) =>
  movies.filter((item) => item.duration < SHORT_M0VIES_DURATION);

export const searchFilter = (data, query) => {
  if (query) {
    const regex = new RegExp(query, "gi");
    return data.filter(
      (item) => regex.test(item.nameRU) || regex.test(item.nameEN)
    );
  }
  return [];
};

export const SHORT_M0VIES_DURATION = 40;

export const getUrlImage = (card) => {
  if (card.image && card.image.url)
    return `https://api.nomoreparties.co${card.image.url}`;
  if (card.image) return card.image;
};
