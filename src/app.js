import { FeatureFlag } from "./services/feature-flag";

import { Menu } from "./menu";
import { List } from "./list";

import "./app.css";

const effect = (callback, render) => () => {
  callback();
  render();
};

const MOVIES_REPO =
  "https://raw.githubusercontent.com/aruljohn/movie-dataset/master";

const getMovies = () => {
  return fetch(`${MOVIES_REPO}/movies.json`).then(response => response.json());
};

const byName = (a, b) => (a.name > b.name ? 1 : -1);
const byDate = (a, b) => (a.date > b.date ? 1 : -1);

const App = async () => {
  const app = document.querySelector("#app");
  const movies = await getMovies();
  let items = [...movies];

  const openDiscoverList = effect(() => {
    items = [...movies];
  }, render);

  const openMostPopularList = effect(() => {
    /* ****** FEATURE FLAG ******* */
    if (FeatureFlag.isEnabled("9gMN9kW4Q0-3I6Aq8Y2Y7g")) {
      items = [...movies.slice(5, 10)].sort(byDate);
      return;
    }

    items = [...movies.slice(5, 10)].sort(byName);
  }, render);

  function render() {
    const menu = Menu({ openDiscoverList, openMostPopularList });
    const list = List({ items });

    app.innerHTML = "";

    app.appendChild(menu);
    app.appendChild(list);
  }

  render();
};

export { App };
