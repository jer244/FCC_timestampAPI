var bodyParser = require('body-parser');
var moment = require('moment');

module.exports = function (app){

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res){
     res.sendFile('index.html');
});

app.get('/:id', function (req, res) {
   var inputDate = req.params.id;
   
    //if not at number, check if string is a valid date and output accordingly
    if (isNaN(inputDate)){
	     if(moment(inputDate).isValid(true)){
	      var unixDate = Math.round((new Date(inputDate).getTime())/1000);
	      res.json({"unix": unixDate, "natural": inputDate});
	     }else{
	          res.json({"unix": null, "natural": null});
	     }
    //if number, check if valid unix date and output accordingly 
    }else{
	     if(moment.unix(inputDate).isValid()){
	     var dateStr = moment.unix(inputDate).format("MMMM D, YYYY");
	     res.json({"unix": inputDate, "natural": dateStr});
     }else{
	          res.json({"unix": null, "natural": null});
	     }
    }
 });
};