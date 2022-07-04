const express = require('express');
const routes = require('../routes/index');
const vars = require('../config/vars');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);

app.initServer = () => {
    const server = app.listen(vars.APP_ENV.PORT,function () {
        const host = vars.APP_ENV.HOST;
        const port = vars.APP_ENV.PORT;
        console.log('example app listening at http://%s:%s', host, port);
    });
};

module.exports = app;

// Start server.