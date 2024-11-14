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

exports.getstudent = async (req, res) => {
    const id = req.params.id
    studentModal.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}

exports.updatestudent = async (req, res) => {
    const id = req.params.id
    studentModal.findByIdAndUpdate({ _id: id }, { name: req.body.name, email: req.body.email, contactNumber: req.body.contactNumber })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}

exports.deletestudent = async (req, res) => {
    const id = req.params.id
    studentModal.findByIdAndDelete({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}