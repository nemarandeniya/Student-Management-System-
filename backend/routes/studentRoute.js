const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')


//student routes
router.get('/getstudents', studentController.viewstudents)
router.post('/addstudents', studentController.addstudents)

module.exports = router