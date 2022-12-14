import { Place_table } from '../../db/database.js';
import {setupMenu} from "./setupMenu.js"

class App{
    constructor(){
        this.title = document.querySelector("#title");
        this.area_list = document.querySelector("#area_list");
        this.area_list_container = document.querySelector("#area_list_container");

        this.setup_menu =  new setupMenu();

        this.area_list_container.addEventListener("mouseover", () => {
            // this.area_list_container.style.right = "4vh"
        })
        this.area_list_container.addEventListener("mouseout", () => {
            // this.area_list_container.style.right = "-32vh"
        })

        this.virtual_map_2d = document.querySelector("#virtual_map_2d");


        this.listElements = [];
        for(let area_id in Place_table){
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
            address_eng_elem.innerHTML = Place_table[area_id].address_eng + " Republic of Korea";


            area_info_elem.append(address_kr_elem, address_eng_elem)
            li_elem.append(area_id_elem, area_info_elem);

            this.area_list.appendChild(li_elem);
            this.listElements.push(li_elem);

        }

        this.show = document.querySelector("#show");
        this.address_kr = document.querySelector("#address_kr")
        this.address_eng = document.querySelector("#address_eng")
        this.graffiti_size = document.querySelector("#graffiti_size")
        this.graffiti_style = document.querySelector("#graffiti_style")
        this.wall_size = document.querySelector("#wall_size")
        this.discription = document.querySelector("#discription")

        this.add_listPageEvent();

        this.container = document.querySelector("#canvus_container");
        
        this.p01 = document.querySelector("#p01")
        this.p02 = document.querySelector("#p02")
        this.p03 = document.querySelector("#p03")


        this.show_palce("P01")

        window.onresize = this.resize.bind(this);
        this.resize();
    }

    add_listPageEvent(){

        for(let value of this.listElements){
            value.addEventListener("mouseover", ()=>{
                value.children[0].style.opacity = 1;
                value.children[1].style.opacity = 1;
                // value.style.paddingTop = "2vh";
                // value.style.paddingBottom = "2vh";
                value.style.background = "#101010";
                // console.log(document.querySelector("#" + value.id + "_2d_map"))
            });
            value.addEventListener("mouseout", ()=>{
                value.children[0].style.opacity = 0.5;
                value.children[1].style.opacity = 0.5;
                // value.style.paddingTop = "1vh";
                // value.style.paddingBottom = "1vh";
                value.style.background = "#000000";
            });
            value.addEventListener("click", (event)=>{this.show_palce(event.currentTarget.id)});
        }
    }

    show_palce(current_id){
        this.show.scroll(0, 0);
        this.address_kr.innerHTML = Place_table[current_id].address_kr;
        this.address_eng.innerHTML = Place_table[current_id].address_eng;
        this.graffiti_size.innerHTML = "Graffiti Size : " + Place_table[current_id].graffiti_size;
        this.graffiti_style.innerHTML = "Graffiti Style : " + Place_table[current_id].graffiti_style;
        this.wall_size.innerHTML = "Wall Size : " + Place_table[current_id].wall_size + "<br><br>";
        this.discription.innerHTML = Place_table[current_id].discription;

        this.p01.src = "./study/src/photoes/" + Place_table[current_id].pic2;
        this.p02.src = "./study/src/photoes/" + Place_table[current_id].pic3;
        this.p03.src = "./study/src/photoes/" + Place_table[current_id].pic1;
    }




    resize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;


    }

}

window.onload = function() {
    new App();
}

