let wbData = {};
let dataPer = [];
fetch('./data/worldbank/worldbank.json').then(
  response => {
    return response.json();
  }).then(data => {
  wbData = data;
  dataPer = window.worldBank.filterCountry(wbData, 'PER');
  return wbData, dataPer;
})

//menú de hamburguesa
const hamburguerButton = document.getElementById('burger');
//función de botón de hamburguesa
hamburguerButton.addEventListener('click', () => {
  let menu = document.getElementById("header-buttons");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
})

// FUNCIONES PARA EL DOCUMENTO DE LA EXPLORACIÓN DE LOS INDICADORES POR INDICADOR
//después de que el usuario elije un indicador, aparece una gráfica indicando el porcentaje promedio
//del indicador de cada país, y la tabla con la información completa de los indicadores por país, por año

//Función que jala los tipos de indicadores a partir de la data inicial
//Utilizo la data de Perú para extraer los indicadores y ponerlos en un select

const typeOfIndicator = document.getElementsByClassName('type-of-indicator');
const chooseAnIndicator = document.getElementById('choose-an-indicator');
const indicatorSelect = document.getElementById('indicator-select');
let filteredIndicators = [];

//función que imprime en el select los indicadores 
const print = (indicatorName) => {
  const result = `<option value =  "${indicatorName}" > ${indicatorName} </option>`;
  indicatorSelect.insertAdjacentHTML('beforeend', result);
}

//Obteniendo los indicadores de cada tipo, basado en la dataPer con el evento click en esos botones

for (let i = 0; i < typeOfIndicator.length; i++) {
  typeOfIndicator[i].addEventListener('click', () => {
    chooseAnIndicator.style.display = 'block';
    indicatorSelect.innerHTML = '';
    let valueOfTypeIndicator = typeOfIndicator[i].value;
    filteredIndicators = window.worldBank.filter(dataPer, valueOfTypeIndicator);
    filteredIndicators.forEach(element => {
      let indicatorName = element.indicatorName;
      let indicatorCode = element.indicatorCode;
      print(indicatorName);
    })
  })
}


const tableSection = document.getElementById('table-section');
const indicatorNameSelected = document.getElementById('indicator-name-selected');
let table = document.getElementById('table');

let perMean = [];
let mexMean = [];
let braMean = [];
let chlMean = [];
let meanOfEachCountry = [];
let dataPerArrNumbers = [];
let dataMexArrNumbers = [];
let dataBraArrNumbers = [];
let dataChlArrNumbers = [];
let dataPerArrShorter = [];
let dataMexArrShorter = [];
let dataBraArrShorter = [];
let dataChlArrShorter = [];
let perData = [];
let mexData = [];
let braData = [];
let chlData = [];
// let sumOfMeans = [];
//función que imprime los indicadores en la nueva tabla
const printIndicatorsByCountry = (yearsArr, dataCountriesArr) => {
  for (let i = 0; i < yearsArr.length; i++) {
    const row = table.insertRow(0);
    const cellYear = row.insertCell(0);
    const cellDataPer = row.insertCell(1);
    const cellDataMex = row.insertCell(2);
    const cellDataBra = row.insertCell(3);
    const cellDataChl = row.insertCell(4);
    if (dataCountriesArr[0][i] !== '') {
      dataPerArrNumbers = Number(dataCountriesArr[0][i]);
      dataPerArrShorter = dataPerArrNumbers.toFixed(2);
    } else {
      dataPerArrShorter = 'N/A';
    }
    if (dataCountriesArr[1][i] !== '') {
      dataMexArrNumbers = Number(dataCountriesArr[1][i]);
      dataMexArrShorter = dataMexArrNumbers.toFixed(2);
    } else {
      dataMexArrShorter = 'N/A';
    }
    if (dataCountriesArr[2][i] !== '') {
      dataBraArrNumbers = Number(dataCountriesArr[2][i]);
      dataBraArrShorter = dataBraArrNumbers.toFixed(2);
    } else {
      dataBraArrShorter = 'N/A';
    }
    if (dataCountriesArr[3][i] !== '') {
      dataChlArrNumbers = Number(dataCountriesArr[3][i]);
      dataChlArrShorter = dataChlArrNumbers.toFixed(2);
    } else {
      dataChlArrShorter = 'N/A';
    }
    cellYear.insertAdjacentHTML('beforeend', `<tr><td>${yearsArr[i]}</td></tr>`);
    cellDataPer.insertAdjacentHTML('beforeend', `<tr><td>${dataPerArrShorter}</td></tr>`);
    cellDataMex.insertAdjacentHTML('beforeend', `<tr><td>${dataMexArrShorter}</td></tr>`);
    cellDataBra.insertAdjacentHTML('beforeend', `<tr><td>${dataBraArrShorter}</td></tr>`);
    cellDataChl.insertAdjacentHTML('beforeend', `<tr><td>${dataChlArrShorter}</td></tr>`);
    perData.push(Number(dataCountriesArr[0][i]));
    mexData.push(Number(dataCountriesArr[1][i]));
    braData.push(Number(dataCountriesArr[2][i]));
    chlData.push(Number(dataCountriesArr[3][i]));
  }
  perMean = window.worldBank.meanOfValues(perData);
  mexMean = window.worldBank.meanOfValues(mexData);
  braMean = window.worldBank.meanOfValues(braData);
  chlMean = window.worldBank.meanOfValues(chlData);
  meanOfEachCountry.push(perMean, mexMean, braMean, chlMean);

}

//Función de la gráfica :O
const doughnutChart = document.getElementById('myChart');

const getMyChart = (array) => {
  let myDoughnutChart = new window.Chart(doughnutChart, {
    type: 'doughnut',
    data: {
      labels: ['Perú', 'México', 'Brasil', 'Chile'],
      datasets: [{
        label: 'Promedio de indicador para Cada País',
        backgroundColor: ["rgb(241, 177, 54)", "rgb(0, 92, 116)",
          "rgb(0, 63, 65)", "rgb(213, 91, 90)"
        ],
        data: array,
      }]
    }
  })
  return myDoughnutChart;
}

//Agregando evento change en el select
let selectedIndicator = [];
let indicatorName = '';
let indicatorCode = '';
let dataCountriesArr = [];
let yearsArr = [];

indicatorSelect.addEventListener('change', () => {
  //acá va la impresión en la tabla
  table.innerHTML = '';
  indicatorNameSelected.innerHTML = '';
  tableSection.style.display = 'block';
  indicatorName = indicatorSelect.value;
  indicatorNameSelected.innerHTML = 'Indicador: ' + indicatorName;
  selectedIndicator = window.worldBank.indicatorInAllCountries(wbData, indicatorName); //trae la info solo de un indicador para los cuatro países
  selectedIndicator.forEach(element => {
    //voy a obtener dos arreglos, uno con los keys (años)
    //y otro con los values para cada país :D
    let dataInformation = Object.values(element.data);
    dataCountriesArr.push(dataInformation);
  })
  yearsArr = Object.keys(selectedIndicator[0].data);
  getMyChart(meanOfEachCountry, doughnutChart);
  return printIndicatorsByCountry(yearsArr, dataCountriesArr);
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

const buttonToTop = document.getElementById('button-to-top');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonToTop.style.display = "block";
  } else {
    buttonToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

buttonToTop.addEventListener('click', () => {
  topFunction();
})
