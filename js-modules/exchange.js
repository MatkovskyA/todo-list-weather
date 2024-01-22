const euro = document.querySelector(".euro");
const dollar = document.querySelector(".dollar");

// data.Valute.USD.Value

fetch("https://www.cbr-xml-daily.ru/daily_json.js")
  .then((response) => response.json())
  .then((data) => {
    dollar.innerHTML = data.Valute.USD.Value;
    euro.innerHTML = data.Valute.EUR.Value;
  });
