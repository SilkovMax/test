'use strict'

var MaksimUser = {};
var Data = "";

function doGetUserData() {
  MaksimUser.fname = document.getElementById("firstName").value;
  MaksimUser.phoneNumber = document.getElementById("phoneNumber").value;
  MaksimUser.emailUser = document.getElementById("emailUser").value;
  MaksimUser.textComment = document.getElementById("textComment").value;
  Data = JSON.stringify(MaksimUser);
  console.log(Data);
}

let x = new XMLHttpRequest();
x.onreadystatechange = function (){
  if(this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
x.open("POST", "http://localhost:8080/send.php", true);
x.send(Data);

document.getElementById("button").addEventListener("click", doGetUserData);
