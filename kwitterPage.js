//LINKS FIREBASE
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
    var nome_do_usuario =localStorage.getItem("userName");
    var nome_da_sala=localStorage.getItem("roomName");

    function Enviar() {
      var mensagem=document.getElementById("msg").value;
       firebase.database().ref(nome_da_sala).push({
            name:nome_do_usuario,
            message:mensagem,
            like:0
       });
       mensagem="";
    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
         nome_usuario= messageData["name"];
         mensagem_usuario=messageData["message"];
         curtida=messageData["like"];

         tag_usuario="<h4>"+nome_usuario+"<img src='tick.png' class='user_tick'></h4>";
         tag_mensagem="<h4 class='message_h4'>"+mesagem+"</h4>";
         like_btn="<button class='btn btn-primary' id=' "+firebaseMessageId+"' value='"+curtida+"' onclick='atualisaLike(this.id)'>";
         span="<span class='glyphicon glyphicon-thumbs-up'>like: "+curtida+"</span></button><hr>";
         caixa=tag_usuario+tag_mensagem+like_btn+span;
         document.getElementById("output").innerHTML+=caixa;
//Início do código

//Fim do código
      } });  }); }
getData();

function atualisaLike(id) {
      var id_btn=id;
      var curtidas=document.getElementById(id_btn).value ;
      var atualiza_like=Number(curtidas)+1;
      
      firebase.database().ref(nome_da_sala).child(id).update({
            like:atualiza_like
      });
} 

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location="index.html";
}
