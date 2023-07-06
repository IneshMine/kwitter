// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDEYV3ZU4D_AjbzyU4lgtHYHNAct5CZtE",
  authDomain: "classtest-1ae70.firebaseapp.com",
  projectId: "classtest-1ae70",
  storageBucket: "classtest-1ae70.appspot.com",
  messagingSenderId: "172390795585",
  appId: "1:172390795585:web:d37a5d606111195c2bf9c0",
  measurementId: "G-ZB529S2QM4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHHTML = "Welcome " + user_name + " !";

function send() 
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("msg").value = "";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       firebase_message_id = childKey;
       message_data = childData;
      //Start code click = 'redirectToRoomName(this.id) " + Room_names + "</div><hr>";
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+ name +"<img class = 'user_tick' src ='tick.png'></h4>";
      message_with_tag = "<h4 class = 'message_h4'"+ message +"</h4>";
      like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+ like +" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class= 'glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";


      row =  name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function updateLIke(message_id) 
{
  console.log("clicked on like button - "+ message_id);
  button.id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1 ;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message.id).update({
    like : updated_likes
  });
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
}
         
