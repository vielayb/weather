var formEl = document.querySelector("#city-form");
// var buttonEl = document.querySelector("#save-city");
var recentCityEl = document.querySelector("#recent-city");

var savedCity = function(event) {
    event.preventDefault();

    var cityNameInput = document.querySelector("input[name='city-name']").value;
   
    var cityDataObj = {
        name: cityNameInput.toUpperCase()
    };

    if (!cityNameInput) {
        alert("Please Enter a City Name");
        return false;
    }

    formEl.reset();
    
    postCity(cityDataObj);
    getCoord(cityDataObj);

};
var renderWeather = function(name){
    console.log("here");

    var forecastWeather = JSON.parse(window.localStorage.getItem("cities"))[name];
    console.log(forecastWeather);

                // function to using moments js to convert unix into date format
                var date = forecastWeather.daily[0].dt;
                var day = moment.unix(date).utc();
                var cityNameDisplay = name

                var citydateDisplay = document.querySelector('#city-date');
                citydateDisplay.innerHTML = '';


                var dateDisplay = document.createElement("h4");
                dateDisplay.innerHTML = moment(day).format("L");


                var cityDisplay = document.createElement("h2");
                cityDisplay.innerHTML = cityNameDisplay;


                citydateDisplay.appendChild(cityDisplay);
                citydateDisplay.appendChild(dateDisplay);


                //Jumbotron begin
                var theTemp = forecastWeather.current.temp;
                var theHumid = forecastWeather.current.humidity;
                var theUV = forecastWeather.current.uvi;
                var theWind = forecastWeather.current.wind_speed;
            
                var responseContainerEl = document.querySelector('#response-container');
                responseContainerEl.innerHTML = '';

                var tempDisplay = document.createElement("p");
                tempDisplay.innerHTML = "Temp: " + theTemp +"\u00B0"+"F";

                var windDisplay = document.createElement("p");
                windDisplay.innerHTML = "Wind: " + theWind +" MPH";
            
                var humidDisplay = document.createElement("p");
                humidDisplay.innerHTML = "Humidity: " + theHumid +"%";

                var uvindexDisplay = document.createElement("p");
                uvindexDisplay.innerHTML = "UV Index: " + theUV;

                responseContainerEl.appendChild(tempDisplay);
                responseContainerEl.appendChild(humidDisplay);
                responseContainerEl.appendChild(uvindexDisplay);
                responseContainerEl.appendChild(windDisplay);
                //Jumbotron End

                //Forecast Day 1 Begin
                var displayTemp1 = forecastWeather.daily[1].temp.day;
                var displayWind1 = forecastWeather.daily[1].wind_speed;
                var displayHumid1 = forecastWeather.daily[1].humidity;
                var displayDate1 = forecastWeather.daily[1].dt;
                var day1 = moment.unix(displayDate1).utc();

                var forecastDisplay1 = document.querySelector("#forecast-1");
                forecastDisplay1.innerHTML = '';

                var date1Display = document.createElement("h4");
                date1Display.innerHTML = moment(day1).format("L"); 

                var temp1Display = document.createElement("p");
                temp1Display.className = "temp";
                temp1Display.innerHTML = "Temp: " + displayTemp1 +"\u00B0"+"F";

                var wind1Display = document.createElement("p");
                wind1Display.className = "wind";
                wind1Display.innerHTML = "Wind: " + displayWind1 +" MPH";

                var humid1Display = document.createElement("p");
                humid1Display.className = "humid";
                humid1Display.innerHTML = "Humidity: " + displayHumid1 +"%";

                forecastDisplay1.appendChild(date1Display);
                forecastDisplay1.appendChild(temp1Display);
                forecastDisplay1.appendChild(wind1Display);
                forecastDisplay1.appendChild(humid1Display);
                //Forecast Day 1 End

                //Forecast Day 2 Begin
                var displayTemp2 = forecastWeather.daily[2].temp.day;
                var displayWind2 = forecastWeather.daily[2].wind_speed;
                var displayHumid2 = forecastWeather.daily[2].humidity;
                var displayDate2 = forecastWeather.daily[2].dt;
                var day2 = moment.unix(displayDate2).utc();

                var forecastDisplay2 = document.querySelector("#forecast-2");
                forecastDisplay2.innerHTML = '';

                var date2Display = document.createElement("h4");
                date2Display.innerHTML = moment(day2).format("L"); 

                var temp2Display = document.createElement("p");
                tempDisplay.className = "temp";
                temp2Display.innerHTML = "Temp: " + displayTemp2 +"\u00B0"+"F";

                var wind2Display = document.createElement("p");
                wind2Display.className = "wind";
                wind2Display.innerHTML = "Wind: " + displayWind2 +" MPH";

                var humid2Display = document.createElement("p");
                humid2Display.className = "humid";
                humid2Display.innerHTML = "Humidity: " + displayHumid2 +"%";

                forecastDisplay2.appendChild(date2Display);
                forecastDisplay2.appendChild(temp2Display);
                forecastDisplay2.appendChild(wind2Display);
                forecastDisplay2.appendChild(humid2Display);
                //Forecast Day 2 End

                //Forecast Day 3 Begin
                var displayTemp3 = forecastWeather.daily[3].temp.day;
                var displayWind3 = forecastWeather.daily[3].wind_speed;
                var displayHumid3 = forecastWeather.daily[3].humidity;
                var displayDate3 = forecastWeather.daily[3].dt;
                var day3 = moment.unix(displayDate3).utc();

                var forecastDisplay3 = document.querySelector("#forecast-3");
                forecastDisplay3.innerHTML = '';

                var date3Display = document.createElement("h4");
                date3Display.innerHTML = moment(day3).format("L"); 

                var temp3Display = document.createElement("p");
                temp3Display.className = "temp";
                temp3Display.innerHTML = "Temp: " + displayTemp3 +"\u00B0"+"F";

                var wind3Display = document.createElement("p");
                wind3Display.className = "wind";
                wind3Display.innerHTML = "Wind: " + displayWind3 +" MPH";

                var humid3Display = document.createElement("p");
                humid3Display.className = "humid";
                humid3Display.innerHTML = "Humidity: " + displayHumid3 +"%";

                forecastDisplay3.appendChild(date3Display);
                forecastDisplay3.appendChild(temp3Display);
                forecastDisplay3.appendChild(wind3Display);
                forecastDisplay3.appendChild(humid3Display);
                //Forecast Day 3 End

                //Forecast Day 4 Begin
                var displayTemp4 = forecastWeather.daily[4].temp.day;
                var displayWind4 = forecastWeather.daily[4].wind_speed;
                var displayHumid4 = forecastWeather.daily[4].humidity;
                var displayDate4 = forecastWeather.daily[4].dt;
                var day4 = moment.unix(displayDate4).utc();

                var forecastDisplay4 = document.querySelector("#forecast-4");
                forecastDisplay4.innerHTML = '';

                var date4Display = document.createElement("h4");
                date4Display.innerHTML = moment(day4).format("L"); 

                var temp4Display = document.createElement("p");
                temp4Display.className = "temp";
                temp4Display.innerHTML = "Temp: " + displayTemp4 +"\u00B0"+"F";

                var wind4Display = document.createElement("p");
                wind4Display.className = "wind";
                wind4Display.innerHTML = "Wind: " + displayWind4 +" MPH";

                var humid4Display = document.createElement("p");
                humid4Display.className = "humid";
                humid4Display.innerHTML = "Humidity: " + displayHumid4 +"%";

                forecastDisplay4.appendChild(date4Display);
                forecastDisplay4.appendChild(temp4Display);
                forecastDisplay4.appendChild(wind4Display);
                forecastDisplay4.appendChild(humid4Display);
                //Forecast Day 4 End

                //Forecast Day 5 Begin
                var displayTemp5 = forecastWeather.daily[5].temp.day;
                var displayWind5 = forecastWeather.daily[5].wind_speed;
                var displayHumid5 = forecastWeather.daily[5].humidity;
                var displayDate5 = forecastWeather.daily[5].dt;
                var day5 = moment.unix(displayDate5).utc();

                var forecastDisplay5 = document.querySelector("#forecast-5");
                forecastDisplay5.innerHTML = '';

                var date5Display = document.createElement("h4");
                date5Display.innerHTML = moment(day5).format("L"); 

                var temp5Display = document.createElement("p");
                temp5Display.className = "temp";
                temp5Display.innerHTML = "Temp: " + displayTemp5 +"\u00B0"+"F";

                var wind5Display = document.createElement("p");
                wind5Display.className = "wind";
                wind5Display.innerHTML = "Wind: " + displayWind5 +" MPH";

                var humid5Display = document.createElement("p");
                humid5Display.className = "humid";
                humid5Display.innerHTML = "Humidity: " + displayHumid5 +"%";

                forecastDisplay5.appendChild(date5Display);
                forecastDisplay5.appendChild(temp5Display);
                forecastDisplay5.appendChild(wind5Display);
                forecastDisplay5.appendChild(humid5Display);
                //Forecast Day 5 End
}
var getCoord = function(cityDataObj){
            // getting city name
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cityDataObj.name + ",us&units=imperial&appid=34e6c376566828dda54a93facae88917"
     )
        .then(function(response) {
            return response.json();
        })
        .then(function(weather) {

        var lat = weather.coord.lat;
        var lon = weather.coord.lon;

        return fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=34e6c376566828dda54a93facae88917"
        )
            .then(function(response) {
            return response.json();
            })
            .then(function(forecastWeather) {
                console.log(forecastWeather.daily);
                    // localCities.(cityDataObj.name)

                    localCities[cityDataObj.name] = forecastWeather
                    console.log("local cities");
                    console.log(localCities);
                    window.localStorage.setItem("cities", JSON.stringify(localCities));

                console.log(cityDataObj);
                renderWeather(cityDataObj.name);

             })
        
        });

}
//Left side buttons of recent searched cities
var postCity = function(cityDataObj){

    var recentlySavedCity = document.createElement("li");
    recentlySavedCity.className = "recent-city-button";
    recentlySavedCity.setAttribute("data-cityName", cityDataObj.name)
    recentlySavedCity.addEventListener("click", function(){
        renderWeather(recentlySavedCity.getAttribute("data-cityName"))
    })
    recentlySavedCity.textContent = cityDataObj.name;
    recentCityEl.appendChild(recentlySavedCity);

};

var renderButtons = function(){
    for (var city in localCities) {
        postCity({name:city});
    }
}
var localCities = JSON.parse(window.localStorage.getItem("cities"));
if (localCities === null){
    localCities = {

    }
    window.localStorage.setItem("cities", JSON.stringify({}))
}else{
    renderButtons();
}
formEl.addEventListener("submit", savedCity);