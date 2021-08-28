import { shuffle } from "../utils/utils.js";
import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { startpage } from "./start.js";
import { buttonSound } from "../utils/sound.js";

export const homepage = () => {
  let i = 0;
  let score = 0;
  let page = document.getElementById("HomePage");

  let div = document.createElement("div");
  let logo_pic = document.createElement("img");
  logo_pic.src = "./img/logo.png";
  logo_pic.width = 200;
  div.appendChild(logo_pic);
  page.appendChild(div);

  let modes = document.createElement("div");
  modes.id = "modes";
  page.appendChild(modes);

  div = document.createElement("div");
  let typhoon = document.createElement("button");
  typhoon.textContent = "台風";
  typhoon.onclick = async function () {
    //const { data } = await fetchJSON("/api/events?subject=typhoon");
    const { data } = await fetchJSON("./_data/typhoon.json");
    shuffle(data);
    let f = document.getElementById("HomePage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    buttonSound();
    startpage(this.textContent, data);
  };
  div.appendChild(typhoon);
  modes.appendChild(div);
  div = document.createElement("div");
  let fire = document.createElement("button");
  fire.textContent = "火災";
  fire.onclick = async function () {
    //const { data } = await fetchJSON("/api/events?subject=fire");
    const { data } = await fetchJSON("./_data/fire.json");
    shuffle(data);
    let f = document.getElementById("HomePage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    buttonSound();
    startpage(this.textContent, data);
  };
  div.appendChild(fire);
  modes.appendChild(div);
};
