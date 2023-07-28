
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyABJSj85N1O9IUm4d8zAitINsiw3dambbQ",
  authDomain: "twitter-dc907.firebaseapp.com",
  databaseURL: "https://twitter-dc907-default-rtdb.firebaseio.com",
  projectId: "twitter-dc907",
  storageBucket: "twitter-dc907.appspot.com",
  messagingSenderId: "735523482736",
  appId: "1:735523482736:web:9e5d7b842be33fdf8198b5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var nome_do_usuario=localStorage.getItem("userName");
document.getElementById("userName").innerHTML="bem vindo(a) "+nome_do_usuario;
function addRoom()
{
  var roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       var roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      var row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
