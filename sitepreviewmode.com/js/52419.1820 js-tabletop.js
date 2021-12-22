//* Basic JS 52219.2317   john smilga  *//

// !  Basic default functions

function c (toConsole) {
    console.log(toConsole);
}
function l (toConsole) {
    console.log(toConsole);
}

function a (toAlert) {
    alert(toAlert);
}



// *  Generic practice starts here


// !  Initial Global Variable




// !  Initial Functions





// !  Program Beginning


const result = document.querySelector('#result');

c(result);


const allChildren = result.childNodes;

c(allChildren);













//* my Javascript vocabulary 52419.1424   *//


// ?  DOM
//  document.body.style.backgroundColor = 'blue';
// document.body.style.color = "yellow";
// 
// const h1 = document.getElementById('title');
// 
// h1.style.color = 'red';
// 
// ?  GetElementById
// 
// const h1 = document.getElementById('title');
// 
// document.getElementById('btn').style.backgroundColor = `blue`;
// 
// ?  GetElementByTagName
// 
// document.getElementsByTagName('element');
// 
// const list = document.getElementsByTagName('li');
// 
// c(list.length);
// 
// list[2].style.color = "red";
// 
// ?  For Each
// const betterList = [...list];
// c(betterList);
// betterList.forEach(item, => c(item));
// 
// ?  GetElementsByClassName
// 
// document.getElementsByClassName('class');
// 
// const special = document.getElementsByClassName('special');
// 
// ?  querySelector  /  querySelectorAll
//
//  const result = document.querySelector('#result');
// result.style.backgroundColor = 'blue';
// 
// const lastClassItem = document.querySelector('li:last-child');
// const list = document.querySelectorAll('.special');
// 
// c(list)>
// 
// list.forEach(function(item) {
//     c(item);
//     item.style.color = 'yellow';
// 
// ?  Selecting a Dom Tree
//
// const result = document.querySelector('#result'); // request info
// const allChildren = result.childNodes; // get property that has info
// c(allChildren);
// 






// ?  Forms of Objects
// 
//  Object Literals
//  const person = {};
// 
//  Construction Function
//  const secondPerson = new Object{};
// 
//  Add Property
//  thirdPerson.name = 'john';
//  c(thirdPerson);
// 
//  Access Property
//  c(fourthPerson.name);
// 
//  Modify Property
//  fifthPerson.name = 'bob';
// 
//  Access Property
//  c(sixthPerson['name']);
// 
//  Assign Video
//  let lastName = seventhPerson.lastName;
// 
//  Check If Property Exists
//  let check = 'lastName' in eighthPerson
// 
//  Check if undefined
//  if(ninthPerson.lastName === undefined) {
// 
//   Delete property
//   delete person.name;
// 
//   Create Object
//   const human = {
//     name:"bob",
//     nickname: "zippy",
//     height: 7,
// education: true;
//     sign() {
//       return `Peace sign'
//      }
//     }




// ?  Reduce Array Iterator--down to one value
// 
// const totalOfArray = numbers.reduce(function(accumulator,currentValue) {
//     accumulator = accumulator + currentValue;
// return accumulator;
// },0);
// 
// const distinctKindsArray = fruits.reduce(function(total,fruit) {
//     return total;
// },0);
// c(distinctKindsArray);



// ?  Map--changes items in array, not number of items
// ?  Array Iterator
//   const arrayDoubler = numbers.map(function(numberNeedsDoubling) {
//     return numberNeedsDoubling * 2;
// })
//     c(arrayDoubler);
//  xxx.map(function (name))
//
// const firstAndLast = names.map(function(thisName) {
//     return `${thisName} anderson` 
// })
//     c(firstAndLast);

// ?  Array Iteration
//  xxxx.forEach(function (name ))  
//  

// ?  Filter--changes number of items in array
//  let numbers = [1,2,3,4,5,6,7,8,9,10];
// let even = numbers.filter(isEven)


// ?  Time
//  setTimeout(function() {
//  alert("hellow world")    ;
// },3000); delay start 3 seconds

// ?  Prompt

// function addTask(arr) {
//     let answer = prompt("what is your name");
//     arr.push(answer);


