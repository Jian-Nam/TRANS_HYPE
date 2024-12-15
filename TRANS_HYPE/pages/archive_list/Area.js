import { loadCSS } from "/TRANS_HYPE/utils/loadCSS.js";
import Picture from "./Picture.js";
import Description from "./Description.js";

export default function Area(area) {
  loadCSS("/TRANS_HYPE/pages/archive_list/Area.css");
  const container = document.createElement("li");
  container.classList.add("area_container");

  const picture1 = Picture(area.pic2);
  const picture2 = Picture(area.pic3);
  const description = Description(area);

  picture1.classList.add("picture1");
  picture2.classList.add("picture2");
  description.classList.add("description");

  container.append(picture1, picture2, description);

  return container;
}
