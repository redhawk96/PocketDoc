import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { getMinimalEpidemicProfile } from './utils/epidemicProfileUtils';

export const dbGetEpidemicInfo = functions.https.onRequest((request, response) => {
  if (request.method === 'GET') {
    const db = admin.firestore();
    const epidemicColRef = db.collection('epidemics').where('disabled', "==", false);
    // tslint:disable-next-line: no-floating-promises
    epidemicColRef.get().then((snap) => {
      snap.forEach((doc) => {
        const dbEpidemic = doc.data();
        response.status(200).send(getMinimalEpidemicProfile(dbEpidemic));
      })
    }).catch(error => {
      response.status(500).send('Server error');
    })
  } else {
    response.status(401).send('Unauthorized request');
  }
})
