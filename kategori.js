// lav url search objekt
const urlParams = new URLSearchParams(window.location.search);

// find sub kategori
const subcategories = urlParams.get("kategori");

// skab endpoint for search
const endpoint = `https://kea-alt-del.dk/t7/api/products/${subcategories}`;

function hentData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(visSubKategorier);
}

function visSubKategorier(subcategory) {
  console.log(subcategory);
  document.querySelector(".produktliste_grid").textContent = kategori.subcategory;
}

hentData();
