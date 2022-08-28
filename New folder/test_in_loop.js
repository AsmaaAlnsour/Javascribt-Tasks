/*
1
Correct the syntax error
 [ 1,7,  9  ,45, ] 

 ["Str" "alex","moh"]

[ 'the','fox', 'over', lazy, 'dog',  ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

index number 1 
*/


/*
3
Create an array represents your:
1- Favorite Food (5) 
2- Favorite Sport (3)
3- Favorite Movie (4)
*/


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let number=[1,4,5]

function firstOfArray (number){
    console.log(number[0])

}firstOfArray(number)

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

let number_2 = [1,4,5]
let y = number_2.length
function lastOfArray (number_2){
    console.log(number_2[y-1])

    
}lastOfArray(number_2)


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/var array = [0,5,7,9]

    array.shift()
    array.shift()
    array.shift()
    array.unshift(1,3,4,6,8)
    array.push(10)

 
    console.log(array)


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
 var array2 = [0,5,7,9]
array2.shift()
array2.shift()
array2.shift()

array2.push(-7,3.5)
array2.unshift(5)
 console.log(array2)
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
*/




let d_number = [ 1, 2 , 3 ,9]

function doubleValues(d_number){
for (i = 0 ; i < d_number.length ; i ++){
    d_number[i] = d_number[i]*2 

   }
console.log(d_number)
}doubleValues(d_number)



   






var numbers = [1, 2 ,3].map(num => num * 2);
console.log(numbers);







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

let arr = [ 5 ,4 ,6 ,1 ,8 ,16 ,9]

let new_rr = []
function onlyEvenValues(arr){
    
   for ( let e = 0 ; e < arr.length ; e ++){

    if ((arr[e]) % 2  == 0 ){

        new_rr.push(arr[e])
   
    }
   }
   console.log(new_rr)
}onlyEvenValues(arr)

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
let arr_2 = ['colt','matt', 'thim', 'udennmy']
var f = 0

