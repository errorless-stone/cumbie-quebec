const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World from Express & a PaaS/Render')
})

app.listen(3000)