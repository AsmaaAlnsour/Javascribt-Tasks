function counter(){
for (let i = 0; i < 5; i++) {
    console.log("The number is " + i + "\n");
  }
}

counter()

function person(){
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
 console.log( txt += person[x] + " ");
}}
person()

function numbers(){
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    console.log( txt += numbers[x] + " "); 
}}
numbers()


// function number(){
// const number = [45, 4, 9, 16, 25];

// let txt = "";
// number.forEach(myFunction);
// // document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//     console.log(txt += value + " "); 
// }}
// number()

