// https://api.openweathermap.org/data/2.5/weather?q=London&appid=6511e14723ad8cb6f243ece1366c5deb


const url = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key = '&appid=6511e14723ad8cb6f243ece1366c5deb'

// DOM

const h3Name = document.querySelector('h3')
const input = document.querySelector('input')
const button = document.querySelector('button')
const gradus = document.querySelector('.h2')
const ptag = document.querySelector('.p')
const ptag2 = document.querySelector('.p')
const ptag3 = document.querySelector('.p')

button.addEventListener('click', () => {
    getWeather(input.value)
    input.value = ''
})

document.getElementById('izmenaTempButton').addEventListener('click', function() {
    document.getElementById('temperature').innerText = '23c°';
});

document.getElementById('izmenaTempButton').addEventListener('click', function() {
    document.getElementById('dojd').innerText = 'Дождь';
});

document.getElementById('izmenaTempButton').addEventListener('click', function() {
    document.getElementById('veter').innerText = 'Ветер 8км/ч';
});

document.getElementById('izmenaTempButton').addEventListener('click', function() {
    document.getElementById('vlajnost').innerText = 'Влажность 31%';
});


document.getElementById('izmenaTempButton').addEventListener('click', function() {
    document.getElementById('surot').src = 'image/rain2.png';
});

function getWeather(cityName = "Bishkek") {
    fetch(url + cityName + api_key)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            h3Name.innerHTML = `
            ${data.name} <span>${data.sys.country}</span>`

            h2Temp.innerHTML = `
            ${Math.floor(data.main.temp - 273.15)}
            <span>°c</span>`
        })
}
getWeather();

