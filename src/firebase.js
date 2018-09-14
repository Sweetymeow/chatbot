// src/firebase.js
import firebase from 'firebase';
// import firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';

const config = {
	apiKey: "AIzaSyBIUNLzh2bWbycTFAGComB8SmDEHJaPT2w",
    authDomain: "greeting-bot-ljl.firebaseapp.com",
    databaseURL: "https://greeting-bot-ljl.firebaseio.com",
    projectId: "greeting-bot-ljl",
    storageBucket: "greeting-bot-ljl.appspot.com",
    messagingSenderId: "80731576429"
};

firebase.initializeApp(config);

export default firebase;
