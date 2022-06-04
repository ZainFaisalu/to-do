const firebaseConfig = {
    apiKey: "AIzaSyCfw2XEwI7yhqm5XGPUg78jGaiALyBqdcI",
    authDomain: "to-do-app-153a2.firebaseapp.com",
    databaseURL: "https://to-do-app-153a2-default-rtdb.firebaseio.com",
    projectId: "to-do-app-153a2",
    storageBucket: "to-do-app-153a2.appspot.com",
    messagingSenderId: "676226241251",
    appId: "1:676226241251:web:2bf3b157404cb4d51bebd6",
    measurementId: "G-9Y0DYH91VT"
  };

  const app = initializeApp(firebaseConfig);

  console.log(app)
  function saveData(){
      app.database().ref('/').child("users").push({name:"zain faisal" , pass:1234})
  }


function addItem(){
    var val = document.getElementById('item');
    if(!val.value.trim()){
alert("Enter your task")
    }
    else{

var table = document.getElementById('table');
console.log(table)



var txtTd = document.createElement('td');
var editBtnTd = document.createElement('td');
var delBtnTd = document.createElement('td');

var editBtn = document.createElement("button");
var delBtn = document.createElement("button");



var taskText = document.createTextNode(val.value);
txtTd.appendChild(taskText);

var editBtnTxt = document.createTextNode("Edit");
var delBtnTxt = document.createTextNode("Delete");

editBtn.appendChild(editBtnTxt);
delBtn.appendChild(delBtnTxt);
editBtn.setAttribute('class',"editBtn");
delBtn.setAttribute('class',"delBtn");

editBtn.setAttribute('onclick',"editItem(this)");
delBtn.setAttribute('onclick',"delItem(this)");


editBtnTd.appendChild(editBtn);
delBtnTd.appendChild(delBtn);

txtTd.setAttribute('class',"firstTd");
editBtnTd.setAttribute('class',"secondTd");
delBtnTd.setAttribute('class',"thirdTd");

var tr = document.createElement("tr");
tr.appendChild(txtTd);
tr.appendChild(editBtnTd);
tr.appendChild(delBtnTd);


table.appendChild(tr);

val.value = ""
}
}



function editItem(e){
console.log(e);

var  val  = e.parentNode.previousSibling.innerText;
var uptval = prompt('Enter new Task',val)
if(!uptval.trim()){
    alert("Empty Input, Changes not saved")
}
else{
    e.parentNode.previousSibling.innerText = uptval
}


}

function delItem(e){
    e.parentNode.parentNode.remove();
}

function deleteAll(){
    var table = document.getElementById('table');
    table.innerHTML = ""
}
function getUserData(){
    app.database().ref('/users').on("child_added",function(data){
        console.log(data)
        console.log(data.key)
    })
}