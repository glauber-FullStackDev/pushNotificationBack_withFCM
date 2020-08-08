"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS
const cors = require("cors");
const express = require("express");
const bodyParser = __importStar(require("body-parser"));
const index_1 = require("./routes/index");
exports.app = express();
var port = process.env.PORT || 3000;
// CONFIGS
exports.app.set('view engine', 'ejs');
exports.app.use(cors());
exports.app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Methods', "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATH")
    // res.header('Access-Control-Allow-Headers', "accept, Accept-Language, Content-Language, Content-Type");
    // res.header('Access-Control-Allow-Credentials', "true");
    next();
});
exports.app.use(express.static('public'));
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: true }));
// PATHS
exports.app.use('/pushNotification', index_1.PushNotification);
// SERVER
exports.app.listen(port, () => {
    console.log('Listening in port' + port);
});
//# sourceMappingURL=app.js.map