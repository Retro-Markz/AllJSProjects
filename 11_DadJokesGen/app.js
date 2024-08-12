const btnEl = document.getElementById("btn");
const API_URL = "https://api.api-ninjas.com/v1/dadjokes";
const API_KEY = "bFIJYDV3fzTtCnBlrBKw7A==NiuWP3c0fii2Rsad";
const jokeEl = document.getElementById("joke");
const options = {
  method: "GET",
  headers: {
    "x-Api-Key": API_KEY,
  },
};

async function getJoke() {
  const response = await fetch(API_URL, options);
  const data = await response.json();
  jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke);
