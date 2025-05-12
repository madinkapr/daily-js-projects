const apiKey = 'd1cb42c272b1b71dfa059128f0a9e626';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".search input"); //shu classni topadi
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); // api call, request
    console.log(response.status);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        var data = await response.json(); //json objectga aylantirib olindi, ya'ni 'data' json object

        //update qilganda datalari o'zgarish kerak boladigan qism
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }


}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); // button bosganda input ichidagi matn('London') olinadi va funksiya chaqiriladi
})
