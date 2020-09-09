import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { extractUserInfo } from './utils/objectUtils';

export const dbCreateUser = functions.https.onRequest((request, response) => {
  if (request.method === 'POST') {
    const reqData = request.body;
    if (validateFields(reqData)) {
      const db = admin.firestore();
      db.collection('users').doc(reqData.email).set(extractUserInfo(reqData)).then(() => {
        response.status(200).send({ status: true, result: 'Your medical profile has been created, We are excited to have you here with us' });
      }).catch(error => {
        console.log("Failed to create document. Error => " + error);
        response.status(500).send({ status: false, result: error });
      })
    } else {
      // In case of missing required data
      response.status(400).send({ status: false, result: 'Bad reuest' });
    }
  } else {
    // In case of unauthorized request type
    response.status(400).send({ status: false, result: 'Unauthorized request' });
  }
});


function validateFields(reqData: any) {
  return (reqData.uid
    && reqData.email
    && reqData.firstName
    && reqData.lastName
    && reqData.dob
    && reqData.nic
    && reqData.city
    && reqData.phoneNumber)
}
