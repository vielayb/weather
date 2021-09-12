var formEl = document.querySelector("#city-form");
var buttonEl = document.querySelector("#save-city");
console.log(buttonEl);

fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=charlotte,us&units=imperial&appid=34e6c376566828dda54a93facae88917"
)
.then(function(response) {
    return response.json();
})
.then(function(weather) {
    console.log(weather);

    var theTemp = weather.main.temp;
    var theHumid = weather.main.humidity;

    var responseContainerEl = document.querySelector('#response-container');
    var tempDisplay = document.createElement("p");
    tempDisplay.innerHTML = "Temp: " + theTemp;

    var humidDisplay = document.createElement("p");
    humidDisplay.innerHTML = "Humidity: " + theHumid;
    responseContainerEl.appendChild(tempDisplay);
    responseContainerEl.appendChild(humidDisplay);

    // console.log(weather.dt);
    // console.log(weather.dt + forecastDay);
    console.log("Your City is ", weather.coord.lon);

});

fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=35.227085&lon=-80.843124&units=imperial&appid=34e6c376566828dda54a93facae88917"
)
.then(function(response) {
    return response.json();
})
.then(function(forecastWeather) {
    console.log(forecastWeather);

// function to using moments js to convert unix into date format
    var date = forecastWeather.daily[4].dt;
    console.log(date);
    var day = moment.unix(date).utc();
    console.log(moment(day).format("L"));
});



// var taskFormHandler = function(event) {

//     event.preventDefault();

//     var cityNameInput = document.querySelector("input[name='city-name']").value;
//     // var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
//     if (!cityNameInput ){
//         alert("You need to fill out the task form!");
//         return false;
//     }

//     formEl.reset();

//     console.log(cityNameInput.value);
    
// };

// formEl.addEventListener("submit", taskFormHandler);
// "https://api.openweathermap.org/data/2.5/weather?zip=28214,us&units=imperial&appid=34e6c376566828dda54a93facae88917"


// console.log(moment(day).format("dddd, MMMM Do YYYY"));