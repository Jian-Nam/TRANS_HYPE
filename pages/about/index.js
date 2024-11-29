import { setupMenu } from "../../components/rightPanel/setupMenu.js";

class App {
  constructor() {
    this.setup_menu = new setupMenu();
  }
}
window.onload = function () {
  new App();
};
