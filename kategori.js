let endpoint = `https://kea-alt-del.dk/t7/api/subcategories?limit=40`;

function hentData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(visData);
}

const skabelon = document.querySelector("#produktliste_template").content;
const beholder = document.querySelector(".produktliste_grid");

function visData(json) {
  console.log(json);
  json.forEach((kategori) => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector("a").href = "produktliste.html?subcategory=" + kategori.subcategory;
    klon.querySelector("a").textContent = kategori.subcategory;
    beholder.appendChild(klon);
  });
}

hentData();
