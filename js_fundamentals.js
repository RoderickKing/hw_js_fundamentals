// 1.1 10
console.log(7 + 3);

//1.2 1

console.log(9 % 2);

//1.3  Number
console.log(typeof(42));

//1.4 True
console.log(typeof(2) === typeof(9.24));

//1.5 Infinity - but I initially thought NaN before testing...
console.log(42 / 0);

// 1.6 NaN

console.log(9 / "player1");

//1.7 True
console.log(NaN === NaN);

//1.8  Number

console.log(typeof(NaN));

//1.9  Number
console.log(typeof parseInt("42"));

//1.10 "Brendan Eich"

console.log("Brendan" + " Eich");

//1.11 "Brendan Eich"

var firstName = "Brendan";
var lastName = "Eich";
console.log(firstName + " " + lastName);


//1.12 8
var phoneNumber = "08798976";
console.log(phoneNumber.length);

//1.13 True

console.log("Brendan" === "Brendan");

//1.14 False
var fName;

if(fName) console.log(`First name is ${fName}`);

//1.15  Yes.
var name = "";

if(name) console.log(`First name is ${name}`);


//Exercise 2 :

console.log( "Exercise 2 ");

var score = 10;

switch (score) {
case 10:
  console.log("Distinction");
  break;
case 9:
  console.log("Pass");
  break;

case 8:
  console.log("Pass");
  break;

default:
  console.log("Fail");
  break;
}

//Exercise 3


// Lattes cost £2.65 each
console.log("Exercise 3");
var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];

for (var i = 0; i < coffees.length; i++) {
  console.log(coffees[i].type, ' cost £', coffees[i].price, ' each');
}

//Exercise 4
var currentPlayer = 'x';
var grid = [['x','x','x'], ['o', null, 'o'], [null, null, null]];

var winner = false;
console.log(grid[0][0]);

if  ((grid[0][0] === currentPlayer ) && (grid[1][0] === currentPlayer ) &&  ( grid[2][0] === currentPlayer)) {
  winner = true;
}
if ((grid[0][0] === currentPlayer ) && (grid[1][1] === currentPlayer ) &&  ( grid[2][2] === currentPlayer)) {
  winner = true;
}
 if ((grid[0][0] === currentPlayer ) && (grid[0][1] === currentPlayer ) &&  ( grid[0][2] = currentPlayer)) {
   winner = true;
 }
 if ((grid[0][1] === currentPlayer ) && (grid[1][1] === currentPlayer ) &&  ( grid[2][1] = currentPlayer)){
   winner = true;
 }
 if ((grid[0][2] === currentPlayer ) && (grid[1][2] === currentPlayer ) &&  ( grid[2][2] = currentPlayer)) {
   winner = true;
 }
 if ((grid[0][2] === currentPlayer ) && (grid[1][1] === currentPlayer ) &&  ( grid[2][0] = currentPlayer)) {
   winner = true;
 }
 if ((grid[1][0] === currentPlayer ) && (grid[1][1] === currentPlayer ) &&  ( grid[1][2] = currentPlayer)) {
   winner = true;
 }
 if ((grid[2][0] === currentPlayer ) && (grid[2][1] === currentPlayer ) &&  ( grid[2][2] = currentPlayer)){
   winner = true;
 }
if (winner) {
      console.log("Current player is a winner");
} else {console.log("no winner !"); }
