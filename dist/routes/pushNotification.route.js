"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pushNotification_handler_1 = require("../services/pushNotification.handler");
const router = express_1.Router();
router.post('/sendSingle', pushNotification_handler_1.sendSinglePush);
router.post('/sendMult', pushNotification_handler_1.sendMultPush);
exports.default = router;
//# sourceMappingURL=pushNotification.route.js.map