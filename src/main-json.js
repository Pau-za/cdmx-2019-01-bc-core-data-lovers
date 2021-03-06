// Enlazar extraer data de json 
let wbData = {};
fetch('./data/worldbank/worldbank.json').then(
  response => {
    return response.json();
  }).then(data => {
  return wbData = data;
})

//variable que sirve para cambiar de página...
// const ubication = window.location.href;

// const hamburguerButton = document.getElementById('burger');
//función de botón de hamburguesa
// hamburguerButton.addEventListener('click', () => {
//   let menu = document.getElementById("header-buttons");
//   if (menu.style.display === "block") {
//     menu.style.display = "none";
//   } else {
//     menu.style.display = "block";
//   }
// })

//CÓDIGO DEL INICIO POR ELECCIÓN DE PAÍSES
//trayendo los botones de país por classname
const country = document.getElementsByClassName('country');
const countrySelected = document.getElementById('country-selected');
const selectIndicatorType = document.getElementById('select-indicator-type');

//evento click en los botones pais
let filteredCountry = [];
// if (ubication.includes== '/.data_page.html') {
for (let i = 0; i < country.length; i++) {
  country[i].addEventListener('click', () => {
    selectIndicatorType.style.display = 'block';
    console.log('clickeaste ' + country[i].value);
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
// }
//trayendo el select donde se imprimirán los indicadores
const indicatorSelect = document.getElementById('indicator-select');

//trayendo los botones del tipo de indicador
const typeOfIndicator = document.getElementsByClassName('type-of-indicator');

//función que imprime nombres de los indicadores en el select
// if (ubication == '/.data_page.html') {
  const print = (indicatorName, indicatorCode) => {
    const result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
    indicatorSelect.insertAdjacentHTML('beforeend', result);
  }
  // }
  const chooseAnIndicator = document.getElementById('choose-an-indicator');
  //evento click en los botones del tipo de indicador
  let filteredIndicators = [];
  // if (ubication == '/.data_page.html') {
    for (let i = 0; i < typeOfIndicator.length; i++) {
      typeOfIndicator[i].addEventListener('click', () => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
        chooseAnIndicator.style.display = 'block';
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
// }
//trayendo el id table
const table = document.getElementById('indicator-table');
let dataInformation = [];
let data = [];
let shortedData = [];
const indicatorInformation = document.getElementById('indicator-information');

//función para imprimir datos del indicador en el html cuando usuario elige uno
let yearOfData = [];
let justData = [];
// if (ubication == '/.data_page.html') {
indicatorSelect.addEventListener("change", () => {
  indicatorInformation.style.display = 'block';
  document.getElementById('indicator-name-selected').innerHTML = '';
  table.innerHTML = '';
  let indicatorCode = indicatorSelect.value;
  filteredIndicators.forEach(element => {
    if (element.indicatorCode === indicatorCode) {
      let indicatorName = element.indicatorName;
      dataInformation = element.data;
      for (let year in dataInformation) {
        if (dataInformation[year] !== '') {
          data = parseFloat(dataInformation[year]);
          shortedData = data.toFixed(2)
        } else {
          shortedData = dataInformation[year]
        }
        document.getElementById('indicator-name-selected').innerHTML = indicatorName + ':';
        const row = table.insertRow(0);
        const cellYear = row.insertCell(0);
        const cellData = row.insertCell(1);
        cellYear.insertAdjacentHTML('beforeend', `<tr><td>${year}</td></tr>`);
        cellData.insertAdjacentHTML('beforeend', `<tr><td>${shortedData}<td></tr>`);
      }
      //extrayendo los valores de años
      yearOfData = Object.keys(dataInformation);
      //extrayendo los valores de datos
      justData = Object.values(dataInformation);
    }
  })
  getMyChartPlease(yearOfData, justData, lineChart);
  return dataInformation;
})
// }
//id de gráfica lineal
// if (ubication == '/.data_page.html') {
const lineChart = document.getElementById('line-chart').getContext('2d');
//función de gráfica
const getMyChartPlease = (yearOfData, justData, lineChart) => {
  //Pintando la gráfica
  let lineChartData = new window.Chart(lineChart, {
    type: 'line',
    data: {
      labels: yearOfData,
      datasets: [{
        label: 'Datos del indicador',
        backgroundColor: 'rgb(0, 92, 116)',
        borderColor: 'rgb(0, 92, 116)',
        data: justData,
      }]
    }
  })
  return lineChartData;
}
// }
let yearOfDataOrdered = [];
let justDataOrdered = [];
//pintar data ordenada que está guardada en indicatorData
// if (ubication == '/.data_page.html') {
const printSorted = (dataOrder) => {
  table.innerHTML = '';
  dataOrder.forEach(element => {
    const row = table.insertRow(0);
    const cellYear = row.insertCell(0);
    const cellData = row.insertCell(1);
    if (element[1] !== '') {
      let orderedData = Number(element[1]);
      justDataOrdered = orderedData.toFixed(2);
    } else {
      justDataOrdered = element[1];
    }
    cellYear.insertAdjacentHTML('afterbegin', `<tr><td>${element[0]}</td></tr>`)
    cellData.insertAdjacentHTML('afterbegin', `<tr><td>${justDataOrdered}<td></tr>`)
    yearOfDataOrdered.push(element[0]);
  })
  return yearOfDataOrdered, justDataOrdered;
}
// }
//trayendo select de las opciones ordenar data
const orderByData = document.getElementsByClassName('order-by-data');
// const descOrder = document.getElementById('order-data-desc');
// const ascOrder = document.getElementById('order-data-asc');

//evento de la opción a ordenar
let dataOrder = [];
// if (ubication == '/.data_page.html') {
for (let i = 0; i < orderByData.length; i++) {
  orderByData[i].addEventListener('click', () => {
    if (orderByData[i].checked == true) {
      orderByData[i].checked = false;
    }
    dataOrder = window.worldBank.sort(dataInformation, orderByData[i].value)
    printSorted(dataOrder);
  })
}
// }
//función para limpiar radio
// const unselect = document.getElementById('unselect');

// unselect.addEventListener('click')

// id de promedio
const meanButton = document.getElementById('mean-button');
const meanResult = document.getElementById('mean-result');
//Evento botón de promedio
// if (ubication == '/.data_page.html') {
meanButton.addEventListener('click', () => {

  let dataValues = [];
  for (let i = 0; i < justData.length; i++) {
    if (justData[i] !== '') {
      dataValues.push(Number(justData[i]))
    }
  }
  let result = window.worldBank.meanOfValues(dataValues);
  meanResult.innerHTML = '= ' + result.toFixed(2);
})
// }

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

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
