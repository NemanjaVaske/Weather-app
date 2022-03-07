let cityName = "";
let apiKey = "6060861c92d89cadc05f1c2ddf69c102";
const form = document.getElementsByClassName("form")[0];

const weatherApp = async () => {
  //jedinice su metric
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`,
      { mode: "cors" }
    );
    if (data.status >= 200 && data.status <= 299) {
      const { main, wind, weather } = await data.json();

      const weatherCity = document.getElementById("weather-city");
      const weatherDesc = document.getElementById("weather-desc");
      const weatherTemp = document.getElementById("weather-temp");
      const weatherWind = document.getElementById("weather-wind");

      weatherCity.textContent = `Here is weather for ${cityName}`;
      weatherDesc.textContent = `${weather[0].description} `;
      weatherTemp.textContent = `Temp: ${main.temp} °C`;
      weatherWind.textContent = `Wind speed: ${((wind.speed * 18) / 5).toFixed(
        2
      )} km/h`;
    } else {
      const weatherCity = document.getElementById("weather-city");
      weatherCity.textContent = "That city don't exist, search again!";
    }
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cityName = document.getElementById("location").value;
  form.reset();
  weatherApp();
});
