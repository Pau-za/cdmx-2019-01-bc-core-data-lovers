require('../src/data.js');

const dataStudent = [
  {
   nombre : 'Silvana',
   edad : '32',
   altura: '1.60',
  },
  {
   nombre : 'John',
   edad : '33',
   altura: '1.80',
  },
  {
   nombre : 'Mike',
   edad : '25',
   altura: '1.70',
  },
  {
   nombre : 'Dení',
   edad : '35',
   altura: '1.50',
  }
 ]

 
//Así es como me imagino que puede ser el test...
 
 describe('filter', () => {
  it('debería ser una función', () => {
    expect('filter').toBe('function');
  });
  it ('debería retornar `[{nombre : Silvana, edad : 32, altura : 1.80}]` para: filter = (dataStudent, Silvana)', () => {
    expect(filter(dataStudent, 'Silvana')).toBe('[{nombre : Silvana, edad : 32, altura : 1.80}]')
  })
});

sort(), () => {
  it('debería ser una función', () => {
    expect('sort').toBe('function');
  })
}

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/

