var express = require('express')
var data = require('./app.json');
var cors = require('cors');
var app = express()

app.use(cors({
    origin: '*'
}))

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/products', function(request, response) {
    response.json(data);
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})