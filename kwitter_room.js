// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDWCoeSxHpNAFbc10QCSFGqW9xX2cNjTPk",
      authDomain: "class95-45875.firebaseapp.com",
      databaseURL: "https://class95-45875-default-rtdb.firebaseio.com",
      projectId: "class95-45875",
      storageBucket: "class95-45875.appspot.com",
      messagingSenderId: "688621688815",
      appId: "1:688621688815:web:b68f83540d5b59b185c81a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
    
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });
}
getData();
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}