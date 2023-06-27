const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

const {connectDB} = require('./config/db')

const colors = require('colors')

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))


const PORT = process.env.PORT || 8000

//Connect to database
connectDB()


app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to the support API"})

})
// Routes
app.use('/api/users', require('./routes/userRoutes') )
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))