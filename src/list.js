import { Movie } from "./movie";

import "./list.css";

const List = ({ items }) => {
  const section = document.createElement("section");

  items.map(movie => {
    return section.appendChild(Movie({ movie }));
  });

  return section;
};

export { List };
