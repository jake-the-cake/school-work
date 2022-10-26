const express = require('express')

const app = express()
const port = process.env.PORT || 4200

app.use('/', (req, res) => {
  res.send('landing page')
})

app.listen(port, () => {
  console.log(`Server live on port ${ port }.`)
})