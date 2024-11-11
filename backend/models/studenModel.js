const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    contactNumber: Number

})

const studentModal = mongoose.model("students", studentSchema)
module.exports = studentModal