// ?  Global Date
// Date();
//  xxxx.getMonth();
//  xxxx.getDay();
//  xxxx.getSeconds();
//  xxxx.setDate(22);
//  xxxx.setMonth(4);

// ?  Math Object
//   Math.floor(3.665875);  3 rounds down
//   Math.ceil(3.665875);  4 rounds up
//   Math.sqrt(3.665875);  square root
//   Math.PI;  square root
//   Math.min;  returns min in a list
//   Math.max;  returns max in a list
//   Math.random()*4; random = 0-1 decimal

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
//   var++;
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

// ? round off 2 decimals
//  num.toFixed(2)
// console.log("$" + tipMaker(45.45, 15).toFixed(2) + " is your total. Thank you!");

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
//? Array
//
//c(example[1][1]);  refer to 2d arrays
// let fruits = ['apple','banana', 45];
// friends[0] = "Bill";
// let names2 = new Array (1, 40, 60);
//
//  xxxx.unshift('suzy'); inserts in front
//  xxxx.shift(); removes first one
//  xxxx.push('suzy'); inserts as last one
//  xxxx.pop(); removes last one
// xxxx.splice(2,3); delete 2nd position, 3 items
// xxxx.sort();
//  xxxx.length; item amount
//
//?  Array Loops Iteration
// for (i=0;i<friends.length;i++) {
//     c(`your friend is ${friends[i]}`);
// }
// 
// function addTask(arr, item) {
//     arr.push(item);
// }
//?  Array Loops Iteration
// addTask(taskList, "walk Shady");
// addTask(taskList, "make coffee");
//
// function addTask(arr) {
//     let answer = prompt("what is your name");
//     let correct = answer.toLowerCase().trim();
//     if(checkForDupe(arr,correct)) {
//           arr.push(correct);
//     } else {
//         alert('Already exists');

//     }
// }

// function checkForDupe(arr, item) {
//     let exists = false;
//     let index = arr.indexOf(item);// -1 means unique
//     if (index !=-1) {
//         exists = false;
//     }
//     else {
//         exists = true; 
//     }
//     return exists;
// }

// function removeSpecificTask(list) {
//     let answer = prompt('which to remove?');
//     let correct = answer.trim().toLowerCase();

//     let index = list.indexOf(correct):
// }
//
// function removeSpecificTask(list) {
//     let answer = prompt('which to remove?');
//     let correct = answer.trim().toLowerCase();

//     let index = list.indexOf(correct);

// if(!checkForDupe(list,correct)) {
//     let removeTask = list.splice(index,1);
//     c(removeTask);
//     alert(`you removed "${removeTask}`);
// }
// else {
//     c("no such value");
// }
// }
//

// function showTasks(list) {
//     let listValues = `Your list is `;

//     for(let i = 0;i<list.length;i++) {
//         listValues += `"List item ${i+1} : ${list[i]}"`
//     }
//     alert(listValues);
// }

//? String
// let text = "these words";
// Strings are objects.
//
//?  String Object
// xxx.charAt(5);
// xxx.charCodeAt(5);
// xxx.concat; // joins strings
// xxx.endsWith("miller"); boole
// xxx.fromCharCode; unicode—>characters
//  xxx.includes("john");
//  xxx.IndexOf("john")
//  xxx.join(',')
//  xxx.lastIndexOf("john")
// xxx.localeCompare();
// xxx.length;
// xxx.match("john");
// xxx.repeat(6,"john");
//  xxx.replace();
//  xxx.search(); returns position
// xxx.startsWith("john"); boole
//  xxx.slice();
//  xxx.split();
//  xxx.startsWith
//  xxx.substr();
//  xxx.substring();
// xxx.toLowerCase();
//  xxx.toString();
//  xxx.trim(); whitespace;
// xxx.toUpperCase();
//  xxx.valueOf(): returns primitive value
//
// ?  Template Strings
//  `Really Inclusive Quote ${name} Marks!`

//? Number
// let value = 123;

//? Boolean
// let value1 = true;
// let value2 = false;

//? Null
// var = null; it is an object

//? Undefined
// let name;




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
