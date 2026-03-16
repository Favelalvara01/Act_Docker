const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Osiel Alberto Favela Alvarado');
});
server.listen(3000, () => console.log('Favela Alvarado Osiel Alberto DSM31 - Corriendo en puerto 3000'));
