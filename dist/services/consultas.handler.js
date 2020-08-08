"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onDoct_database_1 = require("../database/onDoct.database");
function createConsulta(req, res) {
    onDoct_database_1.db.collection('consultas').where('idUser', '==', req.body.email).where('status', '==', 'disponivel')
        .get().then((_consultas) => {
        let arrayPromises = [];
        _consultas.forEach(con => {
            arrayPromises.push(onDoct_database_1.db.collection('consultas').doc(con.id).update({ status: 'naoRealizado' }));
        });
        Promise.all(arrayPromises).then(() => {
            console.log("BODY ==> ", req.body);
            let dadosConsulta = {
                sala: req.body.sala,
                nomeUser: req.body.nomeUser,
                idUser: req.body.email,
                status: 'disponivel'
            };
            onDoct_database_1.db.collection('consultas').add(dadosConsulta).then((dados) => {
                res.status(200).send({ idConsulta: dados.id });
            }).catch(err => {
                res.status(400).send(err.message);
            });
        });
    });
}
exports.createConsulta = createConsulta;
//# sourceMappingURL=consultas.handler.js.map