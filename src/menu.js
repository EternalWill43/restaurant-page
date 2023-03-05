export default function addMenu() {
  const textDiv = document.getElementById("textDiv");
  const title = document.createElement("h1");
  title.id = "title";
  title.textContent = "MENU";
  const element = document.createElement("div");
  element.id = "menu";

  const menulist = document.createElement("ul");
  menulist.id = "menulist";

  const marsala = document.createElement("div");
  const mpic = document.createElement("img");
  mpic.src = "images/chicken-marsala.jpg";
  marsala.appendChild(mpic);
  marsala.id = "marsala";
  const mdesc = document.createElement("div");
  mdesc.innerText =
    "Chicken Marsala is an Italian-American dish of golden pan-fried chicken cutlets and mushrooms in a rich Marsala wine sauce.";
  marsala.appendChild(mdesc);

  const nashville = document.createElement("div");
  const npic = document.createElement("img");
  npic.src = "images/nashville-hot.jpg";
  nashville.appendChild(npic);
  nashville.id = "nashville";
  const ndesc = document.createElement("div");
  ndesc.innerText =
    "Mouthwateringly, ultra-crispy, fiery fried chicken with a cayenne-infused glaze";
  nashville.appendChild(ndesc);

  const soysauce = document.createElement("div");
  const spic = document.createElement("img");
  spic.src = "images/Soy-Sauce-Chicken.jpg";
  soysauce.appendChild(spic);
  soysauce.id = "soy-sauce";
  const sdesc = document.createElement("div");
  sdesc.innerText =
    "Soy sauce chicken or “see yao gai” is a classic jom liu traditionally made by braising a whole chicken in a braising liquid that includes soy sauce (obviously) and other aromatics. The result is a beautiful whole chicken with glistening, dark brown skin.";
  soysauce.appendChild(sdesc);

  menulist.appendChild(marsala);
  menulist.appendChild(nashville);
  menulist.appendChild(soysauce);
  element.appendChild(menulist);
  textDiv.appendChild(title);
  textDiv.appendChild(element);
}
