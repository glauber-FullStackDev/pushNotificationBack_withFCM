"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pushNotification_service_1 = require("../config/pushNotification.service");
function sendSinglePush(req, res) {
    let message = {
        notification: {
            title: req.body.title,
            body: req.body.body
        },
        data: {},
        token: req.body.token
    };
    if (req.body.data) {
        message.data = req.body.data;
    }
    pushNotification_service_1.messaging.send(message).then(_result => {
        res.status(200).send({ error: false, data: 'success' });
    }).catch(err => {
        res.status(400).send({ error: true, data: err });
    });
}
exports.sendSinglePush = sendSinglePush;
function sendMultPush(req, res) {
    let message = {
        notification: {
            title: req.body.title,
            body: req.body.body
        },
        data: {},
        tokens: req.body.tokens
    };
    if (req.body.data) {
        message.data = Object.assign({ click_action: "FCM_PLUGIN_ACTIVITY" }, req.body.data);
    }
    pushNotification_service_1.messaging.sendMulticast(message).then(_result => {
        res.status(200).send({ error: false, data: 'success' });
    }).catch(err => {
        res.status(400).send({ error: true, data: err });
    });
}
exports.sendMultPush = sendMultPush;
//# sourceMappingURL=pushNotification.handler.js.map