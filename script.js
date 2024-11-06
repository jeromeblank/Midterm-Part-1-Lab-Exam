// script.js

// Weather API Key
const apiKey = "a14cc6f893a10d6abff713fd7828c2f0"; 


document.getElementById("cityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.getElementById("city").value;
    getWeatherByCity(city);
});


function getWeatherByCity(city) {
    const weatherInfoDiv = document.getElementById("weather-info");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) { // Check if the city is found
                const temp = data.main.temp;
                const weather = data.weather[0].description;
                weatherInfoDiv.innerHTML = `The temperature in ${city} is ${temp}°C with ${weather}.`;
            } else {
                weatherInfoDiv.innerHTML = "City not found. Please try another city.";
            }
        })
        .catch(error => {
            weatherInfoDiv.innerHTML = "Error retrieving weather data.";
            console.error("Error fetching weather data:", error);
        });
}
