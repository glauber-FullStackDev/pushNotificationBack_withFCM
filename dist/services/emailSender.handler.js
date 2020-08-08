"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
function sendEmail(req, res) {
    const msg = {
        to: req.body.email,
        from: 'contato@ondoct.com',
        fromname: 'OnDoct - Consulta online',
        subject: req.body.assunto,
        text: req.body.mensagem,
        html: `<strong>${req.body.mensagem}</strong>`,
    };
    sgMail.send(msg).then(_resultSend => {
        res.status(200).send({ error: false, data: 'success' });
    }).catch(err => {
        console.log("VAMOS VER O ERRO ==> ", JSON.stringify(err.response.body));
        res.status(400).send({ error: true, data: err });
    });
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=emailSender.handler.js.map