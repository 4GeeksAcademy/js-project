import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let who = ['The dog', 'My grandma', 'The mailman', 'My bird','My rother'];

let action = ['ate', 'peed', 'crushed', 'broke', 'stole'];

let what = ['my homework', 'my phone', 'the car', 'the oven','my spoon'];

let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let whatrandom = Math.floor(Math.random()* what.length);

  let mystring = [""];

  let thewho = who[whatrandom];

  let theaction = action[whatrandom];

  let thewhat = what[whatrandom];

  let thewhen = when[whatrandom];

  mystring = thewho+" "+theaction+" "+thewhat+" "+thewhen

  document.getElementById("excusa").innerHTML = mystring;

  console.log(mystring);
}
