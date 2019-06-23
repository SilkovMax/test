'use strict'

/*
var hello = "Привет друг"
var userName = prompt(hello + ", как тебя зовут?");
var ageUser = prompt(hello + ", сколько тебе лет?");

var limit = 2;
var i = 0;
while (isNaN(ageUser) && i<limit) {
  ageUser = prompt(hello + ", сколько тебе лет?" + " Введите число.");
  i++;
}
if (!isNaN(ageUser)) {
  alert("Тебя зовут " + userName + " и тебе " + ageUser + " лет");
} else {
   window.location.replace("http://google.com/");
}
*/
/*
var i = 5;
var a = 0;
i = a++;
console.log(i);
console.log(a);
*/
//alert(a+ageUser);
//alert(hello+a);
/*
var user = {
  name: userName,
  age: ageUser,
  isMale: true
}
console.log(user);
*/
/*console.log("Привет!");
alert("Hello world!")
document.write("SilkovMaksim")*/

/*var a = [5,54,2];
var b = ['d','h', 5, 78];
var c = ['String1', 'String2'];
//console.log(b[4]);
for (var i = 0; i<a.length; i++) {
  console.log(a[i]);
}*/
//var Fullname = null;

/*var a = [[5,7,6], [4,9,2], [3,9,0]];

var Users = {
  Maxim: { height: 187, weight: 80},
  Alex: { height: 165, weight: 67},
  Robert: { height: 178, weight: 87},
  showUser: function() { return this["Maxim"]; }
};
console.log(Users.showUser());
//console.log(a[0][0]);
//console.log(Users);

/*var x;
for (x in Users) {
 console.log(Users[x]);
}
Users.Andrey = { height: 167, weight: 80 };
console.log(Users);

function doInputToFullname() {
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;

  document.getElementById("str").innerHTML="Вас зовут: "+fName + " " + lName;
  return "Вас зовут: "+fName + " " + lName;
};

//document.getElementById("firstName").onchange = function() { console.log(Fullname()); };
//document.getElementById("firstName").onchange = function() { };

/*function doSwitch() {
  if (document.getElementById("flag").checked) {
    document.getElementById("firstName").addEventListener("input", doInputToFullname);
    document.getElementById("lastName").addEventListener("input", doInputToFullname);
  } else {
    document.getElementById("firstName").removeEventListener("input", doInputToFullname);
    document.getElementById("lastName").removeEventListener("input", doInputToFullname);
  }
};

document.getElementById("firstName").addEventListener("input", doInputToFullname);
document.getElementById("lastName").addEventListener("input", doInputToFullname);
document.getElementById("flag").addEventListener("change", doSwitch);*/



var MaksimUser = {};

function doGetUserData() {
  MaksimUser.fname = document.getElementById("firstName").value;

  MaksimUser.lname = document.getElementById("lastName").value;
  MaksimUser.age = document.getElementById("ageUser").value;
  MaksimUser.weight = document.getElementById("weightUser").value;
  console.log(JSON.stringify(MaksimUser));
};

/*

  MaksimUser.phoneNumber = document.getElementById("phoneNumber").value;
  MaksimUser.emailUser = document.getElementById("emailUser").value;
  MaksimUser.textComment = document.getElementById("textComment").value;
  console.log(JSON.stringify(MaksimUser));
  }

  //document.getElementById("button").addEventListener("Click", doGetUserData);
  document.getElementById("button").onclick = doGetUserData;
/*console.log(MaksimUser)


var MaksimUserR = {
  fname: "Maksim",
  lname: "Silkov",
  age: 27,
  weight: 79


};
*/
document.getElementById("butt").addEventListener("click", doGetUserData);

//console.log(JSON.stringify(MaksimUserR));


/*function consoleFullname(fName, lName) {
var fName = document.getElementById("firstName").value;
var lName = document.getElementById("lastName").value;

	return fName + lName;
}
console.log(consoleFullname());*/


/*var arr=[];
for ( var i=0;i<10;i++){
	arr.push(Math.round( Math.random()*100));
	}
console.log(arr);
console.log(Math.min(...arr));
console.log(Math.max(...arr));
console.log(arr.sort(function(a,b) { return b - a } ))
//alert(arr.sort( function(a,b) {
//	return b-a
//});*/

/*function ToFullName () {
	var fName = document.getElementById("firstName").value;
	var lName = document.getElementById("lastName").value;
	document.getElementById("str").innerHTML= "Your name: " + fName + " " + lName;
	return "Your name " + fName + " " + lName;
};
document.getElementById("firstName").addEventListener("input", ToFullName);
document.getElementById("lastName").addEventListener("input", ToFullName);

document.getElementById("butt").addEventListener("click", function() {
	document.getElementById("firstName").removeEventListener("input", ToFullName);
	document.getElementById("lastName").removeEventListener("input", ToFullName);
});*/
