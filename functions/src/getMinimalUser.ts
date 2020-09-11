import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { getMinimalUserInfo } from './utils/objectUtils';

export const dbGetMinimalUserInfo = functions.https.onRequest((request, response) => {
  if (request.method === 'POST' && request.body.email) {
    const reqData = request.body;
    const db = admin.firestore();
    const usersColRef = db.collection('users').where('email', "==", reqData.email)
    usersColRef.get().then((snap) => {
      snap.forEach((user: any) => {
        if (!user.exists) {
          response.status(404).send({ status: false, result: 'Requested user not found' });
        } else {
          response.status(200).send({ status: true, result: getMinimalUserInfo(user.data()) });
        }
      })
    }).catch(error => {
      console.log("Failed to retrieve document. Error => " + error);
      response.status(500).send({ status: false, result: 'Server error' });
    })
  } else {
    response.status(401).send({ status: false, result: 'Unauthorized request' });
  }
})
