let endpoint = `https://kea-alt-del.dk/t7/api/products?limit=40`;
let itemUrl;

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
    klon.querySelector(".produkt_pris").textContent = produkt.price + " DKK";
    klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
    klon.querySelector("a").href = "produkt.html?id=" + produkt.id;

    if (produkt.soldout) {
      klon.querySelector("article").classList.add("udsolgt");
    }

    if (produkt.discount) {
      klon.querySelector("article").classList.add("onSale");
      klon.querySelector(".discounted").style.display = "block";
      klon.querySelector(".discounted p").textContent = Math.round(produkt.price - (produkt.price * produkt.discount) / 100) + " DKK";
      klon.querySelector(".discounted p+p span").textContent = produkt.discount;
    }

    beholder.appendChild(klon);
  });
}

function getProductsBySubcategory() {
  endpoint = `https://kea-alt-del.dk/t7/api/products?subcategory=${itemUrl}`;
  hentData();
}

window.onload = function() {

  itemUrl = window.location.href.split("=")[1];
  console.log(itemUrl)

  if(window.location.href.includes("?subcategory=")){
    getProductsBySubcategory();
  }

  else {
    hentData();
  }
}

