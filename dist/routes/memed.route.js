"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memed_handler_1 = require("../services/memed.handler");
const router = express_1.Router();
router.post('/addMedico', memed_handler_1.addMedico);
router.post('/getMedico', memed_handler_1.getMedico);
exports.default = router;
//# sourceMappingURL=memed.route.js.map