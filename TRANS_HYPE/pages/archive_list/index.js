import { Place_table } from "../../db/database.js";
import { createHeader } from "/TRANS_HYPE/components/rightPanel/navigator.js";

class App {
  constructor() {
    document.body.prepend(createHeader());
    this.archivePicturesPath = "../../assets/archive_pictures/";
    this.area_list = document.querySelector("#area_list");
    this.area_list_container = document.querySelector("#area_list_container");

    this.listElements = [];

    this.container = document.querySelector(".container");

    this.container.addEventListener("scroll", (e) => {
      this.change_opacity();
    });

    for (let area_id in Place_table) {
      // let wrapper = document.createElement("div");
      // let address_kr = document.createElement("div");
      // let address_eng = document.createElement("div");
      // let graffiti_size = document.createElement("div");
      // let graffiti_style = document.createElement("div");
      // let wall_size = document.createElement("div");
      // let description = document.createElement("div");
      // description.classList.add("description");
      // wrapper.classList.add("text");
      // wrapper.style.position = "absolute";
      // wrapper.append(
      //   address_kr,
      //   address_eng,
      //   graffiti_size,
      //   graffiti_style,
      //   wall_size,
      //   description
      // );
      // wrapper.classList.add("place_info");

      // address_kr.innerHTML = Place_table[area_id].address_kr;
      // address_eng.innerHTML = Place_table[area_id].address_eng;
      // graffiti_size.innerHTML =
      //   "Graffiti Size : " + Place_table[area_id].graffiti_size;
      // graffiti_style.innerHTML =
      //   "Graffiti Style : " + Place_table[area_id].graffiti_style;
      // wall_size.innerHTML =
      //   "Wall Size : " + Place_table[area_id].wall_size + "<br><br>";
      // description.innerHTML = Place_table[area_id].discription;

      let li_elem = document.createElement("li");
      let area_id_elem = document.createElement("div");
      let area_info_elem = document.createElement("div");
      let address_kr_elem = document.createElement("div");
      let address_eng_elem = document.createElement("div");

      li_elem.setAttribute("id", area_id);

      area_id_elem.classList.add("area_id");
      area_info_elem.classList.add("area_info");
      address_kr_elem.classList.add("address_kr");
      address_eng_elem.classList.add("address_eng");

      area_id_elem.innerHTML = area_id;
      address_kr_elem.innerHTML = Place_table[area_id].address_kr;
      address_eng_elem.innerHTML =
        Place_table[area_id].address_eng + " Republic of Korea";

      area_info_elem.append(address_kr_elem, address_eng_elem);
      li_elem.append(area_id_elem, area_info_elem);

      this.area_list.appendChild(li_elem);
      this.listElements.push(li_elem);

      const photoContainer = document.createElement("div");
      const photo1 = document.createElement("img");
      const photo2 = document.createElement("img");

      photoContainer.classList.add("photo_container");
      photoContainer.appendChild(this.createDescription(area_id));
      photo1.classList.add("photo1");
      photo2.classList.add("photo2");

      this.container.appendChild(photoContainer);

      photoContainer.append(photo1, photo2);

      photo1.src =
        this.archivePicturesPath + "w320/" + Place_table[area_id].pic2;

      photo2.src =
        this.archivePicturesPath + "w320/" + Place_table[area_id].pic3;

      // photo3.src =
      //   this.archivePicturesPath + "w320/" + Place_table[current_id].pic1;

      photo1.srcset = `
        ${this.archivePicturesPath + "w320/" + Place_table[area_id].pic2} 320w,
        ${this.archivePicturesPath + "w640/" + Place_table[area_id].pic2} 640w,
        ${
          this.archivePicturesPath + "w1024/" + Place_table[area_id].pic2
        } 1024w,
      `;

      photo2.srcset = `
        ${this.archivePicturesPath + "w320/" + Place_table[area_id].pic3} 320w,
        ${this.archivePicturesPath + "w640/" + Place_table[area_id].pic3} 640w,
        ${
          this.archivePicturesPath + "w1024/" + Place_table[area_id].pic3
        } 1024w,
      `;

      // photo3.srcset = `
      //   ${this.archivePicturesPath + "w320/" + Place_table[current_id].pic1} 320w,
      //   ${this.archivePicturesPath + "w640/" + Place_table[current_id].pic1} 640w,
      //   ${
      //     this.archivePicturesPath + "w1024/" + Place_table[current_id].pic1
      //   } 1024w,
      // `;

      photo1.sizes =
        "(max-width: 500px) 320px, (max-width: 800px) 640px, 1024px";
      photo2.sizes =
        "(max-width: 500px) 320px, (max-width: 800px) 640px, 1024px";
      // photo3.sizes =
      //   "(max-width: 500px) 320px, (max-width: 800px) 640px, 1024px";
    }

    this.show = document.querySelector("#show");
    this.address_kr = document.querySelector("#address_kr");
    this.address_eng = document.querySelector("#address_eng");
    this.graffiti_size = document.querySelector("#graffiti_size");
    this.graffiti_style = document.querySelector("#graffiti_style");
    this.wall_size = document.querySelector("#wall_size");
    this.discription = document.querySelector("#discription");

    this.add_listPageEvent();

    // this.p01 = document.querySelector("#p01");
    // this.p02 = document.querySelector("#p02");
    // this.p03 = document.querySelector("#p03");

    // this.show_palce("P01");

    window.onresize = this.resize.bind(this);
    this.resize();
    this.change_opacity();
  }

