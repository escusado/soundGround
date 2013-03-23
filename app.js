//Config
var port = 4000;

//Dependencies
var express        = require('express'),
    http           = require('http'),
    path           = require('path'),
    engine         = require('ejs-locals'),
    helpers        = require('express-helpers'),
    ejs            = require('ejs'),
    nib            = require('nib'),
    connect_assets = require('connect-assets'),

    //routes
    web_app        = require('./controllers/web_app'),

    //init app
    app            = express();

var mini_server = {
  init: function(){
    //setup app
    app.configure( this.configureApp );

    //set routes
    app.get('/', web_app.index);
    // console.log('routes?>', routes);

    //start server
    app.listen(port, function(){
      console.log("Express server listening on port " + port);
    });

  },

  configureApp: function(){
    helpers(app);
    //run express with ejs support
    app.engine('ejs', engine);

    //custom ejs parser
    ejs.open  = '<?';
    ejs.close = '?>';

    //run middleware
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    // app.use(express.static(path.join(__dirname, 'public'))); //example
    app.use('/img', express.static(__dirname + '/assets/img'));

    app.use(app.router);
    app.use(connect_assets());

  }
};

mini_server.init();