// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example; 
*/



window.worldBank = {
  filterCountry: (data, country) => {
    let countryName = [];
    for (let dataCountry in data) {
      // console.log(dataCountry, data[dataCountry].indicators)
      if (country === dataCountry) {
        return countryName = dataCountry, data[dataCountry].indicators
      }
    }
  },

  filter: (data, wordToCompare) => {
    let filteredIndicators = [];
    data.forEach(element => {
      if ((new RegExp(wordToCompare, "i")).test(element.indicatorName)) {
        filteredIndicators.push(element);
      }
    });
    return filteredIndicators;
  },

  sort: (data, sortOrder) => {
    let indicatorData = [];
    for (let i in data)
      indicatorData.push([i, data[i]]);
    if (sortOrder === 'ascendent') {
      indicatorData.sort((a, b) => {
        return a[1] - b[1]
      })
    } else if (sortOrder === 'descendent') {
      indicatorData.sort((a, b) => {
        return b[1] - a[1];
      })
    }
    return indicatorData
  }
}
