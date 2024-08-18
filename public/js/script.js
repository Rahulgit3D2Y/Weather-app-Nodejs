const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getApiKey() {
  const response = await fetch("/api/key");
  const data = await response.json();
  return data.apiKey;
}

async function checkWeather(city = "New York") {
  // Default city if none is provided
  try {
    const apiKey = await getApiKey();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (response.status === 401) {
      console.error("Unauthorized: Invalid API Key");
      document.querySelector(".err").textContent = "Invalid API Key";
      document.querySelector(".err").style.display = "block";
      document.querySelector(".weather").style.display = "none";
      return;
    }

    if (!response.ok) {
      document.querySelector(".err").style.display = "block";
      document.querySelector(".weather").style.display = "none";
      return;
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main === "Wind") {
      weatherIcon.src = "images/wind.png";
    }

    document.querySelector(".err").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.querySelector(".err").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});

// Initial call with a default city
checkWeather("New York");
