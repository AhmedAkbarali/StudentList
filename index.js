const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require('./config/keys');

require('./models/Student');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => { console.log('database connected'); });
mongoose.connection.on('error', (err) => { console.error(err); });

require('./routes/studentRoutes')(app);


if(process.env.NODE_ENV === 'production') {
    //Express will serve up production assets like main.js
    app.use(express.static('client/build'));

    //Express will serve up index.html if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);