"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pdf = require('html-pdf');
const EJS = require('ejs');
const user_handler_1 = require("../services/user.handler");
const router = express_1.Router();
router.post('/', user_handler_1.createUser);
router.get('/', user_handler_1.readTest);
router.post('/delete', user_handler_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.route.js.map