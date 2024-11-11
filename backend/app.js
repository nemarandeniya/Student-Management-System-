require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')



const app = express();
app.use(cors())

const port = 5000 || process.env.PORT;

app.use(express.json())

app.use('/', require('./routes/studentRoute'))

mongoose.connect(process.env.MONGODB_URI)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})