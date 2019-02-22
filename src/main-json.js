// Enlazar extraer data de json 
let wbData = {};
fetch('./data/worldbank/worldbank.json').then(
  response => {
    return response.json();
  }).then(data => {
  wbData = data;
})




//trayendo los botones de país por classname
const country = document.getElementsByClassName('country');
const countrySelected = document.getElementById('country-selected');

//evento click en los botones pais
for (let i = 0; i < country.length; i++) {
  country[i].addEventListener('click', () => {
    let countryValue = country[i].value;
    if (countryValue === 'BRA') {
      countrySelected.innerHTML = 'País: Brasil'
    } else if (countryValue === 'PER') {
      countrySelected.innerHTML = 'País: Perú'
    } else if (countryValue === 'MEX') {
      countrySelected.innerHTML = 'País: México'
    } else if (countryValue === 'CHL') {
      countrySelected.innerHTML = 'País: Chile'
    }
    filteredCountry = window.worldBank.filterCountry(wbData, countryValue);
    return filteredCountry;
  })
}

//trayendo el select donde se imprimirán los indicadores
const indicatorSelect = document.getElementById('indicator-select');
//trayendo los botones del tipo de indicador
const typeOfIndicator = document.getElementsByClassName('type-of-indicator');

//función que imprime nombres de los indicadores en el select
const print = (indicatorName, indicatorCode) => {
  const result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
  indicatorSelect.insertAdjacentHTML('beforeend', result);
}

//evento click en los botones del tipo de indicador
for (let i = 0; i < typeOfIndicator.length; i++) {
  typeOfIndicator[i].addEventListener('click', () => {
    indicatorSelect.innerHTML = '';
    let valueOfTypeIndicator = typeOfIndicator[i].value; // event.target.value
    filteredIndicators = window.worldBank.filter(filteredCountry, valueOfTypeIndicator);
    filteredIndicators.forEach(element => {
      let indicatorName = element.indicatorName;
      let indicatorCode = element.indicatorCode;
      print(indicatorName, indicatorCode);
    })
  })
}
