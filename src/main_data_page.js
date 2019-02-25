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
const print = (indicatorName, indicatorCode) => {
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
      print(indicatorName, indicatorCode);
    })
  })
}


const tableSection = document.getElementById('table-section');
const indicatorNameSelected = document.getElementById('indicator-name-selected');
let table = document.getElementById('table');

//función que imprime los indicadores en la nueva tabla
const printIndicatorsByCountry = (yearsArr, dataCountriesArr) => {
  const printingYears = `<tr><td>${yearsArr}</td></tr>`;
  const printingPerData = `<tr><td>${dataCountriesArr[0]}</td></tr>`;
  const printingMexData = `<tr><td>${dataCountriesArr[1]}</td></tr>`;
  const printingBraData = `<tr><td>${dataCountriesArr[2]}</td></tr>`;
  const printingChlData = `<tr><td>${dataCountriesArr[3]}</td></tr>`;
  for (let i = 0; i < yearsArr.length; i++) {
    const row = table.insertRow(0);
    const cellYear = row.insertCell(0);
    const cellDataPer = row.insertCell(1);
    const cellDataMex = row.insertCell(2);
    const cellDataBra = row.insertCell(3);
    const cellDataChl = row.insertCell(4);
    cellYear.insertAdjacentHTML('beforeend', `<tr><td>${yearsArr[i]}</td></tr>`);
    cellDataPer.insertAdjacentHTML('beforeend', `<tr><td>${dataCountriesArr[0][i]}</td></tr>`);
    cellDataMex.insertAdjacentHTML('beforeend', `<tr><td>${dataCountriesArr[1][i]}</td></tr>`);
    cellDataBra.insertAdjacentHTML('beforeend', `<tr><td>${dataCountriesArr[2][i]}</td></tr>`);
    cellDataChl.insertAdjacentHTML('beforeend', `<tr><td>${dataCountriesArr[3][i]}</td></tr>`);
  }
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
  return printIndicatorsByCountry(yearsArr, dataCountriesArr);
})
