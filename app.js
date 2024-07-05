
const KEY = '2e51a6f473fdf981934571fd8acc877c'; 

async function getWeather() {
    const city = document.getElementById("input").value;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${KEY}`);
        const weatherData = response.data;
        console.log(weatherData); // Log the weather data to the console
        document.getElementById("weatherinfo").innerHTML = `
            <h3>Weather Information of ${weatherData.name}</h3>
            <p>Temperature: ${weatherData.main.temp} °C</p>
            <p>Description: ${weatherData.weather[0].description}</p>
            <p>Wind Speed: ${weatherData.wind.speed}m/s</p>
            <p>Humidity: ${weatherData.main.humidity} %</p>
        `;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("weatherinfo").innerHTML = "Error fetching weather data";
    }
}
