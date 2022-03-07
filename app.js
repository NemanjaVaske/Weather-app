let cityName = "Belgrade";
let apiKey = "6060861c92d89cadc05f1c2ddf69c102";

const weatherApp = async () => {
  //jedinice su metric
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`,
      { mode: "cors" }
    );
    const result = await data.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

weatherApp();
