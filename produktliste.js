const endpoint = `https://kea-alt-del.dk/t7/api/products`;

function hentData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(visData);
}

const skabelon = document.querySelector("#produktliste_template").content;
const beholder = document.querySelector(".card_grid");

function visData(json) {
  json.forEach((produkt) => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector("h2").textContent = produkt.brandname;
    klon.querySelector("p").textContent = produkt.productdisplayname;
    klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;

    if (produkt.soldout) {
      klon.querySelector("article").classList.add("udsolgt");
    }

    beholder.appendChild(klon);
  });

  if (produkt.discount) {
    klon.querySelector("article").classList.add("tilbud");
  }
}

hentData();
