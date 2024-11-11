const studentModal = require('../models/studenModel')


exports.viewstudents = (req, res) => {

    studentModal.find()
        .then(students => res.json(students))
        .catch(err => res.json(err))
}

exports.addstudents = async (req, res) => {
    console.log(req.body);

    const newStudent = new studentModal({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        contactNumber: req.body.contactNumber
    })
    try {
        await newStudent.save();
        res.status(201).json({ message: "Student added successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

