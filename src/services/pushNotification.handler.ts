import { messaging } from '../config/pushNotification.service';
import { Request, Response } from 'express';

function sendSinglePush(req: Request, res: Response) {
    let message = {
        notification: {
            title: req.body.title,
            body: req.body.body
        },
        data: {},
        token: req.body.token
    }

    if(req.body.data) {
        message.data = req.body.data
    }

    messaging.send(message).then(_result => {
        res.status(200).send({error: false, data: 'success'});
    }).catch(err => {
        res.status(400).send({error: true, data: err});
    })
}

function sendMultPush(req: Request, res: Response) {
    let message = {
        notification: {
            title: req.body.title,
            body: req.body.body
        },
        data: {
            
        },
        tokens: req.body.tokens
    }

    if(req.body.data) {
        message.data = {click_action:"FCM_PLUGIN_ACTIVITY", ...req.body.data}
    }

    messaging.sendMulticast(message).then(_result => {
        res.status(200).send({error: false, data: 'success'});
    }).catch(err => {
        res.status(400).send({error: true, data: err});
    })
}

export {
    sendSinglePush,
    sendMultPush
}