require('../src/data.js');
require('../src/data/worldbank/worldbank.js');

const miniData = [
  {
    "data": {
      "1960": "",
      "1961": "",
      "1962": "",
      "1963": "",
      "1964": "",
      "1965": "",
      "1966": "",
      "1967": "",
      "1968": "",
      "1969": "",
      "1970": "",
      "1971": "",
      "1972": "",
      "1973": "",
      "1974": "",
      "1975": "",
      "1976": "",
      "1977": "",
      "1978": "",
      "1979": "",
      "1980": "",
      "1981": "",
      "1982": "",
      "1983": "",
      "1984": "",
      "1985": "",
      "1986": "",
      "1987": "",
      "1988": "",
      "1989": "",
      "1990": 33.1,
      "1991": 31.8,
      "1992": 30.6,
      "1993": 29.4,
      "1994": 28.4,
      "1995": 27.5,
      "1996": 26.7,
      "1997": 25.9,
      "1998": 25.1,
      "1999": 24.3,
      "2000": 23.6,
      "2001": 22.9,
      "2002": 22.2,
      "2003": 21.5,
      "2004": 20.8,
      "2005": 20,
      "2006": 19.2,
      "2007": 18.2,
      "2008": 17.3,
      "2009": 16.4,
      "2010": 15.6,
      "2011": 14.9,
      "2012": 14.5,
      "2013": 14.2,
      "2014": 14,
      "2015": 14.1,
      "2016": 14.4,
      "2017": ""
    },
    "countryName": "México",
    "countryCode": "MEX",
    "indicatorName": "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)",
    "indicatorCode": "SH.ANM.NPRG.ZS"
  },
  {
    "data": {
      "1960": "",
      "1961": "",
      "1962": "",
      "1963": "",
      "1964": "",
      "1965": "",
      "1966": "",
      "1967": "",
      "1968": "",
      "1969": "",
      "1970": "",
      "1971": "",
      "1972": "",
      "1973": "",
      "1974": "",
      "1975": "",
      "1976": "",
      "1977": "",
      "1978": "",
      "1979": "",
      "1980": "",
      "1981": "",
      "1982": "",
      "1983": "",
      "1984": "",
      "1985": "",
      "1986": "",
      "1987": "",
      "1988": "",
      "1989": "",
      "1990": 33.3,
      "1991": 32,
      "1992": 30.8,
      "1993": 29.7,
      "1994": 28.7,
      "1995": 27.8,
      "1996": 27,
      "1997": 26.2,
      "1998": 25.4,
      "1999": 24.6,
      "2000": 23.9,
      "2001": 23.2,
      "2002": 22.5,
      "2003": 21.8,
      "2004": 21.1,
      "2005": 20.3,
      "2006": 19.4,
      "2007": 18.5,
      "2008": 17.6,
      "2009": 16.6,
      "2010": 15.8,
      "2011": 15.2,
      "2012": 14.7,
      "2013": 14.4,
      "2014": 14.3,
      "2015": 14.4,
      "2016": 14.6,
      "2017": ""
    },
    "countryName": "México",
    "countryCode": "MEX",
    "indicatorName": "Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)",
    "indicatorCode": "SH.ANM.ALLW.ZS"
  },
  {
    "data": {
      "1960": "",
      "1961": "",
      "1962": "",
      "1963": "",
      "1964": "",
      "1965": "",
      "1966": "",
      "1967": "",
      "1968": "",
      "1969": "",
      "1970": "",
      "1971": "",
      "1972": "",
      "1973": "",
      "1974": "",
      "1975": "",
      "1976": "",
      "1977": "",
      "1978": "",
      "1979": "",
      "1980": "",
      "1981": "",
      "1982": "",
      "1983": "",
      "1984": "",
      "1985": "",
      "1986": "",
      "1987": "",
      "1988": "",
      "1989": "",
      "1990": "",
      "1991": "",
      "1992": "",
      "1993": "",
      "1994": "",
      "1995": "",
      "1996": "",
      "1997": "",
      "1998": "",
      "1999": "",
      "2000": "",
      "2001": "",
      "2002": "",
      "2003": "",
      "2004": "",
      "2005": "",
      "2006": "",
      "2007": "",
      "2008": "",
      "2009": "",
      "2010": "",
      "2011": "",
      "2012": "",
      "2013": "",
      "2014": "",
      "2015": "",
      "2016": "",
      "2017": ""
    },
    "countryName": "México",
    "countryCode": "MEX",
    "indicatorName": "Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)",
    "indicatorCode": "SG.VAW.REFU.ZS"
  },
]

const dataToSort = {
      "1989": "",
      "1990": 33.1,
      "1998": 25.1,
      "2007": 18.2,
      "2008": 17.3,
      "2013": 14.2
    }

  const orderedData =  [
    ["1989", ""],
    ["2013", 14.2],
    ["2008", 17.3],
    ["2007", 18.2],
    ["1998", 25.1],
    ["1990", 33.1]
  ] 
  
  const orderedDataDescendent = [
    ["1990", 33.1],
    ["1998", 25.1],
    ["2007", 18.2],
    ["2008", 17.3],
    ["2013", 14.2],
    ["1989", ""],
  ]

describe('filterCountry', () => {
  it('Debería ser un objeto', () => {
    expect(typeof window.worldBank).toBe('object');
  })
})
describe('filter', () => {
  it('Debería ser un objeto', () => {
    expect(typeof window.worldBank).toBe('object');
  });
  describe('filter', () => {
    it('Debería ser una función', () => {
      expect(typeof window.worldBank.filter).toBe('function');
    })
  })
  it('debería retornar un arreglo de indicadores para: filter (WORLDBANK, `prevalencia`)', () => {
    expect(window.worldBank.filter(miniData, 'prevalencia')[1]).toEqual(miniData[1]);
  })
});

describe('sort', () => {
  it('debería ser una función', () => {
    expect(typeof window.worldBank.sort).toBe('function');
  })
  it('debería retornar un arreglo de datos ordenados de forma ascendente para sort(dataToSort, `ascendent`)', () => {
    expect(window.worldBank.sort(dataToSort, `ascendent`)).toEqual(orderedData);
  })
  it('Debería retornar un arreglo de datos ordenados de forma descendente para: sort(dataToSort, `descendent`)', () =>{
    expect(window.worldBank.sort(dataToSort, `descendent`)).toEqual(orderedDataDescendent);
  });
});

