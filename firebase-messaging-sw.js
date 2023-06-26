// Scripts for firebase and firebase messaging
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// const firebaseConfig = {
//     apiKey: "AIzaSyDSDOuxussYdzTpC38NdAQXgeMenH6STb0",
//     authDomain: "uverlist-1555022012941.firebaseapp.com",
//     databaseURL: "https://uverlist-1555022012941.firebaseio.com",
//     projectId: "uverlist-1555022012941",
//     storageBucket: "uverlist-1555022012941.appspot.com",
//     messagingSenderId: "1014674398298",
//     appId: "1:1014674398298:web:fdbd905eef032e18448c63"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);
 
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDSDOuxussYdzTpC38NdAQXgeMenH6STb0",
    authDomain: "uverlist-1555022012941.firebaseapp.com",
    databaseURL: "https://uverlist-1555022012941.firebaseio.com",
    projectId: "uverlist-1555022012941",
    storageBucket: "uverlist-1555022012941.appspot.com",
    messagingSenderId: "1014674398298",
    appId: "1:1014674398298:web:fdbd905eef032e18448c63"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});