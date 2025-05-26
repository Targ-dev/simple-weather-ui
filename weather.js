const apiKey = "0c415912f7aa864a43de536a7774de8b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
}

