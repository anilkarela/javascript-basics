// 1.ways to print in javascript
// alert("hello");
// console.log("hello world");
// document.write("this is a doucment write");


// 2 javasript console API
console.log("hello world"); 
console.warn("this is a warning");
console.error("this is a error");

//3. JavaScript Variables
var num1 = 4;
let num2 = 3;
num1=35;
// const num3 = 34;  can be assigned only once , means can not change the value again;
console.log(num1+num2)

// 4. Data Types in js
//  number
let num3=45;
let num4=15.45

// String
let str="this is a string"

//  booleans 
 var a=true;
 var b= false;

// Symbol
var sym=Symbol("this is a symbol");
var sym1=Symbol("this is a symbol");


var s1="this is a symbol";
var s2="this is a symbol";

console.log(sym==sym1);
console.log(s1==s2);

// object (key-value value pair)
let students={
    name:"anil",
    roll_no: 18,
    hostel:"NBH"
}
console.log(students);
console.log(students.name);

// Array

let marks=[14,15,78,45];
// console.log(marks[0]);
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }
// console.log()
// marks.forEach(function (element){
//     console.log(element)
// })
// console.log("")
// for(let i of marks){
//     console.log(i);
// }


// at a high leve there are two types of data types in java Script
// 1. primitive data types :- undefined , null , number , string, boolean , symbol
// 2. reference data types :- Arrays and Objects 

//  Functions in JavaScript

function add(a,b){
    return a+b;
}

var res=add(5,5);
// console.log(res)
if(res>=10){
    res+=5;
}
else{
    res-=5;
}
// console.log(res)

var count=8;
if(count>9){
    // console.log("greater than 5");
}
else if(count>7){
    // console.log("greater than 7");
}
else if(count<5){
    // console.log("less than 5");
}
else{
    // console.log("else block")
}


// let heading = document.getElementById("heading2");
// for(var i=0;i<=5;i++){
//     for(var j=0;j<=i;j++){
//         heading.innerHTML+="*"
//     }
//     heading.innerHTML+="<br />";
// }

// for(let i=0;i<5;i++){
//     for(let j=0;j<i;j++){
//         console.log("*");
//     }
//     console.log("");
// }

let i=0;
let arr=[1,2,3,4,5,6,7,8];

// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// do while Loop
// do{
//     console.log(arr[i]);
//     i++
// }
// while(i<arr.length);

// String Methods In JavaScript

// let strr="hello how are you, are";
// console.log(strr.length);
// console.log(strr.indexOf("are"))
// console.log(strr.lastIndexOf("are"))
// console.log(strr.slice(1,10));

// Datetime in JavaScript
let mDate=new (Date);
// console.log(mDate);
// console.log(mDate.getFullYear());
// console.log(mDate.getDay());



// Document object Model (DOM) manipulation
let elem=document.getElementById('btn')
console.log(elem);

let elemClass = document.getElementsByClassName('txt');
console.log(elemClass);
elemClass[0].style.color="blue";
// elemClass[1].style.background="yellow";
elemClass[0].style.background="yellow";
// elemClass[1].classList.add("bg-primery");
console.log(elem.innerHTML);
console.log(elem.innerText);

let tg=document.getElementsByTagName('div');
console.log(tg);


let createdElement= document.createElement('p');
createdElement.innerText= "this is a created text";

let createdElement2=document.createElement('p');

createdElement2.innerText="this is replaced paragrpah";

elemClass[0].appendChild(createdElement);
elemClass[0].replaceChild(createdElement2,createdElement);

console.log(
    document.URL,
    document.scripts,
    document.links,
    document.domain
)

// selecting using query

sel=document.querySelector('.txt');
console.log(sel);
selAll=document.querySelectorAll('.txt');
console.log(selAll);

// Events in JavaScripts