import { loadCSS } from "/TRANS_HYPE/utils/loadCSS.js";
export default function Description(area) {
  loadCSS("/TRANS_HYPE/pages/archive_list/Description.css");

  let descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("place_info");

  descriptionContainer.innerHTML = `
    <div>${area.address_kr}</div>
    <div>${area.address_eng}</div>
    <div>${area.graffiti_size}</div>
    <div>${area.graffiti_style}</div>
    <div>${area.wall_size}</div>
    <br><br>
    <div class=interview>${area.discription}</div>
  `;
  return descriptionContainer;
}
