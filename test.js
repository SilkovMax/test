'use strict'

var a = 5; // Марк: добавил новую переменную
var hello = "Привет друг"
var userName = prompt(hello + ", как тебя зовут?");
var ageUser = prompt(hello + ", сколько тебе лет?");
if (isNaN(ageUser)) {
  alert( "Строка преобразовалась в NaN. Не число" );
  prompt(hello + ", сколько тебе лет?");
} else {
  alert( "Число" );
}
alert("Тебя зовут " + userName + " и тебе " + ageUser + " лет")
alert(a+ageUser)
alert(hello+a)

var user(name: userName; age: ageUser)

/*console.log("Привет!");
alert("Hello world!")
document.write("SilkovMaksim")*/
