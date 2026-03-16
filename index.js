const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Osiel Alberto Favela Alvarado');
});
server.listen(3000, () => console.log('Corriendo en puerto 300011'));
