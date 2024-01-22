//weatherApi.com
const apiKey = "c40732b25e994dbd96264614242201";

fetch(
  `http://api.weatherapi.com/v1/current.json?key=c40732b25e994dbd96264614242201&q=London`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
