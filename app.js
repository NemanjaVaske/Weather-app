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
      const result = await data.json();
      console.log(result);
    } else {
      console.log("There is no such city");
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
