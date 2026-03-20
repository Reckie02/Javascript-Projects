const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display =  "block";
        document.querySelector(".weather").style.display =  "none";

    }else{

        var data = await response.json();
        
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "•C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

         if(data.weather[0].main == "clouds"){
        weatherIcon.src = " images/clouds.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = " images/sunny.png";
    }
     else if(data.weather[0].main == "rain"){
        weatherIcon.src = " images/rain.png";
    }
     else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = " images/drizzle.png";
    }
     else if(data.weather[0].main == "mist"){
        weatherIcon.src = " images/mist.png";
    }
     else if(data.weather[0].main == "clouds"){
        weatherIcon.src = " images/clouds.png";
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display ="none";

    }


}
searchBtn.addEventListener("click", ()=>){
    checkWeather(searchBox.value);
}
checkWeather();