import { loadCSS } from "/TRANS_HYPE/utils/loadCSS.js";

export default function Shortcut(area) {
  loadCSS("/TRANS_HYPE/pages/archive_list/Shortcut.css");
  const shortcut = document.createElement("li");
  const button = document.createElement("button");

  shortcut.appendChild(button);
  shortcut.classList.add("_shortcut");

  button.innerHTML = `
    <div>${area.address_kr}</div>
  `;

  button.addEventListener("click", () => {
    console.log(area);
  });

  return shortcut;
}
