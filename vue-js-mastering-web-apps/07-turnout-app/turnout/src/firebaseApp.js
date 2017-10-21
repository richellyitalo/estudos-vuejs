import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDNTfsXoyygkX5P4MrgINUydFhHgBxMoYU",
    authDomain: "vuejs-authentication.firebaseapp.com",
    databaseURL: "https://vuejs-authentication.firebaseio.com",
    projectId: "vuejs-authentication",
    storageBucket: "vuejs-authentication.appspot.com",
    messagingSenderId: "609847303709"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');