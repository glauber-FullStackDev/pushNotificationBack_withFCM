"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultas_handler_1 = require("../services/consultas.handler");
const router = express_1.Router();
router.post('/createConsulta', consultas_handler_1.createConsulta);
exports.default = router;
//# sourceMappingURL=consultas.route.js.map