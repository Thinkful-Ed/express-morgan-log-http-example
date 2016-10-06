'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));
// app.use(morgan(':date[iso] :method :url :response-time'));

app.get('*', (req, res) => res.send('ok'));

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
