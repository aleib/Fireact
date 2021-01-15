import firebase from "firebase/app";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyDDAXqyX8BWow3Whb1JlB02YWa0cf-TrEk",
  authDomain: "react-firebase-push-ef492.firebaseapp.com",
  projectId: "react-firebase-push-ef492",
  storageBucket: "react-firebase-push-ef492.appspot.com",
  messagingSenderId: "923411168527",
  appId: "1:923411168527:web:b4a0b85f58f5a8806a927a",
  measurementId: "G-X5J49PETY5",
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .getToken()
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
