﻿'use strict'

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
  butt.onclick = function Fullname() {
		var fName = document.getElementById("firstName").value;
		var lName = document.getElementById("lastName").value;

		
		
		document.getElementById("str").innerHTML="Вас зовут: "+fName + " " + lName;
		//document.getElementById("str")=console.log(Fullname());
};

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
