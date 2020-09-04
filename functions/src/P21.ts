import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const P2I = functions.https.onRequest((request, response) => {
  if (request.method === 'POST') {
    const reqData = request.body;
    if (reqData.epidemic && reqData.questionnaire && reqData.user) {
      const userQuestionnaire = reqData.questionnaire;
      const userInfo = reqData.user;

      const db = admin.firestore();
      const epidemicDocRef = db.collection('epidemics').doc(reqData.epidemic.id);

      epidemicDocRef.get().then((doc) => {
        if (doc.exists) {
          const dbEpidemic = doc.data();

          const p2iScore = calculateP2IScore(dbEpidemic, userQuestionnaire);
          const locationCriticalness = identifyLocationCriticalness(dbEpidemic, userInfo);
          let isUserCritical: boolean;
          (p2iScore > 70) ? isUserCritical = true : isUserCritical = false;

          // Send response after calculating the P2I score
          response.status(200).send("P2I Score = " + p2iScore + "<br> Probability of virus infection = " + isUserCritical + "<br> Proximity threat = " + locationCriticalness);
        } else {
          // In case of missing epidemic data
          response.status(404).send('Request not found');
        }
      }).catch(error => {
        // In case of fetching epidemic data
        console.log("Failed to retrieve document. Error => " + error);
        response.status(500).send('Server error');
      });
    } else {
      // In case of missing required data
      response.status(400).send('Bad request');
    }
  } else {
    // In case of unauthorized request type
    response.status(401).send('Unauthorized request');
  }
});


function calculateP2IScore(dbEpidemic: any, userQuestionnaire: any) {
  const dbQuestionnaire: [] = dbEpidemic.questionnaire.questions;
  let p2iScore = 0;
  dbQuestionnaire.forEach((dbQuestion: any) => {
    const dbQuestionOptions: [] = dbQuestion.options;
    // Reading data from the user submitted questionnaire
    userQuestionnaire.questions.forEach((userQuestion: any) => {
      if (userQuestion.id === dbQuestion.id) {
        // Getting option weight from firesore
        dbQuestionOptions.forEach((dbOption: any) => {
          if (dbOption.id === userQuestion.option) {
            p2iScore += ((dbOption.weight / 100) * dbQuestion.weight);
          }
        })
      }
    });
  });
  return p2iScore;
};

function identifyLocationCriticalness(dbEpidemic: any, userInfo: any): boolean {
  const dbHotZones: [] = dbEpidemic.hotZones;
  let isLocationMarked: boolean = false;
  dbHotZones.forEach((dbHotZone: any) => {
    if (dbHotZone.city.id === userInfo.addressInfo.city.id) {
      isLocationMarked = true;
    };
  });
  // return false;
  return false;
}