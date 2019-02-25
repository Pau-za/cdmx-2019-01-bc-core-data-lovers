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
    const result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
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