  createDescription(areaId) {
    let wrapper = document.createElement("div");

    let address_kr = document.createElement("div");
    let address_eng = document.createElement("div");
    let graffiti_size = document.createElement("div");
    let graffiti_style = document.createElement("div");
    let wall_size = document.createElement("div");
    let description = document.createElement("div");
    description.classList.add("description");
    wrapper.classList.add("text", "place_info");
    wrapper.append(
      address_kr,
      address_eng,
      graffiti_size,
      graffiti_style,
      wall_size,
      description
    );

    address_kr.innerHTML = Place_table[areaId].address_kr;
    address_eng.innerHTML = Place_table[areaId].address_eng;
    graffiti_size.innerHTML =
      "Graffiti Size : " + Place_table[areaId].graffiti_size;
    graffiti_style.innerHTML =
      "Graffiti Style : " + Place_table[areaId].graffiti_style;
    wall_size.innerHTML =
      "Wall Size : " + Place_table[areaId].wall_size + "<br><br>";
    description.innerHTML = Place_table[areaId].discription;
    return wrapper;
  }

  createList(areaId) {
    let li_elem = document.createElement("li");
    let area_id_elem = document.createElement("div");
    let area_info_elem = document.createElement("div");
    let address_kr_elem = document.createElement("div");
    let address_eng_elem = document.createElement("div");

    li_elem.setAttribute("id", areaId);

    area_id_elem.classList.add("area_id");
    area_info_elem.classList.add("area_info");
    address_kr_elem.classList.add("address_kr");
    address_eng_elem.classList.add("address_eng");

    area_id_elem.innerHTML = areaId;
    address_kr_elem.innerHTML = Place_table[areaId].address_kr;
    address_eng_elem.innerHTML =
      Place_table[areaId].address_eng + " Republic of Korea";

    area_info_elem.append(address_kr_elem, address_eng_elem);
    li_elem.append(area_id_elem, area_info_elem);

    this.area_list.appendChild(li_elem);
    this.listElements.push(li_elem);
  }
  change_opacity() {
    const texts = this.container.querySelectorAll(".text, .photo1, .photo2");
    const target = this.container.getBoundingClientRect().height / 3;
    texts.forEach((text) => {
      text.style.opacity =
        String(100 - Math.abs(target - text.getBoundingClientRect().top) / 3) +
        "%";
    });
  }

  add_listPageEvent() {
    for (let value of this.listElements) {
      value.addEventListener("click", (event) => {
        // this.show_palce(event.currentTarget.id);
      });
    }
  }

  // show_palce(current_id) {
  //   // this.show.scroll(0, 0);
  //   this.address_kr.innerHTML = Place_table[current_id].address_kr;
  //   this.address_eng.innerHTML = Place_table[current_id].address_eng;
  //   this.graffiti_size.innerHTML =
  //     "Graffiti Size : " + Place_table[current_id].graffiti_size;
  //   this.graffiti_style.innerHTML =
  //     "Graffiti Style : " + Place_table[current_id].graffiti_style;
  //   this.wall_size.innerHTML =
  //     "Wall Size : " + Place_table[current_id].wall_size + "<br><br>";
  //   this.discription.innerHTML = Place_table[current_id].discription;

  //   // this.p01.src =
  //   //   this.archivePicturesPath + "w320/" + Place_table[current_id].pic2;

  //   // this.p02.src =
  //   //   this.archivePicturesPath + "w320/" + Place_table[current_id].pic3;

  //   // // this.p03.src =
  //   // //   this.archivePicturesPath + "w320/" + Place_table[current_id].pic1;

  //   // this.p01.srcset = `
  //   //   ${this.archivePicturesPath + "w320/" + Place_table[current_id].pic2} 320w,
  //   //   ${this.archivePicturesPath + "w640/" + Place_table[current_id].pic2} 640w,
  //   //   ${
  //   //     this.archivePicturesPath + "w1024/" + Place_table[current_id].pic2
  //   //   } 1024w,
  //   // `;

  //   // this.p02.srcset = `
  //   //   ${this.archivePicturesPath + "w320/" + Place_table[current_id].pic3} 320w,
  //   //   ${this.archivePicturesPath + "w640/" + Place_table[current_id].pic3} 640w,
  //   //   ${
  //   //     this.archivePicturesPath + "w1024/" + Place_table[current_id].pic3
  //   //   } 1024w,
  //   // `;

  //   // // this.p03.srcset = `
  //   // //   ${this.archivePicturesPath + "w320/" + Place_table[current_id].pic1} 320w,
  //   // //   ${this.archivePicturesPath + "w640/" + Place_table[current_id].pic1} 640w,
  //   // //   ${
  //   // //     this.archivePicturesPath + "w1024/" + Place_table[current_id].pic1
  //   // //   } 1024w,
  //   // // `;

  //   // this.p01.sizes =
  //   //   "(max-width: 500px) 320px, (max-width: 800px) 640px, 1024px";
  //   // this.p02.sizes =
  //   //   "(max-width: 500px) 320px, (max-width: 800px) 640px, 1024px";
  //   // // this.p03.sizes =
  //   // //   "(max-width: 500px) 320px, (max-width: 800px) 640px, 1024px";
  // }

  resize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
  }
}

window.onload = function () {
  new App();
};
