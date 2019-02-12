//filtrar datos para usar los indicadores relacionados con la educació
//const WORLDBANK = WORLDBANK;
const dataMex = WORLDBANK.MEX.indicators;
let filteredIndicators = [];

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
let indicatorName = '';
let indicatorCode = '';

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    indicator.innerHTML = '';
    indicator.style.display = 'block';
    let valElement = elements[i].value;
    window.worldBank.filter(dataMex, valElement);
    filteredIndicators.forEach(element => {
      let indicatorName = element.indicatorName;
      let indicatorCode = element.indicatorCode;
      print(indicatorName, indicatorCode);
    })
  })
}



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
      let year = element.data;
      for (let data in year) {
        indicatorYear = `<tr><td>${data}</td></tr>`;
        indicatorData = `<tr><td>${year[data]}<td></tr>`;
        document.getElementById('indicator-name').innerHTML = indicatorName + ':';
        const row = table.insertRow(0);
        const cellYear = row.insertCell(0);
        const cellData = row.insertCell(1);
        cellYear.insertAdjacentHTML('beforeend', indicatorYear);
        cellData.insertAdjacentHTML('beforeend', indicatorData);
      }
    }
  })
})

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




//evento de click
// const typeIndicator = () => {
//   button.addEventListener ('click', () => {
//      console.log(button.value);
//   } )
// }



//   educationButton.addEventListener('click',()=>{
//   wordToCompare = educationButton.value;
//   filterFunction(dataMex, wordToCompare);
//   filteredIndicators.forEach(element => {
//   let indicatorName = element.indicatorName;
//   let indicatorCode = element.indicatorCode;
//   print(indicatorName, indicatorCode);
//   })

// })






// const education = document.getElementById('education');
// const laboral = document.getElementById ('laboral');
// const demographic = document.getElementById ('demographic');

// // Funcion que imprime los indicadores de educación en el select
// education.insertAdjacentHTML ("beforeend", '<option value="">Selecciona un indicador</option>');
// const print = (indicatorName, indicatorCode) => {
//   let result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
//   education.insertAdjacentHTML('beforeend', result);
// }

// //función de extraer elementos:
// educationIndicators.forEach(element => {
//   let indicatorName = element.indicatorName;
//   let indicatorCode = element.indicatorCode;
//   print(indicatorName, indicatorCode)
// });

// // Funcion que imprime los indicadores de laboral en el select
// laboral.insertAdjacentHTML ("beforeend", '<option value="">Selecciona un indicador</option>');
// const printLaboral = (indicatorName, indicatorCode) => {
//   let result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
//   laboral.insertAdjacentHTML('beforeend', result);
// }


// //función de extraer elementos:
// laboralIndicators.forEach(element => {
//   let indicatorName = element.indicatorName;
//   let indicatorCode = element.indicatorCode;
//   printLaboral(indicatorName, indicatorCode)
// });

// // Funcion que imprime los indicadores de demográfico en el select

// demographic.insertAdjacentHTML ("beforeend", '<option value="">Selecciona un indicador</option>');
// const printDemographic = (indicatorName, indicatorCode) => {
//   let result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
//   demographic.insertAdjacentHTML('beforeend', result);
// }

// //función de extraer elementos:
// demographicIndicators.forEach(element => {
//   let indicatorName = element.indicatorName;
//   let indicatorCode = element.indicatorCode;
//   printDemographic(indicatorName, indicatorCode)
// });

// //función para imprimir datos de variable en el html
// education.addEventListener("change", ()=> {
//   document.getElementById('indicator-name').innerHTML = '';
//   document.getElementById('indicator-result').innerHTML='';
//   let indicatorSelect = education.value;
//   educationIndicatiors.forEach( element => {
//     if(element.indicatorCode == indicatorSelect){
//       let indicatorName = element.indicatorName;
//       let year = element.data;
//       console.log(element.data);
//       for (let data in year) {
//         indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
//         document.getElementById('indicator-name').innerHTML = indicatorName + ':';
//         document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
//       }
//     }
//   })
// })


// //EVENTO EN EL INDICADOR
// let indicatorResult = ('');

// //Eventos, variables
// const sectionOne = document.getElementById('section-1');
// const sectionTwo = document.getElementById('section-2');

// //Evento del botón "Volver a inicio"
// // const startButton = document.getElementById('startButton');

// // startButton.addEventListener('click', () => {
// //   sectionTwo.classList.add('hide');
// //   sectionOne.classList.remove('hide');
// // })



// /*
// let educationData = dataMex.find(element => {
//   element.indicatorName == /educación/i.test
// })

hamburguerButton = () => {
  let x = document.getElementById("buttonHeader");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}