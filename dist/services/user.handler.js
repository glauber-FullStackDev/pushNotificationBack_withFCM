"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const onDoct_database_1 = require("../database/onDoct.database");
const moment_1 = __importDefault(require("moment"));
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let dadosUser = {
            email: req.body.email,
            nome: req.body.nome,
            documento: req.body.foto ? req.body.foto : 'Sem Documento',
            isDoctor: req.body.foto ? true : false
        };
        console.log(dadosUser);
        onDoct_database_1.auth.createUser({
            email: req.body.email,
            emailVerified: false,
            password: req.body.senha,
            displayName: req.body.nome,
            disabled: false
        }).then(() => {
            let body = {};
            if (req.body.foto) {
                let now = moment_1.default();
                body = Object.assign({ isDoctor: true, status: 'emAnalise', dateCreated: now.format('YYYY-MM-DDTHH:mm'), timestamp: now.unix() }, req.body);
                delete body['senha'];
            }
            else {
                let now = moment_1.default();
                body = Object.assign({ documento: 'Sem Documento', isDoctor: false, status: 'liberado', dateCreated: now.format('YYYY-MM-DDTHH:mm'), timestamp: now.unix() }, req.body);
                delete body['senha'];
            }
            onDoct_database_1.db.collection('users').doc(req.body.email).set(body).then(() => {
                res.status(200).send({ code: 200, result: 'Success' });
            }).catch((err) => {
                console.log(err);
                res.status(400).send({ code: 400, result: 'Erro ao cadastrar usuário, reveja os dados e tente novamente' });
            });
        }).catch((err) => {
            console.log('ERROR ==> ', err);
            let result = '';
            switch (err.code) {
                case 'auth/email-already-exists':
                    result = 'E-mail já cadastrado';
                    break;
                case 'auth/invalid-email':
                    result = 'E-mail inválido';
                    break;
                case 'auth/invalid-password':
                    result = 'Senha inválida';
                    break;
            }
            res.status(400).send({ code: 400, result: result });
        });
    });
}
exports.createUser = createUser;
function writeTest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).send({ code: 200, data: req.body });
    });
}
exports.writeTest = writeTest;
function readTest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (yield onDoct_database_1.db.collection('writeTest').doc('1').get()).data();
        res.status(200).send({ code: 200, data: result });
    });
}
exports.readTest = readTest;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let email = req.body.email;
        onDoct_database_1.db.collection('users').doc(email).delete().then(() => {
            onDoct_database_1.auth.getUserByEmail(email).then(userData => {
                onDoct_database_1.auth.deleteUser(userData.uid).then(() => {
                    res.status(200).send({ error: false, data: 'success' });
                });
            });
        }).catch(err => {
            res.status(400).send({ error: true, data: err.message });
        });
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.handler.js.map