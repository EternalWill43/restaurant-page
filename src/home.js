export default function home() {
  addName();
  history();
  addHours();
}

function addName() {
  const element = document.createElement("h1");
  element.id = "title";
  element.textContent = "Chan's Chicken";
  textDiv.appendChild(element);
}

function history() {
  const element = document.createElement("div");
  element.id = "history";
  element.innerText =
    "Established in 2005, Chan's Chicken is widely known as the greatest chicken in the entire world.";
  textDiv.appendChild(element);
}

function addHours() {
  const element = document.createElement("div");
  element.id = "hours";
  element.textContent = "HOURS: Mon-Sat 10:00AM - 8:00PM";
  textDiv.appendChild(element);
}
