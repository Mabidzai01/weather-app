const cityform = document.querySelecto("#cityform");
const city =document.querySelector("#city");
const API_KEY =
"https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906";


const centigrade = document. querySelector("#centigrade");
const messages = document.querySelector("#messages");
const humidity = document.querySelector("#humidity");
const iconelement =document.querySelector("#icvonelement");

cityform.addEventlistener("submit", async(event) => {
event.preventDefault();

const data = await getweatherData();

if (!data) return;

showWeatherData(data);
});
const getweatherData = async () => {
try{
    messages.innerText ="";

const cityName = city.value;

 if (!cityName) return;

 const response = await fetch('${API_KEY}&q=${cityName}');
 const data = await response.json();

 if (!response.ok) throw  Error(data.error.message);
 return data;
} catch (err) {
messages.innerText = err;
 }
};
const showWeatherData =(data) => {
centigrade.innerText = '${data?.current?.temp_c}c';
humidity.innerText ='${data?.current?temp_c}c';
};