//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyC1OIvTWQiDDd8lzhLtsgpe3EhXnd5AH70",
    authDomain: "chat-web-app-c07e3.firebaseapp.com",
    databaseURL: "https://chat-web-app-c07e3-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-c07e3",
    storageBucket: "chat-web-app-c07e3.appspot.com",
    messagingSenderId: "966861471647",
    appId: "1:966861471647:web:6221b2d6d7588e2103c7aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() { firebase.database().ref("/"+name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function logout(){
 window.location="index.html";
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
}
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
 like:0,
 message:msg,
 user_name:user_name
});
}