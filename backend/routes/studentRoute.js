const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')


//student routes
router.get('/getstudents', studentController.viewstudents)
router.post('/addstudents', studentController.addstudents)
router.get('/getstudent/:id', studentController.getstudent)
router.put('/updatestudent/:id', studentController.updatestudent)
router.delete('/deletestudent/:id', studentController.deletestudent)
module.exports = router