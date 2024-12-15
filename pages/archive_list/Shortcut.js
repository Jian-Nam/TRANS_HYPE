import { loadCSS } from "/TRANS_HYPE/utils/loadCSS.js";

export default function Shortcut(area, index, onClickShorcut) {
  loadCSS("/TRANS_HYPE/pages/archive_list/Shortcut.css");
  const shortcut = document.createElement("li");
  const button = document.createElement("button");
  button.dataset.index = index;

  shortcut.appendChild(button);
  shortcut.classList.add("_shortcut");

  button.innerHTML = `
    ${area.address_kr}
  `;
  button.onclick = onClickShorcut;

  return shortcut;
}
