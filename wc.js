let apiKey = "076059aaa083dbf1e62548197630a4dc";
let input = document.querySelector("input");
let ciudad = input.value;
let h2 = document.querySelector("h2");
let boton = document.querySelector("button");
let temp = document.querySelector(".temp");
let descrip = document.querySelector(".description");
let humedad = document.querySelector(".humedad");
let viento = document.querySelector(".viento");
let icono = document.querySelector(".icono");

boton.addEventListener("click", function () {
  h2.textContent = `Clima En: ${input.value}`;

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=076059aaa083dbf1e62548197630a4dc",
    function (data) {
      console.log(data.weather[0].description);
      humedad.textContent = `Humedad: ${data.main.humidity} %`;
      temp.textContent = `Temperatura: ${Math.round(
        data.main.temp - 273
      )} ° C `;
      descrip.textContent = `Descripcion: ${descFunc()}`;
      viento.textContent = `Velocidad del Viento: ${
        Math.round(data.wind.speed) * 2
      } km/h`;
    }
  );
});

function descFunc() {
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=076059aaa083dbf1e62548197630a4dc",
    function (data) {
      if (data.weather[0].description == "clear sky") {
        descrip.textContent = "Descripcion: Soleado";
        icono.innerHTML = '<span><i class="fa-solid fa-sun"></i> </span>';
      }
      if (data.weather[0].description == "broken clouds") {
        descrip.textContent = "Descripcion: Parcialmente Nublado";
        icono.innerHTML = '<span> <i class="fa-solid fa-cloud"></i></span>';
      }
      if (data.weather[0].description == "overcast clouds") {
        descrip.textContent = "Descripcion: Nublado";
        icono.innerHTML = '<span> <i class="fa-solid fa-cloud"></i></span>';
      }
      if (data.weather[0].description == "few clouds") {
        descrip.textContent = "Descripcion: Poco Nublado";
        icono.innerHTML = '<span> <i class="fa-solid fa-cloud"></i> </span>';
      }
      if (data.weather[0].description == "light rain") {
        descrip.textContent = "Descripcion: Poco Lluvioso";
        icono.innerHTML =
          '<span> <i class="fa-solid fa-cloud-rain"></i></span>';
      }
      if (data.weather[0].description == "moderate rain") {
        descrip.textContent = "Descripcion: Lluvia Moderada";
        icono.innerHTML =
          '<span> <i class="fa-solid fa-cloud-hail"></i> </span>';
      }
      if (data.weather[0].description == "scattered clouds") {
        descrip.textContent = "Descripcion: Nubes Dispersas";
        icono.innerHTML = '<span><i class="fa-solid fa-cloud-sun"></i></span>';
      }
      if (data.weather[0].description == "overcast clouds") {
        descrip.textContent = "Descripcion: Mayormente Nublado";
        icono.innerHTML = '<span> <i class="fa-solid fa-cloud"></i></span>';
      }
      if (data.weather[0].description == "thunderstorm") {
        descrip.textContent = "Descripcion: Tormenta";
        icono.innerHTML =
          '<span> <i class="fa-solid fa-cloud-showers-heavy"></i></span>';
      }
      if (data.weather[0].description == "light snow") {
        descrip.textContent = "Descripcion: Nieve Ligera";
        icono.innerHTML =
          '<span> <i class="fa-solid fa-snowflake"></i> </span>';
      }
      if (data.weather[0].description == "fog") {
        descrip.textContent = "Descripcion: Niebla";
        icono.innerHTML = '<span> <i class="fa-solid fa-smog"></i> </span>';
      }
      if (data.weather[0].description == "mist") {
        descrip.textContent = "Descripcion: Neblina";
        icono.innerHTML = '<span> <i class="fa-solid fa-smog"></i> </span>';
      }
    }
  );
}
