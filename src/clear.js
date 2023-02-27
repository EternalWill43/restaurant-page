export default function clearDiv() {
  let element = document.getElementById("textDiv");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