function showFirstAndLast(arr_2){


    for (f = 0 ; f < arr_2.length ; f++ ){
        let x = arr_2[f].length

       arr_2[f] = `${arr_2 [f] [0] }${arr_2 [f] [x-1]}`
       
       
    }
    console.log(arr_2)

}showFirstAndLast(arr_2)
/*8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
const arr_5 = [1, 2, 3, 4, 5 ];

function middleOfArray(arr_5){

    if (arr_5.length % 2 !== 0){
        const theMiddle = Math.floor(arr_5.length / 2); 
        const value = arr_5[theMiddle]; 
        console.log(value)

    }
    else{
        const theMiddle = Math.floor(arr_5.length / 2); // index 2
        const theMiddle_2 = Math.floor((arr_5.length / 2)-1); // index 2
        const value = arr_5[theMiddle]; // value 1
        const value_2 = arr_5[theMiddle_2]; // value 1
        console.log(`${value} and ${value_2}`)

    }

}middleOfArray(arr_5)





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
var animals=[]
animals.unshift('cat' ,'ele');
console.log(animals)
animals.push('bird');

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
nums= [1,2,3,4,5,]
function indexOfArray(nums , x){
    y = nums[x]
    console.log(y)
}indexOfArray(nums , 4)

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
let last_array = [2,4,5,6,7,3,5]

function  arrayExceptLast (last_array){

   let  n_array = last_array.slice(0,(last_array.length)-1)
    console.log(n_array)

}arrayExceptLast(last_array)

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var nums_add= [1,2,3,8,9]
function addToEnd(r){
    nums_add.push(r) 
    console.log(nums_add)
    
}addToEnd(2)


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
let array_of_sum = [ 2 , 9, 2, 1 ]
let sum = 0
function sumArray(array_of_sum){
    for (let i = 0 ; i < array_of_sum.length ; i++){
        sum += array_of_sum[i]
    }console.log(sum)
}sumArray(array_of_sum)

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
// let min_nums= [7, 3 , 5 , 4 ]

// function minInArray(nums){

//     let min
//     for (let i =0 ; i < min_nums.length ; i++){

        
        
//         if (nums[i] < min){

//             min= Math.min.apply(Math, nums)}
//         }
       
//     } console.log( `Ex number 14==> ${min}`)
    
// }minInArray(min_nums)


var nums=( [14, 58, 20, 77, 66, 82, 42, 67, 42, 4])
var min;
function minInArray(nums){
for(let i=0 ; i < nums.length ; i++){
min= Math.min.apply(Math, nums)}


console.log(`Ex number 14==> ${min}`)
}
minInArray(nums)


// let min_nums= [ 8, 9 , 1]
// function minInArray(min_nums){
//     let i =0
//     // let min = min_nums[i];
//     for (i =0 ; i < min_nums ; i++){
//         min = Math.min(minInArray)
       
//     } console.log(min)
    
// }minInArray(min_nums)

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
let nums_6= [1,2,3,8,9]
let new_nums = []

function removeFromArray(nums_6,remove_numer){

for (let i =0 ; i < nums_6.length ; i++ ){
    if (nums_6[i] == remove_numer){
        continue
    }
    else{
        new_nums.push(nums_6[i])
    }
    
}console.log(new_nums)

}removeFromArray(nums_6, 9)

// let s = 0
// let new_nums_2 = []
// function removeFromArray_2(nums_6,remove_numer){
// while (s < nums_6.length ){
//     if (nums_6[i] == remove_numer){
//         continue
//     }
//     else{
//         new_nums.push(nums_6[i])
//     }

// }console.log(new_nums)
// } removeFromArray_2(nums_6,8)



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
let array_number = [1, 2 ,3 ,4 ,5 ,6]
let new_array_number =[]

function oddArray(array_number){
    
   for (let i = 0 ; i < array_number.length ; i ++){

    
    if ((array_number[i]) % 2 == 0 ){

       continue;
   
    }
    else{
        new_array_number.push(array_number[i])
    }


   }console.log(new_array_number)
  
}oddArray(array_number)

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

let ave_nums= [1,2,3,8,9]
let average = 0
function  aveArray(ave_nums){
    for (let i =0 ; i < ave_nums.length ;i++ ){
    average = average+ave_nums[i]
  
    }console.log(average/ave_nums.length)
}aveArray(ave_nums)


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
const strings = ["alesx","mercer","madrasa","rashed2","emad","hala"];

function getShortestWord(w) {
  let shortestWord = w[0];


  for(let i = 1;i < w.length; i++) {
    
    shortestWord.length > w[i].length && (shortestWord = w[i]);
  }
  return shortestWord;
}

console.log(getShortestWord(strings));


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
let string_2 = "Aalex mercer Amadrasaaaaaaaaa rashed2 emad hala"

let number_of_string = 0

function repeatChar (string_2 , x){
    
    for (let i = 0 ; i < string_2.length ;i++ ){
        if (string_2[i] === x){

        number_of_string +=1

        }
    }
}repeatChar(string_2 , "a")
console.log(`ex number 19 test ==> ${number_of_string}`)


// for (let m = 0; m < string_2.length ;m++){

    

//     if (string_2[m] === 'a' || string_2[m] === 'A' ){

//         number_of_string +=1
//     }
    
// }
// console.log(number_of_string)




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

let string_3 = ["alex","mercer","madrasa","rashed2","emad","hala"]

let e_index  = []

function evenIndexOddLength(string_3){

    for (let i = 0 ; i < string_3.length ;i++ ){

    if ([i] % 2 == 0 && (string_3[i].length) % 2 !== 0 ){

           e_index.push(string_3[i])
        }
    }
    console.log(`Ex number 20==> [${e_index}]`)
    
    
}evenIndexOddLength(string_3)


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1 , 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let Power_array= [44, 5, 4, 3, 2, 10]

// function powerElementIndex (Power_array){

    for(let k = 0 ; k < string_3.length ;k++ ){

        Power_array[k]= Power_array[k]**[k]

    }
    console.log(Power_array)
// }


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
let ee_number = [5,2,2,1,8,66,55,77,34,9,55,1]

let e_number_e_index = []

for (let b = 0 ; b < ee_number.length ; b++){
    if ([b] % 2 ==0 && ee_number[b] % 2 == 0){
        e_number_e_index.push(ee_number[b]) 
    }
}console.log(e_number_e_index)


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

function subtract(n){
    let index_sub = n
    while(n > 0){
        n--;
        index_sub -= n
        
    }
    console.log(index_sub)
   
}subtract(9)


/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
// let answer = 1
// let n= 1
// function subtract_2(i){

// while(n > i ){
//     n ++;
//     answer = answer * n
    
// }console.log(answer)

// }subtract_2(9)

function subtract_2(n){
    let index_sub_2 = n
    while(n > 1){
        n--;
        index_sub_2 = index_sub_2*n
        
    }
    console.log(index_sub_2)
   
}subtract_2(4)


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
function repeatStr(string_3, num_3) {

    let counter = 0
    var result = ""
    
    while (counter < num_3) {
        result += " " + string_3
      counter++
    }
    
    console.log( result)
    
    }
   
    
  repeatStr("to",2);
/*





4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/


function sum2(n_1 , n_2){



    let sum = 0
    var counter = n_1

    while(counter <=  n_2){

    sum += counter
    counter++
    
    }

    console.log(sum)

}sum2(3 , 6)



// function sum2(n_1 , n_2){

//    let sum = n_1

//     while(n_1 <= n_2){
    

//     sum = n_1 + (n_1 + n_1)
   

//     n_1 ++
    
    
//     }
//     console.log(sum)

// }sum2(4 , 9)










// function sum2(n_1 , n_2){
//     let sum = n_2
//     var counter = n_1

//     while(counter < n_2){

//     sum += counter
//     counter++
    
//     }
//     console.log(sum)

// }sum2(3 , 9 )

// function sum2(n_1 , n_2){
//     let sum = n_1

//     while(n_1 <= n_2){

//     sum = n_1 + 1
//     n_1++
    
//     }
//     console.log(sum)

// }sum2(3 ,6)


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

let result_3 = 0 

function multiOf(num1 , num2 , num3){

    while (num3 > 0) {
        num1 = num1*num2
        num3--
        
        result_3 = num1
    }
    

}multiOf(4 ,10,3)
console.log(`Ex number 5 ==> ${result_3}`)

/*
6
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/



function sum_3(n_1 , n_2){
    let sum = 1
    var counter = n_1

    while(counter <= n_2){

    sum =sum * counter
    counter++
    
    }
    console.log( `Ex number 6 ${sum}`)

}sum_3(3 , 6)



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



function sum_4(n_1 , n_2){

    let sum = ''
    var counter = n_1+1

    while(counter < n_2){

        sum += counter+" ,"
    
    counter++
    
    }
    if (n_1!==n_2-1){
        sum += "The last question :) "
    }

    console.log( `Ex number 7==> "${sum}"`)

}sum_4(1 , 5)









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


function countDown(number) {
  
    var result = ""
    
    if (number <= 0) { return "number must be greateer than 0"}
    
    while (number > 0 ) {
      
      result += number + ", "
      number--
    }
    
    
    if( number == 0 ){
      result += "done"
    }
    
  
    return result
    
  }
  
  console.log(countDown(7))



//For Exercises 

/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array
 and returns a new array with all the values in the array passed to 
 the function doubled
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
// let d_number = [ 1, 2 , 3]

// function doubleValues(d_number){
// for (i = 0 ; i < d_number.length ; i ++){
//     d_number[i] = d_number[i]*2 

//    }
// console.log(d_number)
// }doubleValues(d_number)



// var numbers = [1, 2,3].map(num => num * 2);
// console.log(numbers);


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
// let arr = [ 2 , 5 ,4]
// let e =0
// function onlyEvenValues(arr){
    
//    for (e = 0 ; e < arr.length ; e ++){

    
//     if ((arr[e]) % 2  !== 0 ){

//         arr[e] = arr.slice((arr[e]), (arr[e]+1))
   
//     }

//    }
//    console.log(arr)
// }onlyEvenValues(arr)

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
// let arr_2 = ['colt','matt', 'thim', 'udennmy']
// var f = 0

// function showFirstAndLast(arr_2){


//     for (f = 0 ; f < arr_2.length ; f++ ){
//         let x = arr_2[f].length

//        arr_2[f] = `${arr_2 [f] [0] }${arr_2 [f] [x-1]}`
       
       
//     }
//     console.log(arr_2)

// }showFirstAndLast(arr_2)

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
let obj = {name: 'Elie'}




function addKeyAndValue (key_1 , value_1){

    obj[key_1] = value_1 ;
    return obj ;

}console.log(addKeyAndValue ("titlsade" ,"asda"))

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


let a = 0
let u = 0
let o = 0
let i_1 = 0
let e_1 = 0


let word = 'I Am adsfkjakfsamfs sdfjsfnsjnfa i u e o ooo '

let vowelCount_1 = {
    
}

function vowelCount (word) {

    for (let g = 0 ; g < word.length ; g++){

    if (word[g] === "a" ||word[g] === "A" ){
            a+=1
        }
    if (word[g] === "u" ||word[g] === "U" ){
            u+=1
        }
    if (word[g] === "o" ||word[g] === "O" ){
            o+=1
        }
    if (word[g] === "i" ||word[g] === "I" ){
            i_1+=1
        }
    if (word[g] === "e" ||word[g] === "E" ){
            e_1+=1
        }  

    }
    if (a > 0){
        vowelCount_1['a'] = a
    }
    if (u > 0){
        vowelCount_1['u'] = u
    }
    if(o > 0){
        vowelCount_1['o'] = o
    }
    if(i_1 > 0){
        vowelCount_1['i'] = i_1
    }
   if(e_1> 0){
    vowelCount_1['e'] = e_1
   }
    
   
    console.log(vowelCount_1)
}vowelCount (word)