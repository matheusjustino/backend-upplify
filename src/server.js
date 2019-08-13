const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://upplify:upplify@cluster0-r58uk.mongodb.net/dbUpplify?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(routes);

app.listen((process.env.PORT || 3001), () => {
    console.log('conectado')
});
