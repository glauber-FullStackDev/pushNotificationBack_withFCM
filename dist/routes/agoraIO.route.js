"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agoraIO_handler_1 = require("../services/agoraIO.handler");
const router = express_1.Router();
router.post('/', agoraIO_handler_1.getTokenKey);
exports.default = router;
//# sourceMappingURL=agoraIO.route.js.map