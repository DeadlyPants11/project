export default function createFilmCardMarkup(resp) {
  return resp
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        vote_average,
      }) => `<div class="film__wrap">
  <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
  <ul>
    <li class="film__item">${title}</li>
    <li class="film__item">${genre_ids} | ${vote_average}</li>
  </ul>
</div>`
    )
    .join('');
}
