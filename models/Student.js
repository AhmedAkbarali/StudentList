const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema =  new Schema ({
    firstName: String,
    lastName: String
});

mongoose.model('students', studentSchema);