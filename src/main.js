//filtrar datos para usar los indicadores relacionados con la educació
const wbData = window.WORLDBANK;
const dataMex = window.WORLDBANK.MEX.indicators;
let filteredIndicators = [];
let year = [];
let dataOrder = [];
let yearOfData = [];
let justData = [];
let indicatorName = [];
const table = document.getElementById('indicator-table');
const indicator = document.getElementById('indicator');
const elements = document.getElementsByClassName('elements')
const chart = document.getElementById('chart').getContext('2d');


//Ponemos valore inicial en el select
indicator.insertAdjacentHTML("beforeend", '<option value="">Selecciona un indicador</option>');

//función que imprime nombres de los indicadores en el select
const print = (indicatorName, indicatorCode) => {
  const result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
  indicator.insertAdjacentHTML('beforeend', result);
}


//evento click en los botones
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    indicator.innerHTML= '';
    indicator.style.display = 'block';
    let valElement = elements[i].value; // event.target.value
    filteredIndicators = window.worldBank.filter(dataMex, valElement);
    filteredIndicators.forEach(element => {
      let indicatorName = element.indicatorName;
      let indicatorCode = element.indicatorCode;
      print(indicatorName, indicatorCode);
    })
  })
}

//función para imprimir datos de variable en el html
let roundedData = [];
let datos = [];
let dataToGetYears = [];
indicator.addEventListener("change", () => {
  document.getElementById('section-2').style.display = 'block';
  document.getElementById('indicator-name').innerHTML = '';
  table.innerHTML = '';
  let indicatorSelect = indicator.value;
  filteredIndicators.forEach(element => {
    if (element.indicatorCode === indicatorSelect) {
      let indicatorName = element.indicatorName;
      year = element.data;
      for (let data in year) {
        // datos = parseFloat(year[data]);
        // roundedData = datos.toFixed(3);
        document.getElementById('indicator-name').innerHTML = indicatorName + ':';
        const row = table.insertRow(0);
        const cellYear = row.insertCell(0);
        const cellData = row.insertCell(1);
        cellYear.insertAdjacentHTML('beforeend', `<tr><td>${data}</td></tr>`);
        cellData.insertAdjacentHTML('beforeend', `<tr><td>${roundedData}<td></tr>`);
      }
    }
    //extrayendo los valores de años
    yearOfData = Object.keys(year);
    //extrayendo los valores de datos
    justData = Object.values(year);  
  })
  getMyChartPlease(yearOfData, justData, chart);
  return year
})


//función de gráfica
const getMyChartPlease = (yearOfData, justData, chart) => {
//Pintando la gráfica
let lineChartData = new Chart(chart, {
  type: 'line',
  data: {
    labels: `${yearOfData}`,
    datasets: [{
        label: `${indicatorName}`,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: `${justData}`,
      }]
    }
})
return lineChartData;
}

var ctx = document.getElementById('myChart').getContext('2d');
var mychart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
  // Configuration options go here
  options: {}
});


//evento de la opción a ordenar
const orderOption = document.getElementById('type-of-order');
orderOption.addEventListener('change', () => {
  dataOrder = window.worldBank.sort(year, orderOption.value)
  printSorted(dataOrder);
})

//pintar data ordenada que está guardada en indicatorData
const printSorted = (dataOrder) => {
  table.innerHTML = '';
  dataOrder.forEach(element => {
    console.log(element[0])
    const row = table.insertRow(0);
    const cellYear = row.insertCell(0);
    const cellData = row.insertCell(1);
    cellYear.insertAdjacentHTML('afterbegin', `<tr><td>${element[0]}</td></tr>`)
    cellData.insertAdjacentHTML('afterbegin', `<tr><td>${element[1]}<td></tr>`)
  })
}

//botones del nav
const whoAreWe = document.getElementById('who-are-we');
const whatWeDo = document.getElementById('what-we-do');
const contact = document.getElementById('contact');

//information ids
const informationOne = document.getElementById('information-1');
const informationTwo = document.getElementById('information-2');
const informationThree = document.getElementById('information-3');

//eventos de botones del nav
whoAreWe.addEventListener('click', () => {
  informationOne.style.display = 'block';
  informationTwo.style.display = 'none';
  informationThree.style.display = 'none';
})

whatWeDo.addEventListener('click', () => {
  informationTwo.style.display = 'block';
  informationOne.style.display = 'none';
  informationThree.style.display = 'none';
})

contact.addEventListener('click', () => {
  informationThree.style.display = 'block';
  informationOne.style.display = 'none';
  informationTwo.style.display = 'none';
})

const hamburguerButton = document.getElementById('bar');

hamburguerButton.addEventListener('click', () => {
  let x = document.getElementById("buttonHeader");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
})
