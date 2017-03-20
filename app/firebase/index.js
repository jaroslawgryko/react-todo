import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyD6wf0SyYpHxfBZq773mQpvYKbqrQEo6vc",
        authDomain: "todo-app-reactjs.firebaseapp.com",
        databaseURL: "https://todo-app-reactjs.firebaseio.com",
        storageBucket: "todo-app-reactjs.appspot.com",
        messagingSenderId: "590501919852"
    };
    firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;