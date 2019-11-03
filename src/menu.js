import "./menu.css";

const onClick = (content, selector, callback) => {
  const element = content.querySelector(selector);
  element.addEventListener("click", callback);
};

const Menu = ({ openDiscoverList, openMostPopularList }) => {
  const nav = document.createElement("nav");

  nav.innerHTML = `
    <ul>
      <li id="discover">Discover</li>
      <li id="most-popular">Most popular</li>
    </ul>
  `;

  onClick(nav, "#discover", openDiscoverList);
  onClick(nav, "#most-popular", openMostPopularList);

  return nav;
};

export { Menu };
