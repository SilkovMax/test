'use strict'

var MaksimUser = {};
var Data = "";
let jsonServerResponse = {};
let url = "http://5.salderey.z8.ru/test/send.php";

function doGetUserData() {
  MaksimUser.fname = document.getElementById("firstName").value;
  MaksimUser.phoneNumber = document.getElementById("phoneNumber").value;
  MaksimUser.emailUser = document.getElementById("emailUser").value;
  MaksimUser.textComment = document.getElementById("textComment").value;
  Data = JSON.stringify(MaksimUser);
  //console.log(Data);
}

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
