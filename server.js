require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const Product = require('./models/productModel');
const productRoute = require('./routes/productRoutes')
const app = express()
const cors = require('cors')
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const errorMiddleware = require('./middlewares/errorMiddleware')
app.use(express.json())
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use('/api/products', productRoute)
app.get('/', (req, res) => {

    res.send('Hello!!....This is a node api')
})
app.get('/page', (req, res) => {
    res.send('This is the first route in my first node api')
})

app.use(errorMiddleware)

mongoose.set('strictQuery', false)
mongoose.
    connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server started at port 3000")
        })
        console.log("Connected to the database")
    }).catch((error) => {
        console.log("error is:", error)
    })