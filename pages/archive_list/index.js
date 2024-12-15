import { Place_table } from "../../db/database.js";
import { createHeader } from "/TRANS_HYPE/components/rightPanel/navigator.js";
import Area from "./Area.js";
import Shortcut from "./Shortcut.js";

class App {
  constructor() {
    document.body.prepend(createHeader());
    this.area_list = document.querySelector(".area_list");
    this.area_list.addEventListener("scroll", (e) => {
      this.change_opacity();
    });

    this.shortcut_list = document.querySelector(".shortcut_list");

    const onClickShorcut = (e) => {
      this.area_list_items[e.target.dataset.index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };

    this.onClickShorcut = onClickShorcut.bind(this);

    let index = 0;
    for (let area_id in Place_table) {
      const area = Place_table[area_id];
      const shortcut = Shortcut(area, index, this.onClickShorcut);
      this.shortcut_list.appendChild(shortcut);
      this.area_list.appendChild(Area(area));
      index++;
    }

    this.area_list_items = document.querySelectorAll(".area_list li");

    window.onresize = this.resize.bind(this);
    this.resize();
  }

  change_opacity() {
    const texts = this.area_list.querySelectorAll(
      ".place_info, .picture1, .picture2"
    );
    const target = this.area_list.getBoundingClientRect().height / 2;
    texts.forEach((text) => {
      const { top, bottom } = text.getBoundingClientRect();
      text.style.opacity = String(100 - Math.abs(target - top) / 3) + "%";
    });
  }

  resize() {
    this.change_opacity();
  }
}

window.onload = function () {
  new App();
};
