// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example; 
*/
window.worldBank = {
    filter: (data, wordToCompare) => {
      data.forEach(element => {
        if ((new RegExp(wordToCompare, "i")).test(element.indicatorName)) {
          filteredIndicators.push(element);
          return filteredIndicators;
        }
      });
    },
    sort: (data, sortOrder) => {
      data.forEach(element => {
          let year = element.data;
          for (let data in year)
            let indicatorData = year[data];
          if (sortOrder === 'ascendent') {
            indicatorData.sort((a, b) => {
              return a - b;
            })
          } else if (sortOrder === 'descendent') {
            indicatorData.sort((a, b) => {
              return b - a;
            })
          }
        }
      }
    }
