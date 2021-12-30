function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
}

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