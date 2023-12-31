const path = require('path');
const exphbs = require('express-handlebars');


const morgan = require('morgan');
const multer = require('multer');
const express = require('express');

const routes = require('../routes/index');
const errorHandler = require('errorhandler');




module.exports = app => {

//configuraciones
app.set('port',process.env.PORT || 3004);
app.set('views', path.join(__dirname, '../views'));

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    partialsDir: path.join(app.get("views"), "partials"),
     layoutsbir: path.join(app.get("views"), "layouts"),
      extname: ".hbs", 
      helpers: require('./helpers')
}));
app.set('view engine', '.hbs');
//middlewares
app.use(morgan('dev'));
app.use(multer({dest:path.join(__dirname,'../public/upload/temp')}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
routes(app);

//pag estaticas
app.use( '/public', express.static(path.join(__dirname, '../public')));

//paginas de error
if ('development'== app.get('env')){
    app.use(errorHandler);
}

    return app;
}