//console.log("hey pavan ghuge ...");
//alert("i am pavan");
//alert("yooo!")

// variable 
var b = 'Good morning...!'
//console.log(b);

//var age = prompt('what is your age..?');
//document.getElementById('someText').innerHTML = age;

//Number in javascript
var num1 = 10;
num1 = num1 + 1;
console.log(num1);
/* function
1. creat a function
2. Call a function
*/
//creat
function fun()
{
    console.log('this is a funtion..');
   // alert('this is a function..!');
}

//call
fun();
/*Creat a function that take in a name 
and say hello followed by name

for example :
Name : "Pavan"
Return : "Hello Pavan"
*/

/*function greeting(){
    var name = prompt('What is your name..?');
    var result = "Hello"+' '+name;
    console.log(result);
}

greeting();*/

/*function greeting(yourname) {
    var result = "Hello"+ " "+yourname;
    console.log(result);
}

var name = prompt("what is your name..?");
greeting(name);*/

// Data types
/*let yourAge = 18;// number
let yourName = 'Bob';//string
let name = {first:'Jane',last:'Doe'};//object
let truth = false; // boolean
let groceries = ['apple','banana','oranges'];//array
let nothing = null;//value null
//String in Javascript [common method]*/

/*let fruit = 'banana';
let moreFruits = 'banana\napple'; 
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(', '));
console.log(fruit.split(''));*/
//ARRAY
/*let fruits = ['banana' , 'apple' , 'orange' , 'pineapples'];
fruits = new Array('banana', 'apple' , 'orange' , 'pineapple');
console.log(fruits[2]);//access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

// Array common method
console.log("to String :" , fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // remove last item
console.log(fruits.push('blackberries'),fruits);//appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit';
console.log(fruits);
fruits.shift();//remove first element from a list
console.log(fruits);
fruits.unshift('kiwi');// add first element to an array
console.log(fruits);

let vegetables = ['asparage' , 'tomato' , 'broccoli'];
let allGroceries = fruits.concat(vegetables); //combine array
console.log(allGroceries);
console.log(allGroceries.reverse());
console.log(allGroceries.sort());
console.log(allGroceries.slice(1,4));

let someNumbers = [5,10,2,25,3,255,1,2,5,334,321,2];
console.log(someNumbers.sort(function(a,b) {return a-b}));
console.log(someNumbers.sort(function(a,b) {return b-a}));
let emptyArray = new Array();
for(let num = 0;num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);*/

//Objects in javascript
//dictionaries in python

let student = {
first:'Pavan',
last:'Ghuge',
age:25,
height:170,

studnetInfo: function ()
{
    return this.first + '\n' + this.last;
}
};

/*console.log(student.first);
console.log(student.last);
student.first = 'NotPavan'; // change value
console.log(student.first);
student.first = 'YesPavan';
console.log(student.first);
student.age++;
console.log(student.age);*/
console.log(student.studnetInfo());