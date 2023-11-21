// Importar la función sum del archivo app.js
// const { sum } = require('./app.js');

// Comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    // let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const {fromEuroToDollar} = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    // expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    expect (dollars).toBe(expected);
})

test("One dollar should be 146.26 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    expect(parseFloat(fromDollarToYen(1).toFixed(2))).toBe(146.26);
})

test("Thousand yens should be 5.56 pound", function() {
    const { fromYenToPound } = require('./app.js'); 
    expect(parseFloat(fromYenToPound(1000).toFixed(2))).toBe(5.56);
}) 