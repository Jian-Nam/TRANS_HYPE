import { loadCSS } from "/TRANS_HYPE/utils/loadCSS.js";

const URL = {
  home: "/TRANS_HYPE/pages/home",
  archive_space: "/TRANS_HYPE/pages/archive_space",
  graffity_shop: "/TRANS_HYPE/pages/graffity_shop",
  place_shop: "/TRANS_HYPE/pages/place_shop",
  archive_list: "/TRANS_HYPE/pages/archive_list",
  about: "/TRANS_HYPE/pages/about",
  contact: "/TRANS_HYPE/pages/contact",
};

export function createHeader() {
  loadCSS("/TRANS_HYPE/components/rightPanel/setupMenu.css");
  const header = document.createElement("header");
  header.innerHTML = `
    	<a id="title" href=${URL.home}>
				<img id="title_img" src="/TRANS_HYPE/assets/icons/title.svg">
			</a>
      <nav>
        <ul id="menu">
					<li>
            <a href=${URL.archive_space}>Archive_space</a>
          </li>
					<li>
            <a href=${URL.graffity_shop}>Graffity_shop</a>
          </li>
					<li>
            <a href=${URL.place_shop}>Place_shop</a>
          </li>
					<li>
            <a href=${URL.archive_list}>Archive_list</a>
          </li>
					<li>
            <a href=${URL.about}>About</a>
          </li>
				  <li>
            <a href=${URL.contact}>Contact</a>
          </li>
        </ul>
      </nav>
    `;
  return header;
}
