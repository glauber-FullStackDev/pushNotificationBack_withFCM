"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const onDoctKey_json_1 = __importDefault(require("../keys/onDoctKey.json"));
const svc = onDoctKey_json_1.default;
const adm = admin.initializeApp({
    credential: admin.credential.cert(svc),
    databaseURL: "https://ondoct-dev.firebaseio.com"
});
const messaging = adm.messaging();
exports.messaging = messaging;
const increment = (points) => admin.firestore.FieldValue.increment(points);
exports.increment = increment;
//# sourceMappingURL=pushNotification.service.js.map