import addMenu from "./menu.js";
import clearDiv from "./clear.js";
import addSocial from "./social.js";
import home from "./home.js";

const content = document.getElementById("content");

const homebtn = document.createElement("button");
homebtn.innerText = "Home";
homebtn.addEventListener("click", () => {
  clearDiv();
  home();
});
content.appendChild(homebtn);

const menubtn = document.createElement("button");
menubtn.innerText = "Menu";
menubtn.addEventListener("click", () => {
  clearDiv();
  addMenu();
});
content.appendChild(menubtn);

const socialbtn = document.createElement("button");
socialbtn.innerText = "Socials";
socialbtn.addEventListener("click", () => {
  clearDiv();
  addSocial();
});
content.appendChild(socialbtn);
const textDiv = document.createElement("div");
textDiv.id = "textDiv";
content.appendChild(textDiv);
home();
