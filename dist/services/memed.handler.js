"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const onDoct_database_1 = require("../database/onDoct.database");
const API_KEY_MEMED = 'iJGiB4kjDGOLeDFPWMG3no9VnN7Abpqe3w1jEFm6olkhkZD6oSfSmYCm';
const SECRET_KEY_MEMED = 'Xe8M5GvBGCr4FStKfxXKisRo3SfYKI7KrTMkJpCAstzu2yXVN4av5nmL';
const URL_BASE = 'sandbox.api.memed.com.br';
function addMedico(req, res) {
    let nomeMedico = req.body.nomeMedico;
    let sobrenomeMedico = req.body.sobrenomeMedico;
    let email = req.body.email;
    let body = {
        data: {
            type: 'usuarios',
            attributes: {
                external_id: email,
                nome: nomeMedico,
                sobrenome: sobrenomeMedico
            }
        }
    };
    let config = {
        headers: {
            "Accept": "application/vnd.api+json",
            "Cache-Control": "no-cache",
            "Content-Type": "application/json"
        }
    };
    axios_1.default.post(`https://${URL_BASE}/v1/sinapse-prescricao/usuarios?api-key=${API_KEY_MEMED}&secret-key=${SECRET_KEY_MEMED}`, body, config)
        .then((result) => {
        console.log("VAMOS LÁ ==> ", result.data);
        onDoct_database_1.db.collection('users').doc(email).update({ tokenMemed: result.data.data.attributes.token, dadosMemed: result.data })
            .then(() => {
            res.status(200).send(result.data);
        });
    }).catch(err => {
        console.log("VAMOS LÁ ERROR==> ", err);
        res.status(400).send(err);
    });
}
exports.addMedico = addMedico;
function getMedico(req, res) {
    let email = req.body.email;
    axios_1.default.get(`https://${URL_BASE}/v1/sinapse-prescricao/usuarios/${email}?api-key=${API_KEY_MEMED}&secret-key=${SECRET_KEY_MEMED}`)
        .then(result => {
        res.status(200).send(result.data);
    }).catch(err => {
        res.status(400).send(err);
    });
}
exports.getMedico = getMedico;
function addProtocolos(req, res) {
    let body = {};
}
//# sourceMappingURL=memed.handler.js.map