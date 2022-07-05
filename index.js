const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (req, res) => {
  res.send('Hello World! 123')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})