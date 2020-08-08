// IMPORTS
import cors = require('cors');
import express = require('express');
import * as bodyParser from 'body-parser';

import {
  PushNotification,
} from './routes/index';

export const app = express();
var port = process.env.PORT || 3000;

// CONFIGS
app.set('view engine', 'ejs');
app.use(cors());
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', "*");
  // res.header('Access-Control-Allow-Methods', "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATH")
  // res.header('Access-Control-Allow-Headers', "accept, Accept-Language, Content-Language, Content-Type");
  // res.header('Access-Control-Allow-Credentials', "true");
  next();
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PATHS

app.use('/pushNotification', PushNotification);

// SERVER
app.listen(port, () => {
  console.log('Listening in port' + port);
})