 const apiKey = "7f1b6cda7f7495892ec6fa32d4ddff04";

// Unified function to handle city input
function handleSearch() {
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    getWeather(city);
  } else {
    showAlert("Please enter a city name!");
  }
}

// Event listeners
document.getElementById("search-btn").addEventListener("click", handleSearch);
document.getElementById("city-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

// Custom alert function
function showAlert(message) {
  // Remove any existing alert
  const existingAlert = document.querySelector(".alert");
  if (existingAlert) {
    existingAlert.remove();
  }

  const alertBox = document.createElement("div");
  alertBox.className = "alert";
  alertBox.textContent = message;

  const app = document.querySelector(".weather-app");
  app.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);

    if (!res.ok) {
      showAlert("City not found!");
      document.getElementById("weather-card").style.display = "none";
      return;
    }

    const data = await res.json();
    updateUI(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    showAlert("Error fetching weather data.");
  }
}

function updateUI(data) {
  document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("temp").textContent = `${data.main.temp}°C`;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("pressure").textContent = data.main.pressure;
  document.getElementById("wind").textContent = data.wind.speed;
  document.getElementById("feels-like").textContent = data.main.feels_like;

  const iconCode = data.weather[0].icon;
  document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  document.getElementById("weather-card").style.display = "block";
}
