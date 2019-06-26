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
let email = document.getElementById("emailUser").value;
let phone = document.getElementById("phoneNumber").value;

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
 
console.log( validateEmail(document.getElementById("emailUser").value) ); // false
document.getElementById("button").addEventListener("click", validateEmail);

/*let x = new XMLHttpRequest();
x.onreadystatechange = function (){
  if(this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
x.open("POST", "https://wixihafi.myhostpoint.ch/send.php", true);
x.send(Data);

document.getElementById("button").addEventListener("click", doGetUserData);*/
