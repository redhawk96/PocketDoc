// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
admin.initializeApp(firebaseConfig);

export { P2I } from './P21';
export { dbGetEpidemicInfo } from './getEpidemicInfo';
