constant assert = require ('assert');
function suma(a,b) {return a+b;}

assert.strictEqual(suma(2, 3), 5);
assert.strictEqual(suma(0, 0), 0);

console.log('Todas las pruebas pasaron');
