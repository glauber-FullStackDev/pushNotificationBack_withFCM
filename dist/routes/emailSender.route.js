"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailSender_handler_1 = require("../services/emailSender.handler");
const router = express_1.Router();
router.post('/send', emailSender_handler_1.sendEmail);
exports.default = router;
//# sourceMappingURL=emailSender.route.js.map