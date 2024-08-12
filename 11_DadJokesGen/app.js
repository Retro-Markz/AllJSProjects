const btnEl = document.getElementById("btn");
const API_URL = "https://api.api-ninjas.com/v1/dadjokes";
const API_KEY = "bFIJYDV3fzTtCnBlrBKw7A==NiuWP3c0fii2Rsad";

const options = {
  method: "GET",
  headers: {
    "x-Api-Key": MY_API,
  },
};

async function getJoke() {
  const response = await fetch(API_URL, options);
  const data = await response.json();
}

btnEl.addEventListener("click", getJoke);
