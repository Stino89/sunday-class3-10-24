const express = require('express')
require('dotenv').config()
const userController = require('./controllers/users')

const app = express()

// routes
app.use('/users', userController)

const PORT = process.env.PORT || 8082

app.listen(PORT, console.log(`listening on port ${PORT}`)) // http://localhost:8082