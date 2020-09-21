import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
export const getUserTurnUpRate = functions.https.onRequest((request: any, response: any) => {
    if (request.method === 'POST' && request.body.uuid) {
        const reqData = request.body;
        const db = admin.firestore();
        const usersColRef = db.collection('futcUsers').where('uuid', "==", reqData.uuid)
        usersColRef.get().then((snap) => {
            snap.forEach((user: any) => {
                if (!user.exists) {
                    response.status(404).send({ status: false, result: 'Requested user not found' });
                } else {
                    const userData: any = user.data()
                    const firstName = userData.first_name;
                    const eventsJoined = userData.events_joined;
                    const eventAttended = userData.events_attended;
                    const turnUpRate = ((eventAttended / eventsJoined) * 100)
                    response.status(200).send({ status: true, result: firstName+" has a "+turnUpRate+"% turnup rate to an event" });
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
