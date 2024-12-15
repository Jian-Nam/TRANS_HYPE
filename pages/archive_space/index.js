import { real_space } from "./real_space.js";
import { createHeader } from "/TRANS_HYPE/components/rightPanel/navigator.js";

class App {
  constructor() {
    this.setupWebpage();
    this.real_space = new real_space();
    document.body.prepend(createHeader());
    window.onresize = this.resize.bind(this);
  }

  resize() {
    this.real_space.resize();
  }

  /*==================== Webpage ====================*/

  setupWebpage() {
    this.text = document.querySelectorAll(".text");
    this.real_space_container = document.querySelector("#real_space_container");
  }
}

window.onload = function () {
  new App();
};
