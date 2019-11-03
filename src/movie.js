import "./movie.css";

const MOVIES_REPO =
  "https://raw.githubusercontent.com/aruljohn/movie-dataset/master";

const Movie = ({ movie }) => {
  const article = document.createElement("article");

  article.innerHTML = `
    <img src="${MOVIES_REPO}/images/${movie.thumb}" />
    <h4>${movie.name}</h2>
    <h6>${movie.date}</h5>
  `;

  return article;
};

export { Movie };
