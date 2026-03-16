const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hola desde Docker + GitHub Actions!');
});
server.listen(3000, () => console.log('Corriendo en puerto 3000'));
