const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();

app.use(bodyParser.json())

app.get('/blocks',(request, response) => {
  response.json(bc.chain);
});

app.post('/mine', (request, response) => {
  const block = bc.addBlock(request.body.data);
  console.log(`New block added: ${block.toString()}`);
  
  response.redirect('/blocks')
});

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port: ${HTTP_PORT}! ;)`);
})