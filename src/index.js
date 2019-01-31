const express = require('express');
const morgan = require('morgan');

const app = express();

// settings
app.set('port', process.env.PORT || 8080);

// middleware
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/user', require('./routes/model'));


app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
   console.log(`corriendo en puerto ${app.get('port')}`);
});
