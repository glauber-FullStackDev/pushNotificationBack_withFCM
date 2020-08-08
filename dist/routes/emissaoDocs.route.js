"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emissaoDocs_handler_1 = require("../services/emissaoDocs.handler");
const router = express_1.Router();
router.post('/emitirAtestado', emissaoDocs_handler_1.emitirAtestado);
router.post('/emitirExames', emissaoDocs_handler_1.emitirExames);
exports.default = router;
//# sourceMappingURL=emissaoDocs.route.js.map