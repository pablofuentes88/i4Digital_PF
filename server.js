/**
 * Autor: Pablo Fuentes
 * Date: 28/09/2021
 * Destription: Server Side
 */

var express = require('express');
var app = express();

//Settings
app.set('port', process.env.PORT || 8080);

//Static Resources
app.use(express.static(__dirname + '/public'));


app.listen(app.get('port'), function() {
    console.log('App listening on port 8080');
})