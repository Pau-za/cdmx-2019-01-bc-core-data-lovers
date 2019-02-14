//filtrar datos para usar los indicadores relacionados con la educació
const wbData = window.WORLDBANK;
const dataMex = window.WORLDBANK.MEX.indicators;
let filteredCountry = [];
let filteredIndicators = [];
let dataOrder = [];
let year = [];

const table = document.getElementById('indicator-table');
const indicator = document.getElementById('indicator');
const elements = document.getElementsByClassName('elements');
const country = document.getElementsByClassName('country');

//Ponemos valore inicial en el select
indicator.insertAdjacentHTML("beforeend", '<option value="">Selecciona un indicador</option>');

//función que imprime nombres de los indicadores en el select
const print = (indicatorName, indicatorCode) => {
  const result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
  indicator.insertAdjacentHTML('beforeend', result);
}


//evento click en los botones pais
for (let i = 0; i <= elements.length; i++) {
  country[i].addEventListener('click', () => {
    let countryValue = country[i].value;
    console.log(countryValue)
    filteredCountry = window.worldBank.filterCountry(wbData, countryValue);
    console.log(filteredCountry);
  })
}


//evento click en los botones indicadores
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    indicator.style.display = 'block';
    let valElement = elements[i].value; // event.target.value
    console.log(filteredIndicators = window.worldBank.filter(filteredCountry, valElement));
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
indicator.addEventListener("change", () => {
  document.getElementById('section-2').style.display = 'block';
  // document.getElementsByClassName('general-information').style.display='none';
  document.getElementById('indicator-name').innerHTML = '';
  table.innerHTML = '';
  let indicatorSelect = indicator.value;
  filteredIndicators.forEach(element => {
    if (element.indicatorCode === indicatorSelect) {
      let indicatorName = element.indicatorName;
      year = element.data;
      for (let data in year) {
        datos = parseFloat(year[data]);
        roundedData = datos.toFixed(3);
        // indicatorValues = `${data}, ${roundedData}`;
        document.getElementById('indicator-name').innerHTML = indicatorName + ':';
        const row = table.insertRow(0);
        const cellYear = row.insertCell(0);
        const cellData = row.insertCell(1);
        cellYear.insertAdjacentHTML('beforeend', `<tr><td>${data}</td></tr>`);
        cellData.insertAdjacentHTML('beforeend', `<tr><td>${roundedData}<td></tr>`);
      }
    }
    return year
  })
})

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
