// weatherApi.com;
//data.location.country - получим страну введенного города
//data.location.name - получим введенный город
//data.current.temp_c - получим температуру
//data.current.wind_kph - скорость ветра
//data.current.condotion.text - получим осадки
const headerWrapper = document.querySelector(".header-weather-wrapper"); // обертка для вставки погоды

const apiKey = "c40732b25e994dbd96264614242201";

// получаем инпут и форму для погоды
const weatherForm = document.querySelector(".form-weather");
const inputLocation = document.querySelector(".weather-location");
//слушаем событие формы и получаем значение города из инпута
weatherForm.onsubmit = (event) => {
  event.preventDefault();
  let city = inputLocation.value.trim();
  const alertMessage = document.querySelector(".location-error");
  //запрос на сервер
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=c40732b25e994dbd96264614242201&q=${city}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        //если ошибка - выводим ее

        alertMessage.classList.add("location-error-showed");

        // alert(data.error.message);
      } else {
        //иначе выводим карточку
        // разметка для карточки
        alertMessage.classList.remove("location-error-showed");
        const weatherCardHTML = `
      <div class="weather-info">
          <span class="city">Город: ${data.location.name}</span>
          <span class="temperature">Температура: ${data.current.temp_c} ºC</span>
          <span class="temperature-feels">Ощущается как: ${data.current.feelslike_c} ºC</span>
          <span class="wind">Ветер: ${data.current.wind_kph} км/ч</span>
          <span class="precipitation">Осадки: ${data.current.condition.text}</span>
      </div>
`;

        //удаляем предыдущую каарточку
        const prevCard = document.querySelector(".weather-info");
        if (prevCard) {
          prevCard.remove();
        }
        headerWrapper.insertAdjacentHTML("afterEnd", weatherCardHTML);
      }
    });
};
