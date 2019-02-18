//filtrar datos para usar los indicadores relacionados con la educació
const wbData = window.WORLDBANK;
let filteredCountry = [];
let filteredIndicators = [];
let year = [];
let dataOrder = [];
let yearOfData = [];
let justData = [];
let roundedData = [];
let datos = [];
let yearOfDataOrdered = [];
let justDataOrdered = [];
const table = document.getElementById('indicator-table');
const indicator = document.getElementById('indicator');
const elements = document.getElementsByClassName('elements')
const chart = document.getElementById('chart').getContext('2d');
const country = document.getElementsByClassName('country');
const sectionType = document.getElementById('section-type');
const sectionOrderChart = document.getElementById('section-orderChart')
const chooseIndicator = document.getElementById('chooseIndicator');
const startButton = document.getElementById('startButton')
const countrySelected = document.getElementById('countrySelected');
const orderOption = document.getElementById('type-of-order');
const meanButton = document.getElementById('mean-button');
const meanResult = document.getElementById('mean-result');
//information ids
const hamburguerButton = document.getElementById('bar');
const informationOne = document.getElementById('information-1');
const informationTwo = document.getElementById('information-2');
const informationThree = document.getElementById('information-3');
const logoDataFemme = document.getElementById('logo-data-femme');
//botones del nav
const whoAreWe = document.getElementById('who-are-we');
const whatWeDo = document.getElementById('what-we-do');
const contact = document.getElementById('contact');
//boton inicio data
const buttonData = document.getElementById('buttonData');
const sectionCountry = document.getElementById('section-country');
const introduction = document.getElementById('introduction');


//Ponemos valore inicial en el select
indicator.insertAdjacentHTML("beforeend", '<option value="">Selecciona un indicador</option>');

//función que imprime nombres de los indicadores en el select
const print = (indicatorName, indicatorCode) => {
  const result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
  indicator.insertAdjacentHTML('beforeend', result);
}

//evento click en los botones pais
for (let i = 0; i < country.length; i++) {
  country[i].addEventListener('click', () => {
    sectionType.style.display = 'block';
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

//evento click en los botones
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    indicator.innerHTML = '';
    indicator.style.display = 'block';
    let valElement = elements[i].value; // event.target.value
    filteredIndicators = window.worldBank.filter(filteredCountry, valElement);
    filteredIndicators.forEach(element => {
      let indicatorName = element.indicatorName;
      let indicatorCode = element.indicatorCode;
      print(indicatorName, indicatorCode);
    })
  })
}

//función para imprimir datos de variable en el html
indicator.addEventListener("change", () => {
  sectionOrderChart.style.display = 'block';
  sectionCountry.style.display = 'none';
  sectionType.style.display = 'none';
  document.getElementById('indicator-name').innerHTML = '';
  table.innerHTML = '';
  let indicatorSelect = indicator.value;
  filteredIndicators.forEach(element => {
    if (element.indicatorCode === indicatorSelect) {
      let indicatorName = element.indicatorName;
      year = element.data;
      for (let data in year) {
        if (year[data] !== '') {
          datos = parseFloat(year[data]);
          roundedData = datos.toFixed(2)
        } else {
          roundedData = year[data]
        }
        document.getElementById('indicator-name').innerHTML = indicatorName + ':';
        const row = table.insertRow(0);
        const cellYear = row.insertCell(0);
        const cellData = row.insertCell(1);
        cellYear.insertAdjacentHTML('beforeend', `<tr><td>${data}</td></tr>`);
        cellData.insertAdjacentHTML('beforeend', `<tr><td>${roundedData}<td></tr>`);
      }
      //extrayendo los valores de años
      yearOfData = Object.keys(year);
      //extrayendo los valores de datos
      justData = Object.values(year);
    }
  })
  getMyChartPlease(yearOfData, justData, chart);
  return year
})

//función de gráfica normal
const getMyChartPlease = (yearOfData, justData, chart) => {
  //Pintando la gráfica
  let lineChartData = new window.Chart(chart, {
    type: 'line',
    data: {
      labels: yearOfData,
      datasets: [{
        label: 'Datos del indicador',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: justData,
      }]
    }
  })
  return lineChartData;
}

