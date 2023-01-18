const express = require("express");
require('./database/config/db');
const routesV1 = require("./routes/v1");

process.on('uncaughtException', (e) => {
    console.log(e);
});

const app = express();

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true, parameterLimit: 50000 }));

// Routes
app.use('/v1', routesV1);

// catch 404 and forward to error handler
app.use((req, res, next) => next(new Error("Not Found")));

module.exports = app;
