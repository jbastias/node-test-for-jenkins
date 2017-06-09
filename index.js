const express = require('express');
const app = express();
const port = process.env.port || 4000;

app.get('/',function(req,res) {
  res.send('Hello World');
});

console.log(`listening on port: ${port}`);

app.listen(port);
