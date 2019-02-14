require('../src/data.js');


 
//Así es como me imagino que puede ser el test...
 
 describe('filter', () => {
  it('Debería ser una función', () => {
    expect(window.filter()).toBe('function');
  });
  it ('debería retornar `[{nombre : Silvana, edad : 32, altura : 1.80}]` para: filter = (dataStudent, Silvana)', () => {
    expect(window.filter(dataStudent, 'Silvana' [0])).toEqual('[{nombre : Silvana, edad : 32, altura : 1.80}]')
  })
});

describe('sort', () => {
  it('debería ser una función', () => {
    expect('sort').toBe('function');
  })
})

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/