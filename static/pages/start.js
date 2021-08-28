import { questpage } from "./question.js";
import { ButtonClick } from "../utils/canvas.js";
import { homepage } from "./home.js";
import { buttonSound } from "../utils/sound.js";

export const startpage = (category, data) => {
  let i = 0;
  let score = 0;
  let page = document.getElementById("StartPage");

  let title_ele = document.createElement("h1");
  title_ele.textContent = category;
  title_ele.id = "explain";
  page.appendChild(title_ele);

  let div = document.createElement("div");
  let category_pic = document.createElement("img");
  category_pic.src = `${choicePicture(category)}`;
  category_pic.width = 300;
  div.appendChild(category_pic);
  page.appendChild(div);

  let centence = document.createElement("h2");
  centence.textContent = category + "に関するクイズです";
  page.appendChild(centence);

  let choices = document.createElement("div");
  choices.id = "choices";
  page.appendChild(choices);

  div = document.createElement("div");
  let start_btn_ele = document.createElement("button");
  start_btn_ele.textContent = "START";
  start_btn_ele.onclick = () => {
    let f = document.getElementById("StartPage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    const ctx = canvas.getContext("2d");
    ButtonClick(ctx, 0);
    document.getElementById("canvas").style.display = "block";
    buttonSound();
    questpage(data, i, score);
  };
  div.appendChild(start_btn_ele);
  choices.appendChild(div);

  div = document.createElement("div");
  let back_btn_ele = document.createElement("button");
  back_btn_ele.textContent = "もどる";
  back_btn_ele.onclick = () => {
    let f = document.getElementById("StartPage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    buttonSound();
    homepage();
  };
  div.appendChild(back_btn_ele);
  choices.appendChild(div);
};

const choicePicture = (category) => {
  switch (category) {
    case "台風":
      return "./img/150909085567_TP_V.jpg"; // "https://www.pakutaso.com/shared/img/thumb/150909085567_TP_V.jpg";
    case "火災":
      return "./img/publicdomainq-0020093aec.jpg"; // "https://publicdomainq.net/images/201803/19s/publicdomainq-0020093aec.jpg";
  }
};
