const apiKey = "52e006b695f15503bf9b8526fc796cbc";
const apiURl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const watherIcon = document.querySelector('.weather-icon')


async function checkWeather(city){
   const respons = await fetch(apiURl + city + `&appid=${apiKey}`)
   var data = await respons.json();

  

   console.log(data);
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
   document.querySelector(".humidty").innerHTML = data.main.humidity+"%";
   document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";


   if(data.weather[0].main == "Cloudes")
   {
      watherIcon.src = "img/cloud.png";
   }
   else if(data.weather[0].main == "Clear")
   {
      watherIcon.src="img/clear.png";
   }
   else if(data.weather[0].main == "Rain")
   {
      watherIcon.src="img/rain.png";
   }
   else if(data.weather[0].main == "Drizzle")
   {
      watherIcon.src="img/snow.png";
   }
   else if(data.weather[0].main == "Mist")
   {
      watherIcon.src="img/mist.png";
   }
   
}


searchBtn.addEventListener("click", ()=>{
   checkWeather(searchBox.value);

   })




