importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js");

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
firebase.messaging().setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: "/firebase-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("notificationclick", (event) => {
  console.log(event);
  return event;
});