// //Función de la gráfica ascendente
// const ascendentChart = document.getElementById('ascendent-chart');
// const getMyAscendentChart = (years, data, ascendentChart) => {
//   let lineAscendentChart = new Chart(ascendentChart, {
//     type: 'line',
//     data: {
//       labels: yearOfDataOrdered,
//       datasets: [{
//         label: 'Datos del indicador',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: justDataOrdered,
//       }]
//     }
//   })
//   return lineAscendentChart;
// }

//pintar data ordenada que está guardada en indicatorData
const printSorted = (dataOrder) => {
  table.innerHTML = '';
  dataOrder.forEach(element => {
    const row = table.insertRow(0);
    const cellYear = row.insertCell(0);
    const cellData = row.insertCell(1);
    if (element[1] !== '') {
      let orderedData = Number(element[1]);
      // console.log(orderedData)
      justDataOrdered = orderedData.toFixed(2);
    } else {
      justDataOrdered = element[1];
    }
    cellYear.insertAdjacentHTML('afterbegin', `<tr><td>${element[0]}</td></tr>`)
    cellData.insertAdjacentHTML('afterbegin', `<tr><td>${justDataOrdered}<td></tr>`)
    yearOfDataOrdered.push(element[0])
  })
  return yearOfDataOrdered, justDataOrdered
}

//evento de la opción a ordenar
orderOption.addEventListener('change', () => {
  chart.innerHTML = '';
  dataOrder = window.worldBank.sort(year, orderOption.value)
  printSorted(dataOrder);
  // getMyAscendentChart(yearOfDataOrdered, justDataOrdered, chart)
})


//evento de boton data
buttonData.addEventListener('click', () => {
  sectionCountry.style.display = 'block';
  introduction.style.display = 'none';

})

// boton startButton
startButton.addEventListener('click', () => {
  introduction.style.display = 'block';
  sectionOrderChart.style.display = 'none';
})

// boton chooseIndicator
chooseIndicator.addEventListener('click', () => {
  sectionCountry.style.display = 'block';
  sectionType.style.display = 'block';
  sectionOrderChart.style.display = 'none';
})

//eventos de botones del nav
whoAreWe.addEventListener('click', () => {
  informationOne.style.display = 'block';
  informationTwo.style.display = 'none';
  informationThree.style.display = 'none';
  introduction.style.display = 'none';
  sectionCountry.style.display = 'none';
  sectionType.style.display = 'none';
  sectionOrderChart.style.display = 'none';
})

whatWeDo.addEventListener('click', () => {
  informationTwo.style.display = 'block';
  informationOne.style.display = 'none';
  informationThree.style.display = 'none';
  introduction.style.display = 'none';
  sectionCountry.style.display = 'none';
  sectionType.style.display = 'none';
  sectionOrderChart.style.display = 'none';
})

contact.addEventListener('click', () => {
  informationThree.style.display = 'block';
  informationOne.style.display = 'none';
  informationTwo.style.display = 'none';
  introduction.style.display = 'none';
  sectionCountry.style.display = 'none';
  sectionType.style.display = 'none';
  sectionOrderChart.style.display = 'none';
})

hamburguerButton.addEventListener('click', () => {
  let x = document.getElementById("buttonHeader");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
})

logoDataFemme.addEventListener('click', () => {
  introduction.style.display= 'block';
  informationThree.style.display = 'none';
  informationOne.style.display = 'none';
  informationTwo.style.display = 'none';
  sectionCountry.style.display = 'none';
  sectionType.style.display = 'none';
  sectionOrderChart.style.display = 'none';
})

meanButton.addEventListener('click', () => {
  meanResult.style.display = 'block';
  let dataValues = [];
  for(let i=0; i<justData.length; i ++){
    if(justData[i] !== ''){
  dataValues.push(Number(justData[i]))
    }
  }
  let result = window.worldBank.meanOfValues(dataValues);
  meanResult.innerHTML = result.toFixed(2);
})
