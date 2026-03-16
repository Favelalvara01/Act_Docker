const assert = require('assert');

console.log('Iniciando pruebas...');

function suma(a, b) { return a + b; }
function resta(a, b) { return a - b; }
function multiplica(a, b) { return a * b; }

assert.strictEqual(suma(2, 3), 5);
console.log('✓ Prueba suma: PASSED');

assert.strictEqual(resta(10, 4), 6);
console.log('✓ Prueba resta: PASSED');

assert.strictEqual(multiplica(3, 4), 12);
console.log('✓ Prueba multiplicacion: PASSED');

console.log('Todas las pruebas pasaron correctamente');
