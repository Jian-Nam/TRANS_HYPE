import { createHeader } from "/TRANS_HYPE/components/rightPanel/navigator.js";

class App {
  constructor() {
    document.body.prepend(createHeader());
  }
}
window.onload = function () {
  new App();
};
