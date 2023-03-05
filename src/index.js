import addMenu from "./menu.js";
import clearDiv from "./clear.js";
import addSocial from "./social.js";
import home from "./home.js";

const content = document.getElementById("content");
const buttonbar = document.createElement("div");
buttonbar.id = "buttonbar";

const homebtn = document.createElement("button");
homebtn.innerText = "Home";
homebtn.addEventListener("click", () => {
  clearDiv();
  home();
});
buttonbar.appendChild(homebtn);

const menubtn = document.createElement("button");
menubtn.innerText = "Menu";
menubtn.addEventListener("click", () => {
  clearDiv();
  addMenu();
});
buttonbar.appendChild(menubtn);

const socialbtn = document.createElement("button");
socialbtn.innerText = "Socials";
socialbtn.addEventListener("click", () => {
  clearDiv();
  addSocial();
});
buttonbar.appendChild(socialbtn);
const textDiv = document.createElement("div");
textDiv.id = "textDiv";
content.appendChild(buttonbar);
content.appendChild(textDiv);
home();
