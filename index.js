// String 1
console.log('Hello World');

let text = 'Hello World';

// String 2
document.getElementById('demo').innerHTML = text.length;

// String 3
function myFunction() {
    let welcome = document.getElementById('welcome').innerHTML;
    document.getElementById('welcome').innerHTML =
    welcome.replace("blank","Task 2");
  }

// String 4
function thatFunction() {
    let uppercase = document.getElementById('uppercase').innerHTML ;
    document.getElementById('uppercase').innerHTML = uppercase.toUpperCase();
}

// String 5
let concat1 = 'Hello';
let concat2 = 'World!';
let concat3 = concat1.concat(' ',concat2);
document.getElementById('concat').innerHTML = concat3;

//Number 1
let k = 7654;
document.getElementById('tostring').innerHTML =
    k.toString() + '<br>' +
    (7654).toString() + '<br>' +
    (7000 + 654).toString();

//Number 2
let y = 1.234;
document.getElementById('toexponential').innerHTML =
  y.toExponential(0) + '<br>' + 
  y.toExponential(2) + '<br>' + 
  y.toExponential(4) + '<br>' + 
  y.toExponential(6);

//Number 3
let u = 1.234;
document.getElementById('tofixed').innerHTML =
  u.toFixed(0) + '<br>' +
  u.toFixed(2) + '<br>' +
  u.toFixed(4) + '<br>' +
  u.toFixed(6);

//Number 4 & Date 1 - Seems new Date('**/**/****') only supports mm/dd/yyyy format and variations of that
let x = new Date('08/12/1995');
document.getElementById('numberdate').innerHTML = Number(x);

//Number 5 - converting a variable to a number
document.getElementById('convert').innerHTML = 
  Number(true) + '<br>' +
  Number(false);

//Array 1 - Number type
const fruits = ['Grape', 'Pineapple', 'Blackberry', 'Mango'];
let size = fruits.length;
document.getElementById('length').innerHTML = size;

//Array 2 - String type
const veg = ['Grape', ' Pineapple', ' Blackberry', ' Mango'];
document.getElementById('arraystring').innerHTML = veg.toString();

//Array 3 - Number type
const animals = ['Koala', ' Kangaroo', ' Possum', ' Dingo'];
document.getElementById('animal1').innerHTML = animals;
animals[0] = 'Kookaburra';
document.getElementById('animal2').innerHTML = animals;

//Array 4 - String type
const myArray = ['Peter', ' Melissa', ' Steve'];
const myStaff = myArray.concat(' Ian'); 
document.getElementById('staff').innerHTML = myStaff;

//Array 5 - Number type
const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();
document.getElementById('flatnum').innerHTML = newArr;

//Date 2
const d = new Date();
document.getElementById('currdate').innerHTML = d;

//Date 3
const a = new Date('2023-01-31');
document.getElementById('strdate').innerHTML = a;

//Date 4
const b = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById('specdate').innerHTML = b;

//Date 5
const c = new Date(85, 11, 24);
document.getElementById('prevcent').innerHTML = c;