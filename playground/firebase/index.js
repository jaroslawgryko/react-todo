import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD6wf0SyYpHxfBZq773mQpvYKbqrQEo6vc",
    authDomain: "todo-app-reactjs.firebaseapp.com",
    databaseURL: "https://todo-app-reactjs.firebaseio.com",
    storageBucket: "todo-app-reactjs.appspot.com",
    messagingSenderId: "590501919852"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Jarek',
        age: 44
    }
});

firebaseRef.update({
    isRunning: false,
    'app/name': 'Todo Application'
})