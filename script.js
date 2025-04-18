const btn = document.querySelector(".btn-converter");
const selectMoeda1 = document.querySelector(".select-moeda-1");
const selectMoeda2 = document.querySelector(".select-moeda-2");
const valor = document.querySelector(".valor");
const dolarhoje = 5.8559015;
const eurohoje = 6.1959;
const librahoje = 7.1559;
const realhoje = 1.0;

function converter() {
  const valor = document.querySelector(".valor").value;
  const selectMoeda2 = document.querySelector(".select-moeda-2").value;
  const selectMoeda1 = document.querySelector(".select-moeda-1").value;

  if (selectMoeda1 == "real" && selectMoeda2 == "dolar") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    ).format(valor / dolarhoje);

    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "real" && selectMoeda2 == "euro") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "de-DE",
      {
        style: "currency",
        currency: "EUR",
      }
    ).format(valor / eurohoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "real" && selectMoeda2 == "libra") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "en-GB",
      {
        style: "currency",
        currency: "GBP",
      }
    ).format(valor / librahoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "real" && selectMoeda2 == "real") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(valor / realhoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "dolar" && selectMoeda2 == "real") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(valor * dolarhoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "dolar" && selectMoeda2 == "euro") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "de-DE",
      {
        style: "currency",
        currency: "EUR",
      }
    ).format((valor * dolarhoje) / eurohoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "dolar" && selectMoeda2 == "libra") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "en-GB",
      {
        style: "currency",
        currency: "GBP",
      }
    ).format((valor * dolarhoje) / librahoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "dolar" && selectMoeda2 == "dolar") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    ).format(valor);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "euro" && selectMoeda2 == "real") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(valor * eurohoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "de-DE",
      {
        style: "currency",
        currency: "EUR",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "euro" && selectMoeda2 == "dolar") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    ).format((valor * eurohoje) / dolarhoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "de-DE",
      {
        style: "currency",
        currency: "EUR",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "euro" && selectMoeda2 == "libra") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "en-GB",
      {
        style: "currency",
        currency: "GBP",
      }
    ).format((valor * eurohoje) / librahoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "de-DE",
      {
        style: "currency",
        currency: "EUR",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "euro" && selectMoeda2 == "euro") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "de-DE",
      {
        style: "currency",
        currency: "EUR",
      }
    ).format(valor);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "de-DE",
      {
        style: "currency",
        currency: "EUR",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "libra" && selectMoeda2 == "real") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    ).format(valor * librahoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "en-GB",
      {
        style: "currency",
        currency: "GBP",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "libra" && selectMoeda2 == "dolar") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    ).format((valor * librahoje) / dolarhoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "en-GB",
      {
        style: "currency",
        currency: "GBP",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "libra" && selectMoeda2 == "euro") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "de-DE",
      {
        style: "currency",
        currency: "EUR",
      }
    ).format((valor * librahoje) / eurohoje);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "en-GB",
      {
        style: "currency",
        currency: "GBP",
      }
    ).format(valor);
  }
  if (selectMoeda1 == "libra" && selectMoeda2 == "libra") {
    document.querySelector(".resultado").innerHTML = new Intl.NumberFormat(
      "en-GB",
      {
        style: "currency",
        currency: "GBP",
      }
    ).format(valor);
    document.querySelector(".convertido").innerHTML = new Intl.NumberFormat(
      "en-GB",
      {
        style: "currency",
        currency: "GBP",
      }
    ).format(valor);
  }
}

function trocarMoeda() {
  const selectMoeda1 = document.querySelector(".select-moeda-1");
  const selectMoeda2 = document.querySelector(".select-moeda-2");
  const nameMoeda1 = document.querySelector(".name-moeda-1");
  const nameMoeda2 = document.querySelector(".name-moeda-2");
  const imgMoeda1 = document.querySelector(".img-moeda-1");
  const imgMoeda2 = document.querySelector(".img-moeda-2");
  if (selectMoeda1.value == "dolar") {
    imgMoeda1.src = "./assets/img/dolar.png";
    nameMoeda1.innerHTML = "Dólar";
  }
  if (selectMoeda1.value == "euro") {
    imgMoeda1.src = "./assets/img/euro.png";
    nameMoeda1.innerHTML = "Euro";
  }
  if (selectMoeda1.value == "libra") {
    imgMoeda1.src = "./assets/img/libra.png";
    nameMoeda1.innerHTML = "Libra";
  }
  if (selectMoeda1.value == "real") {
    imgMoeda1.src = "./assets/img/real.png";
    nameMoeda1.innerHTML = "Real";
  }
  if (selectMoeda2.value == "dolar") {
    imgMoeda2.src = "./assets/img/dolar.png";
    nameMoeda2.innerHTML = "Dólar";
  }
  if (selectMoeda2.value == "euro") {
    imgMoeda2.src = "./assets/img/euro.png";
    nameMoeda2.innerHTML = "Euro";
  }
  if (selectMoeda2.value == "libra") {
    imgMoeda2.src = "./assets/img/libra.png";
    nameMoeda2.innerHTML = "Libra";
  }
  if (selectMoeda2.value == "real") {
    imgMoeda2.src = "./assets/img/real.png";
    nameMoeda2.innerHTML = "Real";
  }

  converter();
}

selectMoeda2.addEventListener("change", trocarMoeda);
selectMoeda1.addEventListener("change", trocarMoeda);
valor.addEventListener("keyup", converter);

btn.addEventListener("click", converter);
