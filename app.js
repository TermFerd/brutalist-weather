
// `https://api.openweathermap.org/data/2.5/weather?q=london&appid=67662f7960d992d80ebbbde1420c678c`

const inputValue = document.querySelector('.search');
const desc = document.querySelector('.desc');
const place = document.querySelector('.place');
const degrees = document.querySelector('.degrees');
const feelsLike = document.querySelector('.feels-like');
const windMph = document.querySelector('.wind-mph');
const humidity = document.querySelector('.humidity');
const button = document.querySelector('.submit-btn');
const err = document.querySelector('.error-msg')

const displayError = () => {
    err.style.display = 'block';
};

const getData = () => { 
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=50a7aa80fa492fa92e874d23ad061374')
  .then(response => response.json())
  .then(data => {
    let tempValue = data['main']['temp'];
    let placeValue = data['name'];
    let descValue = data['weather'][0]['description'];
    let feelValue = data['main']['feels_like'];
    let windValue = data['wind']['speed'];
    let humidValue = data['main']['humidity'];

    desc.innerHTML = descValue;
    place.innerHTML = placeValue;
    degrees.innerHTML = tempValue+'°C';
    feelsLike.innerHTML = 'feels like: '+feelValue+'°C';
    windMph.innerHTML = 'wind: '+windValue+' mph';
    humidity.innerHTML = 'humidity:  '+humidValue+'%';
    err.style.display = 'none';

  })
  .catch(displayError)
};

button.addEventListener('click', getData)

