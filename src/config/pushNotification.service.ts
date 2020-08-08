import * as admin from 'firebase-admin';

import serviceAccount from "../keys/onDoctKey.json";
const svc: any = serviceAccount
const adm = admin.initializeApp({
    credential: admin.credential.cert(svc),
    databaseURL: "https://ondoct-dev.firebaseio.com"
  });

const messaging = adm.messaging();
const increment = (points: number) => admin.firestore.FieldValue.increment(points)

export {
    messaging,
    increment
}