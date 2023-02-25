const content = document.getElementById("content");

function addName() {
  const element = document.createElement("h1");
  element.textContent = "Chan's Chicken";
  return element;
}

function history() {
  const element = document.createElement("div");
  element.innerText =
    "Established in 2005, Chan's Chicken is widely known as the greatest chicken in the entire world.";
  return element;
}

function addHours() {
  const element = document.createElement("div");
  element.textContent = "HOURS: Mon-Sat 10:00AM - 8:00PM";
  return element;
}

content.appendChild(addName());
content.appendChild(history());
content.appendChild(addHours());
