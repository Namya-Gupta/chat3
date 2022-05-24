
var firebaseConfig = {
      apiKey: "AIzaSyD_HrD8kU5VN0MZSRlLpEILqVVFXFVE1ZU",
      authDomain: "kwitter-41e2f.firebaseapp.com",
      databaseURL: "https://kwitter-41e2f-default-rtdb.firebaseio.com",
      projectId: "kwitter-41e2f",
      storageBucket: "kwitter-41e2f.appspot.com",
      messagingSenderId: "770027629715",
      appId: "1:770027629715:web:a9dc910bc43d32e392f166",
      measurementId: "G-6TN61J2KPT"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      console.log("Room Name - " + room_name);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+ room_name +"</div?<hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
      }

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}