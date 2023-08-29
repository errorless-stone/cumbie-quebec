const express = require('express')
const app = express()
const port = (process.env.PORT || 3000)

app.set('view engine', 'ejs')

let myVariableServer = 'soft coded server data';

app.get('/view', function (req, res) {
  res.render('index',
  {
    'myVariableClient' : myVariableServer
  }
  );
})

app.get('/', function (req, res) {
  res.send('Hello World from Express & a PaaS/Render')
})

app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})



//app.listen(3000)

app.listen(port, () => console.log(`Server is running...on ${ port }` ));