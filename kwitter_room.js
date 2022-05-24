// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7AlUJsR4XwxmhJKxAGMTNtwvlNqmD_JE",
    authDomain: "lets-chat-app-5169d.firebaseapp.com",
    databaseURL: "https://lets-chat-app-5169d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-5169d",
    storageBucket: "lets-chat-app-5169d.appspot.com",
    messagingSenderId: "575680436110",
    appId: "1:575680436110:web:558a3fdaf6fe53f0f036df"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
