const api= {
    
}

const searchbox = document.querySelector('.search-box');
/*document.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}*/
console.log("test1");
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt)
{

    if(evt.keyCode === 13)
    {
    getResults(searchbox.value);
    console.log(searchbox.value);
    }
}

function getResults(query)
{
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResult);

}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  console.log(`${day} ${date} ${month} ${year}`);
    return `${day} ${date} ${month} ${year}`;
  }
function displayResult(weather){
    console.log(weather);
    let city = document.querySelector('.locations .city');
    city.innerText= `${weather.name} , ${weather.sys.country}`;

    let now = new Date();
  let datedisplay = document.querySelector('.locations .date');
  datedisplay.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerText = `${Math.round(weather.main.temp)}°c`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}





