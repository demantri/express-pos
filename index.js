const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Backend With Express.js')
})

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

const barangRoutes = require('./routes/barang')
app.use('/api/v1/barang', barangRoutes)

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})