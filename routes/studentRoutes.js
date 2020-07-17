const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Student = mongoose.model('students');

module.exports = (app) => {
    app.get('/api/students', async (req, res) => {
        const students = await Student.find({});
        try {
            res.send(students);
        } catch (err) {
            res.status(404).send(err);
        }
    });
};