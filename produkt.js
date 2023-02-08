// lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
// find id
const productid = urlParams.get("id");

const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;
const endpoint = `https://kea-alt-del.dk/t7/api/products/${productid}`;

function hentData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("h2").textContent = produkt.productdisplayname;
  document.querySelector("img").src = imagePath;
  document.querySelector(".product_description").innerHTML = produkt.description;
  document.querySelector(".product_pris").textContent = produkt.price + " DKK";
}

hentData();
