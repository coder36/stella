import Page from './public/js/Page'
import express from 'express'
var React = require('react/addons');

var app = express();

app.get('/', function (req, res) {

    var reactHtml = React.renderToString(<Page/>);

    res.send(reactHtml);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});