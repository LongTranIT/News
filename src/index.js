const express = require('express');
const app = express();
const path=require('path');

const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route  = require('./routers');

const db=require('./config/db');
db.connect();

//HTTP Blogger
app.use(morgan('combined'));

const port = 3000;

//handlebar
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: require('./helpers/handlebars'),
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));//middleware
//router init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})