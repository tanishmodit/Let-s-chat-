
var  firebaseConfig = {
      apiKey: "AIzaSyCd1BfPtR9DFs7CIXtqAHFAtJo4wx7lrRU",
      authDomain: "let-s-chat-b96f8.firebaseapp.com",
      databaseURL: "https://let-s-chat-b96f8-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-b96f8",
      storageBucket: "let-s-chat-b96f8.appspot.com",
      messagingSenderId: "404382001518",
      appId: "1:404382001518:web:fe10f43b514aacd9ecf97f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
           
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= " Welcome "+ user_name +"!"
    
   function addroom(){
      room_name=document.getElementById("room_name").value;
      console.log(room_name)
      firebase.database().ref("/").child(room_name).update({
            purpose:"Hi I am Tanish Welcome To The Room"
            
      })

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"

   }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room_name"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'> #"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();
function redirect(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"

}

function logout(){
 
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
}
