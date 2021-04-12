
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  console.log(Room_names)
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function logout(){
    window.location="index.html";
    localStorage.removeItem("user_name");
}
function  addRoom(){
  name_room=document.getElementById("room_name").value;
  firebase.database().ref("/").child(name_room).update({
      Hobby:"Gaming"
  });
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  }