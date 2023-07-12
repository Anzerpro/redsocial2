const mongoes = require('mongoose');

const { database } = require('./keys');

mongoes.connect(database.URI,{
    useNewUrlParser: true
})
.then(db => console.log ('DB conectado'))
.catch(err => console.error (err));