function infoLanding() {
  const params = new URLSearchParams(window.location.search);
  let nameElements = document.getElementsByClassName("name");

  for (const param of params) {
    for (let index = 0; index < nameElements.length; index++) {
      nameElements[index].innerHTML = nameElements[index].innerHTML.replace(
        "name",
        param[1]
      );
    }
  }
}

function itemClick(url) {
  location.href = url;
}
