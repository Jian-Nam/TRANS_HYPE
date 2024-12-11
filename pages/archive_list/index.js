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
    this.shortcut_list.addEventListener("click", (e) => {
      console.log(e.target);
    });

    let index = 0;
    for (let area_id in Place_table) {
      const area = Place_table[area_id];
      const shortcut = Shortcut(area);
      this.shortcut_list.appendChild(Shortcut(area));
      this.area_list.appendChild(Area(area));
      index++;
    }

    window.onresize = this.resize.bind(this);
    this.resize();
    this.change_opacity();
  }

  change_opacity() {
    console.log("change");
    const texts = this.area_list.querySelectorAll(
      ".place_info, .picture1, .picture2"
    );
    const target = this.area_list.getBoundingClientRect().height / 3;
    texts.forEach((text) => {
      text.style.opacity =
        String(100 - Math.abs(target - text.getBoundingClientRect().top) / 3) +
        "%";
    });
  }

  resize() {}
}

window.onload = function () {
  new App();
};
