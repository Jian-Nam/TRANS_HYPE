export class setupMenu {
  constructor() {
    this.setup_menu();
  }
  setup_menu() {
    this.title = document.createElement("div");
    this.title_img = document.createElement("img");

    this.menu = document.createElement("ul");
    this.toggle = document.createElement("li");
    this.archive_list = document.createElement("li");
    this.place_shop = document.createElement("li");
    this.graffity_shop = document.createElement("li");
    this.project = document.createElement("li");
    this.contact = document.createElement("li");

    this.title.setAttribute("id", "title");
    this.title_img.setAttribute("id", "title_img");

    this.menu.setAttribute("id", "menu");
    this.toggle.setAttribute("id", "toggle");
    this.archive_list.setAttribute("id", "archive_list");
    this.place_shop.setAttribute("id", "place_shop");
    this.graffity_shop.setAttribute("id", "graffity_shop");
    this.project.setAttribute("id", "project");
    this.contact.setAttribute("id", "contact");

    this.title_img.src = "../../assets/icons/title.svg";

    this.toggle.innerHTML = "Archive_space";
    this.archive_list.innerHTML = "Archive_list";
    this.place_shop.innerHTML = "Place_shop";
    this.graffity_shop.innerHTML = "Graffity_shop";
    this.project.innerHTML = "Project";
    this.contact.innerHTML = "Contact";

    this.title.append(this.title_img);
    this.menu.append(
      this.contact,
      this.project,
      this.archive_list,
      this.place_shop,
      this.graffity_shop,
      this.toggle
    );
    let pages = [
      "archive_space",
      "graffity_shop",
      "place_shop",
      "archive_list",
      "project",
      "contact",
    ];
    let page = location.href.split("/").slice(-1)[0].split(".")[0];
    let page_index = Math.abs(pages.indexOf(page) - (pages.length - 1));

    document.body.append(this.title, this.menu);

    this.menu_elements = document.querySelector("#menu").children;

    for (let i = 0; i < this.menu_elements.length; i++) {
      if (i == page_index) {
        this.menu_elements[i].style.color = "#bb00ff";
        this.menu_elements[i].style.background = "#00ffff";
      } else {
        this.menu_elements[i].addEventListener("mouseover", (event) => {
          this.menu_elements[i].style.color = "#bb00ff";
          // this.menu_elements[i].style.width = "8vh";
          // this.menu_elements[i].style.lineHeight = "8vh";
          this.menu_elements[i].style.background = "#00ffff";
        });
        this.menu_elements[i].addEventListener("mouseout", (event) => {
          this.menu_elements[i].style.color = "#ffffff";
          this.menu_elements[i].style.width = "4vh";
          this.menu_elements[i].style.lineHeight = "4vh";
          this.menu_elements[i].style.background = "#bb00ff";
        });
      }
    }

    this.title.addEventListener("click", this.go_home.bind(this));
    this.toggle.addEventListener("click", this.change_mode.bind(this));
    this.place_shop.addEventListener("click", this.go_placeShop.bind(this));
    this.archive_list.addEventListener("click", this.go_archiveList.bind(this));
    this.graffity_shop.addEventListener(
      "click",
      this.go_graffityShop.bind(this)
    );
    this.project.addEventListener("click", this.go_project.bind(this));
    this.contact.addEventListener("click", this.go_contact.bind(this));
  }

  change_mode() {
    location.href = "../archive_space";
  }

  go_archiveList() {
    location.href = "../archive_list";
  }

  go_placeShop() {
    location.href = "../place_shop";
  }

  go_graffityShop() {
    location.href = "../graffity_shop";
  }

  go_contact() {
    location.href = "../contact";
  }

  go_project() {
    location.href = "../about";
  }

  go_home() {
    location.href = "../home";
  }
}
