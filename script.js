
const inputIpAddress = document.querySelector('.input-container input');
const ipAddressOutput = document.querySelector('.ipAddressOutput');
const locationOutput = document.querySelector('.locationOutput');
const timezoneOutput = document.querySelector('.timezoneOutput');
const searchBtn = document.querySelector('.input-container i');
const ispOutput = document.querySelector('.ispOutput');
const apiUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_HbC2akQJwpIVbdxDByC6Jf46DTeAo&ipAddress=8.8.8.8';

const apiAddress = 'ipAddress=8.8.8.8';
const apiKey = 'at_HbC2akQJwpIVbdxDByC6Jf46DTeAo';


async function getIpData (domain) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${inputIpAddress.value}&domain=${inputIpAddress.value}`);
    console.log(response);
    const data = await response.json();
    console.log(data);

    ipAddressOutput.innerHTML = `${data.ip}`;
    locationOutput.innerHTML = `${data.location.region}, ${data.location.country}`;
    timezoneOutput.innerHTML = `UTC-${data.location.timezone}`;
    ispOutput.innerHTML = `${data.isp}`;

}


getIpData ();

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getIpData (inputIpAddress.value);
 });




 // map container

 var map = L.map('map').setView([51.505, -0.09], 13);
 console.log(map);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);