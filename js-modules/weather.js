//weatherApi.com
// const apiKey = "c40732b25e994dbd96264614242201";

// fetch(
//   `http://api.weatherapi.com/v1/current.json?key=c40732b25e994dbd96264614242201&q=London`
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// получаем инпут и форму для погоды
const weatherForm = document.querySelector(".form-weather");
const inputLocation = document.querySelector(".weather-location");
//слушаем событие формы и получаем значение города из инпута
weatherForm.onsubmit = (event) => {
  event.preventDefault();
  let city;
  city = inputLocation.value.trim();
  console.log(city);
};
