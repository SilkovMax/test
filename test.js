'use strict'

var MaksimUser = {};
var Data = "";
let jsonServerResponse = {};
//let url = "http://5.salderey.z8.ru/test/send.php";

function doGetUserData() {
  MaksimUser.name = document.getElementById("firstName").value;
  MaksimUser.phone = document.getElementById("phoneNumber").value;
  MaksimUser.email = document.getElementById("emailUser").value;
  MaksimUser.msg = document.getElementById("textComment").value;
  Data = JSON.stringify(MaksimUser);
  console.log(Data);
  xhr.open("POST", url, true);
  //xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  xhr.send(Data);
}
document.getElementById("button").addEventListener("click", doGetUserData);
//document.getElementById("button").onclick = doGetUserData;


function checkEmail() {

    let email = document.getElementById("emailUser");
    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value!=="" && !filter.test(email.value)) {
      console.log("Введите корректный Email");
    //alert("Введите корректный Email");
      email.focus;
      return false;
    }
}
 document.getElementById("emailUser").addEventListener("blur", checkEmail);

 function checkPhone() {

    let phone = document.getElementById("phoneNumber");
    let filter = /^((\+7|7|8)+([0-9]){10})$/; // regexp для РФ;

    if (phone.value!=="" && !filter.test(phone.value)) {
      console.log("Введите корректный Номер телефона");
    //alert("Введите корректный Номер телефона");
      phone.focus;
      return false;
    }
}
 document.getElementById("phoneNumber").addEventListener("blur", checkPhone);

 let xhr = new XMLHttpRequest();
 let url = "http://5.salderey.z8.ru/test/send.php";

 xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
         let json = JSON.parse(xhr.responseText);
         console.log(json.stat + ", " + json.msg);
     }
 };
 //let data1 = JSON.stringify({});


/* let x = new XMLHttpRequest();
x.onreadystatechange = function (){
  if(this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
x.open("POST", "http://5.salderey.z8.ru/test/send.php", true);
x.send(Data);*/

/*let fname = document.getElementById("firstName").value;
let phoneNumber = document.getElementById("phoneNumber").value;
let emailUser = document.getElementById("emailUser").value;
let textComment = document.getElementById("textComment").value;


let xhr = new XMLHttpRequest();
let body = "name=" + fname + "&phone=" + phoneNumber + "&email=" + emailUser + "&comment=" + textComment;
xhr.open("POST", 'http://5.salderey.z8.ru/test/send.php',true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send(body);
xhr.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);

};
};*/


/* Пример использование XMLHttpRequest
let isJSON = function (str) {
  try {
    JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

let isEmptyObject = function (obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

let checkTransferComplete = function (evt){
  console.log("Request have been uploaded to the server");
}

let doExchange = function (data, url, doAction){
  let xhrEx = new XMLHttpRequest();
  xhrEx.upload.addEventListener("load", checkTransferComplete);
  xhrEx.onreadystatechange = function (){
    //console.log(this.readyState);
    //console.log(this.status);

    if(this.readyState == 4 && this.status == 200) {
      doAction(this);
    }
  };
  xhrEx.open("POST", url, true);
  //console.log(data);
  xhrEx.send(data);
}

let receiveResponse = function (xhr) {
  //console.log("receiveResponse");
  if (xhr.responseText===""){
    console.log("The server response is empty");
  //  setTimeout(receiveResponse, 100);
  }
  if (!isJSON(xhr.responseText)) {
    console.log(xhr.responseText);
  } else {
    //console.log("receiveResponse: " + xhr.responseText);
    jsonServerResponse = JSON.parse(xhr.responseText);
    //console.log(jsonServerResponse);
  }
}

let doSend = function (){
  doGetUserData();
  //validateClientData(jsonClientData);
  jsonServerResponse = {};
  //console.log("doSend: " + jsonServerResponse);
  doExchange(Data,url,receiveResponse);
  //console.log("doSend: " + jsonServerResponse);
  let timeout = 10;
  setTimeout(function processResponse(){
    if (!isEmptyObject(jsonServerResponse)){
      console.log(jsonServerResponse["stat"] + ": " + jsonServerResponse["msg"]);
    } else {
      timeout += timeout;
      console.log(timeout);
      if (timeout<5000) {
        setTimeout(processResponse, timeout);
      }
    }
  },timeout);
}

document.getElementsByName("btnSend")[0].addEventListener("click", doSend);
*/

// Для изучения регулярных выражений
/*let doValidation = function (str) {
  let regexp = "/^[а-я]$/i";
  if (!regexp.exec(str)) {
    return false;
  }
  return true;
}


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

console.log( validateEmail(document.getElementById("emailUser").value) ); // false
document.getElementById("button").addEventListener("click", validateEmail);
*/


//document.getElementById("button").addEventListener("click", doGetUserData);
