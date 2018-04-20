const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );

app.post('/api/auth/register', controller.register)
app.post('/api/auth/login', controller.userLogin)

massive( process.env.CONNECTION_STRING )
    .then( db => { app.set('db', db); 
    const port = process.env.PORT || 5000
    app.listen(port, () => console.log(` Mr. Roboto is tuned to ${port}`));
});
