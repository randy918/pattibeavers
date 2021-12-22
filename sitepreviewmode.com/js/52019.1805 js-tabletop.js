//* Basic JS 51919.1207  john smilga  *//

function displayDayWeek(day){
    switch(day)
}







// console.log(personName)


// console.log(typeof person);

//* my Javascript vocabulary 51919.1242  *//

// ? Conditionals
//?
//  if (x>y) {
//  if (x>y) {
//      misc
//  }
//      else {
//  }
//
//  if (x==y) {
//  if (x!=y) {
//  if (x===y) {  //  if string or num are equivalents
//  if (<=) {
//  if >= {
//
// if (x>y) {
// }
// else if (z>y) {
// }
// else {
// }
// || equals OR
//  && equal AND
//
//  Switch
//  switch (dice)  {
//     case 1:
//     log;
//     case 2:
//     log;
//     default: 
//     log;
// }
//
//  While Loop
//
// while (var>10) {
//     var--;
// }
//
//  Do While
//  
//  do {
//    activity;
      var++;
// } while
// 
//  Ternary
//  condition ? (runs if true) : (runs if false);
// 
// For Loop
//
// for(i=0;i<10;i++) {
//      activity;
// }



//? Truthy / Falsie:  "", '', ``, 0, NaN, false, null, undefined


// ? Alerts
// alert("abc");

// ? Console
// console.log("abc");
// console.log(var,var,var);

// ? Const
// const abc = "name";

// ? Document
// document.write("abc");

//? Data Types
//?
//? String
// let text = "these words";

//? Number
// let value = 123;

//? Boolean
// let value1 = true;
// let value2 = false;

//? Null
// var = null; it is an object

//? Undefined
// let name;

//? Array
// let fruits = ['apple','banana', 45];
// friends[0] = "Bill";

//? Function
// let code = function code () {
// console.log("Hello World")
// }
//
// function hello () {
//  console.log("Hello")
// }
//
// hello();
//
//function add(num1,num2) {
//  let sum = num1 + num2;
//  return sum;
//}

//? Objects
// let person =  {
//    name :"John",
//    lastName : "Pepper",      
// }

// let person =  {
//     name: "John",
//     last: "Wilson",
//     age: 25,
//     fullName:function () {
//         console.log(person.name + " " + person.last)
//     }
// }

// person.fullName();

//? Let
// let abc = "name";
// let abc = "name" + "etc";
// let abc = number;
// let sum = number + number2;
// let sub = number - number2;
// let ans = number * number2;
// let ans = number / number2;
// let ans = number % number2;  //  remainder integer
// let add = number += 10;
// let sub = number -= 10;
// let ans = number *= 10;
// let ans = number /= 10;
// let add ++; // plus 1;
// let sub --; // minus 1;




//* This is sample Read from Google Sheet notation (unsuccessful 51919.1245 )*//

// function init() {
//  Tabletop.init( { 1kMXjHMrh6xYc2_BNcGL8YP0KINsJHUEo7xN6o0Gq2Xw: ‘https://docs.google.com/spreadsheets/d/0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE/pubhtml',
//  callback: function(data, tabletop) {
//  console.log(data)
//  },
//  simpleSheet: true } )
// }
// window.addEventListener(‘DOMContentLoaded’, init)
// comment

//* This is sample Greensock notation *//
// TweenMax.from('.logo', 8, {opacity:0});
// TweenMax.from('.', 8, {scale:0.5});
// TweenMax.from('p', 4, { scale: 0.5 });
// TweenMax.from('h1', 8, { opacity: 0, scale: 0.5 });

// TweenMax.from('.background', 4, {opacity:0, scale:0.8, delay:1});
// TweenMax.from('h1', 12, {opacity:0, scale:6, delay:1});

// var timeline = new TimelineMax();
// timeline.from('img', 1.5, {scale:6});
// timeline.from('h1', 1.5, {opacity:0, scale:2});

// timeline.from('.logo', 1.5, {scale:6, ease:Bounce.easeOut});
// timeline.from('h1', .7, {opacity:0, scale:2, ease: Back.easeOut.config(1)});
// timeline.from(graph, 2.5, { ease: Back.easeOut.config(1.7), y: -500 });

//* canvas demo js 51619.1812 *//

// const demoCanvas = document.getElementById('canvas-demo').getContext('2d');

// window.onload = function() {

//     demoCanvas.beginPath(); //begin draw sequence

//     var linearGrad = demoCanvas.createLinearGradient(5,5,100,5);
//     linearGrad.addColorStop(0, "blue");
//     linearGrad.addColorStop(.5, "green");
//     linearGrad.addColorStop(1, "red");
//     demoCanvas.strokeStyle=linearGrad;
//     demoCanvas.lineWidth=50;
//     demoCanvas.moveTo(5,5);
//     demoCanvas.lineTo(100,5);
//     demoCanvas.stroke();// change strokeStyle(l10) to fillStyle(l10)
//     and stroke() to fill(). Then, change lineTo(100,5) to rect(5,5,95,50).
//     Results should be almost same.

//     demoCanvas.closePath();  //close draw sequence

// }
