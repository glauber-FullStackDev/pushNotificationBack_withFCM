"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pdf = require('html-pdf');
const EJS = require('ejs');
function emitirAtestado(req, res) {
    let dadosAtestado = req.body.dadosAtestado;
    // let dadosAtestado = {
    // CIDS: [{ desc: "H57.1 - DOR OCULAR", code: "H57.1" },
    // { desc: "A01.4 - FEBRE PARATIFÓIDE NÃO ESPECIFICADA", code: "A01.4" }],
    // body: "Atesto para os devidos fins que o paciente Fulano ",
    // data: "24/06/2020 -20:16:15",
    // emitted: false,
    // title: "ATESTADO MÉDICO",
    // nameMedico: 'Glauber de Souza',
    // crm: '0254FGH20RJ'
    // }
    EJS.renderFile(`./views/atestado.ejs`, { dadosAtestado }, (err, html) => {
        // str => Rendered HTML string
        if (err) {
            console.log(err);
            res.status(400).send({ data: 'ERROR' });
        }
        else {
            console.log('aqui');
            const options = {
                type: 'pdf',
                format: 'A4',
                orientation: 'portrait'
            };
            pdf.create(html, options).toBuffer((err, buffer) => {
                console.log("AQUI 2");
                if (err)
                    return res.status(400).json(err);
                res.end(buffer);
            });
            //res.status(200).send({data: 'success'});
        }
    });
}
exports.emitirAtestado = emitirAtestado;
function emitirExames(req, res) {
    let dadosProcedimentos = req.body.dadosProcedimentos;
    // let dadosProcedimentos = {
    // procedimentos: [
    // { exame: "10106065 - EXAME DE APTIDÃO FÍSICA E MENTAL, OU EM PORTADORES DE MOBILIDADE REDUZIDA, PARA FINS DE INSCRIÇÃO OU RENOVAÇÃO DA CNH (CARTEIRA NACIONAL DE HABILITAÇÃO)", dadosAdicionais: "TEste de descrição" },
    // { exame: "10106065 - EXAME DE APTIDÃO FÍSICA E MENTAL, OU EM PORTADORES DE MOBILIDADE REDUZIDA, PARA FINS DE INSCRIÇÃO OU RENOVAÇÃO DA CNH (CARTEIRA NACIONAL DE HABILITAÇÃO)", dadosAdicionais: "novo teste dessa chorsa" },
    // { exame: "10106065 - EXAME DE APTIDÃO FÍSICA E MENTAL, OU EM PORTADORES DE MOBILIDADE REDUZIDA, PARA FINS DE INSCRIÇÃO OU RENOVAÇÃO DA CNH (CARTEIRA NACIONAL DE HABILITAÇÃO)", dadosAdicionais: "vamos lá" },
    // 
    // ],
    // data: "24/06/2020 -20:16:15",
    // emitted: false,
    // nameMedico: 'Glauber de Souza',
    // crm: '0254FGH20RJ'
    // }
    EJS.renderFile(`./views/exames.ejs`, { dadosProcedimentos }, (err, html) => {
        // str => Rendered HTML string
        if (err) {
            console.log(err);
            res.status(400).send({ data: 'ERROR' });
        }
        else {
            console.log('aqui');
            const options = {
                type: 'pdf',
                format: 'A4',
                orientation: 'portrait'
            };
            pdf.create(html, options).toBuffer((err, buffer) => {
                console.log("AQUI 2");
                if (err)
                    return res.status(400).json(err);
                res.end(buffer);
            });
            //res.status(200).send({data: 'success'});
        }
    });
}
exports.emitirExames = emitirExames;
//# sourceMappingURL=emissaoDocs.handler.js.map