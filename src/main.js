//filtrar datos para usar los indicadores relacionados con la educació
//const WORLDBANK = WORLDBANK;
// const WORLDBANK = window.WORLDBANK;
const dataMex =window.WORLDBANK.MEX.indicators;
// let filteredIndicators = [];
let indicatorData = [];
// const sortedData = [];

const indicator = document.getElementById('indicator');

const elements = document.getElementsByClassName('elements')


//Ponemos valore inicial en el select
indicator.insertAdjacentHTML("beforeend", '<option value="">Selecciona un indicador</option>');

//función que imprime nombres de los indicadores en el select
const print = (indicatorName, indicatorCode) => {
  const result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
  indicator.insertAdjacentHTML('beforeend', result);
}


//evento click en los botones
// let indicatorName = '';
// let indicatorCode = '';
let filteredIndicators = [];
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
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

// let indicatorYear = [];
let indicatorValues = [];
// let indicatorData = [];
let completeData = [];
let year = [];
//función para imprimir datos de variable en el html
const table = document.getElementById('indicator-table');
indicator.addEventListener("change", ()=> {
  document.getElementById('section-2').style.display='block';
  // document.getElementsByClassName('general-information').style.display='none';
  document.getElementById('indicator-name').innerHTML = '';
  table.innerHTML='';
  let indicatorSelect = indicator.value;
  filteredIndicators.forEach( element => {
    if(element.indicatorCode === indicatorSelect){
      let indicatorName = element.indicatorName;
      year = element.data;
      for (let data in year) {
        indicatorValues = `${data}, ${year[data]}`;
        
        // indicatorYear = `<tr><td>${data}</td></tr>`;
        // indicatorData = `<tr><td>${year[data]}<td></tr>`;
        document.getElementById('indicator-name').innerHTML = indicatorName + ':';
        const row = table.insertRow(0);
        const cellYear = row.insertCell(0);
        const cellData = row.insertCell(1);
        cellYear.insertAdjacentHTML('beforeend', `<tr><td>${data}</td></tr>`);
        cellData.insertAdjacentHTML('beforeend', `<tr><td>${year[data]}<td></tr>`);
      }
    }
    return year
  })
})

//evento de la opción a ordenar
const orderOption = document.getElementById('type-of-order');
orderOption.addEventListener('change', () => {
     window.worldBank.sort(year, orderOption.value)
})
// for(let i; i < orderOption.length; i++){
//   orderOption[i].addEventListener('click', () => {
//     if(orderOption.value === 'ascendent') {
//       console.log(window.worldBank.sort(year, 'ascendent'))
//     } else if(orderOption.value === 'descendent') {
//       window.worldBank.sort(year, 'descendent')
//     }
//   })
// }

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
  informationOne.style.display='block';
  informationTwo.style.display = 'none';
  informationThree.style.display = 'none';
})

whatWeDo.addEventListener('click', () => {
  informationTwo.style.display='block';
  informationOne.style.display = 'none';
  informationThree.style.display = 'none';
})

contact.addEventListener('click', () => {
  informationThree.style.display='block';
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

//función que ordena 

// console.log(filteredIndicators);