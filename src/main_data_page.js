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
    const result = `<option value =  "${indicatorName}" > ${indicatorName} </option>`
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
let tableIndicatorsByCountry = document.getElementById('table-indicators-by-country');

//función que imprime los indicadores en la nueva tabla
const printIndicatorsByCountry = (yearsArr, dataCountriesArr) => {
  const printingYears = `<td>${yearsArr}</td>`;
  const printingPerData = `<td>${dataCountriesArr[0]}</td>`;
  const printingMexData = `<td>${dataCountriesArr[1]}</td>`;
  const printingBraData = `<td>${dataCountriesArr[2]}</td>`;
  const printingChlData = `<td>${dataCountriesArr[3]}</td>`;
  const row = table.insertRow(0);
  const cellYear = row.insertCell(0);
  const cellDataPer = row.insertCell(1);
  const cellDataMex = row.insertCell(2);
  const cellDataBra = row.insertCell(3);
  const cellDataChl = row.insertCell(4);
  cellYear.insertAdjacentHTML('beforeend', printingYears);
  cellDataPer.insertAdjacentHTML('beforeend', printingPerData);
  cellDataMex.insertAdjacentHTML('beforeend', printingMexData);
  cellDataBra.insertAdjacentHTML('beforeend', printingBraData);
  cellDataChl.insertAdjacentHTML('beforeend', printingChlData);
}

//Agregando evento change en el select
let selectedIndicator = [];
let indicatorName = '';
let indicatorCode = '';
indicatorSelect.addEventListener('change', () => {
  //acá va la impresión en la tabla
  tableIndicatorsByCountry.innerHTML = '';
  indicatorNameSelected.innerHTML = '';
  tableIndicatorsByCountry = '';
  tableSection.style.display = 'block';
  indicatorName = indicatorSelect.value;
  indicatorNameSelected.innerHTML = 'Indicador: ' + indicatorName;
  selectedIndicator = window.worldBank.indicatorInAllCountries(wbData, indicatorName);
  console.log(selectedIndicator);
})