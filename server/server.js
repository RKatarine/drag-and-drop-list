const express = require('express');

const app = express();
const router = express.Router();

let routes = require('./routes');
routes(router);

const address = 'localhost';
const PORT = 9000;

app.use(express.static(__dirname + '/../public'));
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: false, limit: '500mb' }));
app.use('/', router);


app.listen(PORT, () => {
  console.log('+------------------------------------------------------------+');
  console.log('| System is up and running. Copy the URL below and open this |');
  console.log('| in your browser: http://' + address + ':' + PORT + '/      |');
  console.log('+------------------------------------------------------------+');
});
