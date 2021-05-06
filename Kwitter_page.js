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
console.log(firebase_message_id);
console.log(message_data);

person_name=message_data['user_name'];
message=message_data['message'];
like=message_data['like'];

name_tag="<h4>"+person_name+"</h4>"+"<img src='tick.png' class='user_tick'>";
message_tag="<h4>"+message+"</h4>";
like_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
thumbs_up_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_tag+message_tag+like_tag+thumbs_up_tag;
document.getElementById("output").innerHTML+=row;
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
      firebase.database().ref(room_name).update({
      like:0,
      message:msg,
      user_name:user_name
});
document.getElementById("msg").innerHTML="";
}

function update_like(message_id){
      console.log(message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
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