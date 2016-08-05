//require and setup express and server stuff
var express = require('express');
var app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static('public')); //root path to static files like css and images

//require and setup method-overide
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

//require and setup body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//require and setup express handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//import burger_controller.js for routing
var routes = require('./controllers/burger_controller.js');
//console.log("routes = "+routes)
app.use('/', routes);

//start the server
app.listen(app.get('port'),function(){
    //console.log('Express started on http://localhost:' + app.get('port') +" press cntrl-C to exit");
});