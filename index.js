const express = require('express');
const app = express();
const port = process.env.port || 4000;

app.get('/',function(req,res) {
  res.send('Hello World');
});

app.get('/little-friend/:name',function(req,res) {
  const { name } = req.params;
  res.send(`say hello to my little friend: ${name} :).`);
});

console.log(`listening on port: ${port}`);

app.listen(port);
