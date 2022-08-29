/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

//  [ 1,7 , 9 , 45 ]

//  ["Str", "alex","moh"]

//  ['the','fox', 'over', 'lazy', 'dog' ]


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
fruits=["Tomato","Banana","Watermelon"]
// Tomato
console.log(fruits[0] )
// Banana
console.log(fruits[1])
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
Favorite = {
    Food : ["1" , "2 " , "3" , "4" , "5"] ,
    Sport : ["1" , "2 " , "3" ] ,
    Movie : ["1" , "2 " , "3" , "4" ] 
   
}
console.log(Favorite)

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
firstOfarray =([1,4,5])
firstOfArray =(["t","u","g","x"])
console.log (firstOfArray[0])
console.log (firstOfarray[0])
 /*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
lastOfArray =([1,4,5]) 
console.log (lastOfArray[(lastOfArray.length-1)])
lastOfArray =(["t","u","g","x"])
console.log (lastOfArray[(lastOfArray.length-1)])
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9]
array.shift = ( 0 , 5 , 7)
array.unshift = (1, 3 ,4 ,6 )
array.push =(10)
array.pop =(10)

console.log(array)
,
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
//  dont understand
/*
/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
function doubleValues(array) {
    var newArray = [];
    array.forEach(function (el) { newArray.push(el, el); });    
    return newArray;
  }
  
  console.log(doubleValues([1,2,3,16]));


/*
* Exercise:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
function onlyEvenValues(arr){
    //Your Code Here
    const arr2 = [];
    arr.forEach((val) => {
      if(val % 2 === 0) arr2.push(val);
    });
    return arr2;
}
console.log(onlyEvenValues([1,2,3,4]));

/*
* Exercise:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
function showFirstAndLast( arr){
    const Array2 = [];
    arr.forEach(function(item) {
       Array2.push(item.charAt[0],item.charAt[item.length-1]);

     })
   
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']) )

// console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']))
/*8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(a) {
    let middle1 = Math.floor((a.length + 1) / 2);
    let middle2 = Math.ceil((a.length + 1) / 2);
    return a.slice(middle1 - 1, middle2);
  }
console.log( middleOfArray([1,4,5]))
console.log(middleOfArray(["t","u","g","x"]))
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals.shift('cat', 'ele', 'bird' )
animals.shift( 'ele', 'bird' )
animals.shift( 'bird' )

animals.unshift('zebra', 'elephant' )
console.log(animals)
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/ 
var nums= [1,2,3,8,9]

function indexOfArray(x,y){
// var x ="nums"
    // y = indexOfArray 
console.log( x[y])
}
indexOfArray(nums,3)
indexOfArray(nums,4) 
indexOfArray(nums,1)
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr){
x=  arr.pop(arr)
console.log (x)

}
arrayExceptLast([1,2,3,8,9])
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(x,y){
const nums = [1,2,3,8,9];

nums.push(y);

console.log(nums)
}
addToEnd(nums,55)

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
const sum = [1,2,3,8,9].reduce(add, 0); 
function add(accumulator, a) {
  return accumulator + a;
}

console.log(sum); 

function sumArray(arr){
    let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
}
sumArray([1, 2, 3, 4])

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr){
const min = Math.min(...arr)
console.log(min)
}
minInArray([1,2,3,8,9])
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for (i = 0, len = Auction.auctions.length; i < len; i++) {
//     auction = Auction.auctions[i];
//     Auction.auctions[i]['seconds'] --;
//     if (auction.seconds < 0) { 
//         Auction.auctions.splice(i, 1);
//     }           
// }


// var i = Auction.auctions.length
// while (i--) {
//     ...
//     if (...) { 
//         Auction.auctions.splice(i, 1);
//     } 
// }



// var arr =  [1,2,3,8,9]
// function removeFromArray(x,y){
//     var indexToRemove = y; 
//     var arr =   [1,2,3,8,9];
//     var result = arr.filter((data, idx) => idx !== indexToRemove );
//     console.log(result);
// }
// console.log(minInArray(arr,8))
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

/*

While Exercises 
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/


/*
2
Create a function called factorial 
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
// function factorial (n){

//     if (n = 0 , n = 1){
//         result = 1 ;}
// else{
//     result= n
// for (let result = 0; i < result; i++) 
//     result +=  result * (result-1)
// }
        
// console.log(result)
// }

// factorial(5)




/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/


/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/

/*
5
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

/*
6
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
/*
7
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/

/*
8
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/

//For Exercises 

/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
function doubleValues(arr){
    const newArr = [];
    arr.forEach((val) => {
        newArr.push(val * 2);
    });
    return newArr;
}
console.log(doubleValues([1,2,3,4]));


/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/

function onlyEvenValues(arr){
    const arr2 = [];
      arr.forEach((val) => {
        if(val % 2 === 0) arr2.push(val);
      });
      return arr2;
  }
  console.log(onlyEvenValues([1,2,3,4]));
/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/

// function showFirstAndLast(x){
    

// var x = str ;

//     first = str.charAt(0);
//     console.log(first); // 👉️ a
//    last = str.charAt(str.length - 1);
//     console.log(last); // 👉️ e
    
// }
// showFirstAndLast(['colt','matt', 'tim', 'udemy'])
/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
function addKeyAndValue(arr, key, value) {
    for (i = 0; i < arr.length; i++) {
      obj = arr[i];
      obj[key] = value;
    }
    return arr;
    }
    console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') )

/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/


function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
               obj[letter]++;
            } else{
              obj[letter] = 1 ;
            }
        }
    });
    return obj;
    
   
}

// console.log(vowelCount('Elie')) // {e:2,i:1};
// console.log(vowelCount('Tim')) // {i:1};
// console.log(vowelCount('Matt')) // {a:1})
// console.log(vowelCount('hmmm') )// {};
// console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1};