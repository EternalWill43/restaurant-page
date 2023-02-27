export default function addSocial() {
  const textDiv = document.getElementById("textDiv");
  const title = document.createElement("h1");
  title.id = "socials";
  title.textContent = "SOCIALS";
  const li = document.createElement("ul");
  const ig = document.createElement("a");
  const igText = document.createTextNode("Instagram");
  ig.appendChild(igText);
  ig.title = "instagram";
  ig.href = "https://www.instagram.com/therealnickchan/";
  li.appendChild(ig);
  const fb = document.createElement("a");
  const fbText = document.createTextNode("Facebook");
  fb.appendChild(fbText);
  fb.title = "Facebook";
  fb.href = "https://www.facebook.com/sirkobebryant";
  li.appendChild(fb);
  const tt = document.createElement("a");
  const tttext = document.createTextNode("Tik tok");
  tt.appendChild(tttext);
  tt.title = "tiktok";
  tt.href = "https://www.tiktok.com/@chantast1c";
  li.appendChild(tt);
  textDiv.appendChild(title);
  textDiv.appendChild(li);
}
