const searchInput = document.getElementById("search");
const searchBtn = document.querySelector(".submit-btn");

function googleSearch(e) {
  e.preventDefault();
  let url = `https://www.google.com/search?q=${searchInput.value}`;
  window.open(url, "_self");
}

searchBtn.addEventListener("click", googleSearch);
searchBtn.addEventListener("submit", googleSearch);
