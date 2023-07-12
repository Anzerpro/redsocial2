const express = require('express');

const config = require('./server/config');



//base de datos
require(`./database`)

const app = config(express());

 //inicio del server
app.listen(app.get('port'), () =>{
    console.log('Puerto de server', app.get('port'));
});
