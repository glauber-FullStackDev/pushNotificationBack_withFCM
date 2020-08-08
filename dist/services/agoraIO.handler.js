"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agora_access_token_1 = require("agora-access-token");
// Rtc Examples
const appID = 'c264d203ccac4eb793b1470c838008c8';
const appCertificate = '3699069ddd114825b397e1ed95a9c0af';
const role = agora_access_token_1.RtcRole.PUBLISHER;
const expirationTimeInSeconds = 36000;
const currentTimestamp = Math.floor(Date.now() / 1000);
const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
// // Build token with user account
// const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
// console.log("Token With UserAccount: " + tokenB);
function getTokenKey(req, res) {
    const channelName = req.body.channelName;
    const uid = req.body.uid;
    const tokenA = agora_access_token_1.RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
    console.log("Token With Integer Number Uid: " + tokenA);
    res.status(200).send({ token: tokenA });
}
exports.getTokenKey = getTokenKey;
//# sourceMappingURL=agoraIO.handler.js.map