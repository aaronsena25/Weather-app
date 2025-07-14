const apiKey = "3dfaecdbe7d1dd20feb7ca546a2216d4"; 
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name!");
  }
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (data.cod === 200) {
      cityName.textContent = data.name;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      description.textContent = data.weather[0].description;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    } else {
      alert("City not found. Please try again!");
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    alert("Failed to fetch weather data.");
  }
}