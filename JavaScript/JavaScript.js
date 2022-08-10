// const price1 = 5;
// const price2 = 6;
// let total = price1 + price2;
// document.getElementById("demo").innerHTML =
// "The total is: " + total;







// const pi = 3.14;
// let person = "John Doe";
// let answer = 'Yes I am!';

// document.getElementById("Demo").innerHTML =
// pi + "<br>" + person + "<br>" + answer;



// var x=10 ;
// console.log(x);


// console.log(y);
// var y=10 ;


// var z="asmaa" ;
// console.log(z);


// var orangeAcademy="code" ;
// console.log(orangeAcademy);

// var a=[1 , 2 , 5 , 9 , 8 , 1] ;
// console.log(a[5]);

// var g= {
// size : "xl" ,
// name : "jone",
// a :[1 , 2 , 5 , 9 , 8 , 1],
// age:15,


// };
// console.log(g.a[5]);


// console.log()

  //Array
let myFriend = [ "Asmaa" , "Lara" , "sara" ,"Razan"]

console.log(myFriend.length) ; //4

myFriend[3] = "Sozan"; 
console.log(myFriend);
myFriend[4] = "Sozan"; 
console.log(myFriend);
console.log(myFriend.length) ; //5
myFriend[myFriend.length]="sondos";
console.log(myFriend);
myFriend[myFriend.length-1]="sond";
console.log(myFriend);
console.log(myFriend.length) ; //6
myFriend.length = 4 ;
console.log(myFriend);
myFriend.unshift("Asmaa" , "sawsan")
console.log(myFriend);
myFriend.push("eman" , "samah")
console.log(myFriend);
myFriend.shift() ;
console.log(myFriend);
  




// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];
  
//   displayCars();
  
//   cars.sort(function(a, b){return a.year - b.year});
//   displayCars();
  
//   function displayCars() {
//     document.getElementById("demo").innerHTML =
//     cars[0].type + " " + cars[0].year + "<br>" +
//     cars[1].type + " " + cars[1].year + "<br>" +
//     cars[2].type + " " + cars[2].year;
//   }
//   console.log(cars);

//   displayCars();


//object
var g= {
    size : "xl" ,
    name : "jone",
    a :[1 , 2 , 5 , 9 , 8 , 1],
    age:15,
    
    
    };
    console.log(g.a[5]);
    
    
    console.log(g.size);


//function
function sayHello(name) {
    console.log(`Hello My Name is  ${name}` ) ; }
sayHello("Asmaa");
sayHello("Alaa");

function sayHello(name) {
    console.log("Hello My Name is "  + name ) ; }
sayHello("Asmaa");
sayHello("Alaa");

function number(x){
    console.log (x*5 +7)
};
number(15);

function Number(z){
    console.log ("y = " + (z*5 +7)*2 )
};
Number(10);

// mathmatic
let y = 10 + (5 +7)*2 ;
console.log (y);

// let a = new Date()
// console.log(a.toLocaleTimeString("en.us"));

function hi() {
    var x="Hello My Name is "
    console.log(x) ; }
hi();


function double(g){
  return  console.log ("Double = " + (g*2) )
};

double(2)




//1
function tellFortune (N,Z,Y,X){
//number of children,partner's name, geographic location, job title.
 return  console.log ("You will be a " + X  +" in " + Y + " ,and married to " + Z + " with " + N +" kids.") 
  };
  
  tellFortune ( "3" ,"asmaa"  , "jordan" , "civil engineer" )


//2

  function  calculateDogAge(age){
    return  console.log ("Your doggie is " +(age*7) + " years old in dog years!")

  }
  calculateDogAge(5)
  //3

function calculateSupply(age, amountPerDay){
NN = (100-age)*amountPerDay
    return  console.log ("You will need " +NN +" to last you until the ripe old age of 100")
    
}

calculateSupply(90,2)

//4
function cube(X){
    return  console.log ( "cube = " + (X*X*X))

}
cube(4)

function multiply (X,Y){

    return  console.log (  "multiply = " + (X*Y))
}
multiply (90,2)

//5
function fullName(firstName ,lastName ){

return  console.log ( firstName + " " +  lastName)

}
fullName("Asmaa","Nsour")


//6

function average(A,B,C,D,E){
    return  console.log ( (A + B + C + D + E ) / 5)

}
average(5,7,9,3,5)

//7

function randomNumber(x,y){
// var x=0 
// var y = 1
    return  console.log (Math.random())
}
randomNumber(0,1)


// function randomNumber(min, max) {
//     min = Math.ceil(0);
//     max = Math.floor(1);
//     return Math.floor(Math.random() * (max - min) + min); }//The maximum is exclusive and the minimum is inclusive



function multiply_cube (X,Y){
    return  console.log (  "multiply = " + (X*Y)  + "\n" + "cube1 = " + (X*X*X)  +"\n" + "cube2 = " + (Y*Y*Y)  )
    
}
multiply_cube (90,2)

function Time(hour){
 if (hour < 18) {
    return greeting = "Good day";
  } else {
    return greeting = "Good evening";
  }

}
Time(5)
console.log ( greeting )



function  DogAge(age){
    if (age>= 0){
    return  console.log ("Your doggie is " +(age*7) + " years old in dog years!")

  }
  else {
    return window.alert ("Please Check the Dog Age" )}}

DogAge(105)