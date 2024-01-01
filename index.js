const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userController = require('./controller/User');
const morgan = require('morgan');
const { config } = require('dotenv');
const router = require('./router/route');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
config();

mongoose.connect('mongodb+srv://satyaoktaprada:tzSv4nKHNyPVMc0h@server-exper-pa.h2y2cya.mongodb.net/', (err) => {
    if (err) {
        console.log('DB Err.');
    } else {
        console.log('DB Connected.');
    }
});

app.use('/api', router);

app.post('/register', userController.register);
app.post('/login', userController.login);

app.listen(5000, () => {
    console.log(`Server Berjalan di port 5000`);
});

module.exports = app;
