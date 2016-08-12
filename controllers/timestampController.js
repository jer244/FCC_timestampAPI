var bodyParser = require('body-parser');

module.exports = function (app){

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res){
     res.sendFile('index.html');
});

app.get('/:id', function (req, res) {
    res.json({parameter: req.params.id});
});

};