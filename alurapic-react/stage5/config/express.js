var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,webpack = require('webpack')
    ,webpackMiddleware = require('webpack-dev-middleware')
    ,webpackConfig = require('./webpack.config.dev')
    ,routes = require('../app/routes');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(webpackMiddleware(webpack(webpackConfig)));

routes(app);

module.exports = app;
