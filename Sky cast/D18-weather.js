// let city=document.getElementById(city)
// city.innerText="INDIA"


let cityname = document.getElementById('cityname')
let citydetails = document.getElementById('citydetails')
let temp = document.getElementById('temperature')
let country = document.getElementById('countryname')
let images = document.getElementById('weatherimage')
let sunny = document.getElementById('3')
let date = document.getElementById('date')
let x = new Date()

let fetchdetails = async () => {
    if (cityname.value.length == 0) {
        alert("Please enter city name before searching")
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        citydetails.innerText = cityname.value;
        countryname.innerText = `${data.sys.country}`
        temp.innerHTML = `<h4>${data.main.temp}<sup>o</sup>C</h4>`
        date.innerText = `${x.toDateString()}`


        if (data.main.temp <= 0) {
            images.src = "freeze.png"
        }
        else if (data.main.temp <= 20) {
            images.src = "cold.jpg"
        }
        else if (data.main.temp <= 30) {
            images.src = "cloudy.png"
        }
        else if (data.main.temp > 30) {
            images.src = "sunny.png"
        }
    }
}



