export default function addMenu() {
  const textDiv = document.getElementById("textDiv");
  const title = document.createElement("h1");
  title.id = "title";
  title.textContent = "MENU";
  const element = document.createElement("div");
  element.id = "menu";
  element.textContent =
    "Chicken Marsala " + "Nashville Hot Chicken " + "Soy Sauce Chicken";

  textDiv.appendChild(title);
  textDiv.appendChild(element);
}
