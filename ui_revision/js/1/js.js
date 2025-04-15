// type conversion on js
// it wiil conert into one data type to another data type
// let a=12
// console.log(typeof String(a));
// // anothre method to convert into string
// let b=12;
// b=b.toString()
// console.log(b)
// console.log(typeof b);
// string method in JS
// index in [0]
// let s="prashant ";
// console.log(s[3])
// console.log(s.indexOf("a"))
// console.log(s.lastIndexOf("a"));
// console.log(s.endsWith("t"));// it give you a bolean value
// console.log(s.includes("y"));// it give you a boolean value
// console.log(s.slice(0,4));
// console.log(s.split(" "))// it will split into array
// console.log(s.replace("p","P"))// it will rplace the value
// console.log(s.length)
// // lower case // upper case
// console.log(s.substring(0,4));
// console.log(s.substr(3,4))
s="prashant"
let heading=document.getElementById("myheading")
heading.innerText=s;
// let a=promat("type of number")
//console.log(a);
/// lopps
// if else,elif,
// operators are +,-,*,/,%
// comprasion operators used if else ==,>,<,>=,<=,!=,===, its compare and 
// let a=prompt("enter the number");
// if (a==12){
// console.log("ice-cream is bule lagoon")
// }
// else if(a===30){
// console.log("ice cream is not blue")
// }
// else {
//     console.log("ice-cream is not buleloagoon")
// }
// //switch case
// // swith case

// let b=20
// switch(b){
//     case 10:
//         console.log("ice-cream is bule")
//         break;
//         default:
//             console.log("ice-cream is not bule")
//             break
// }

// for loop
// for(let i=0;i<10;i++){
//     console.log(Math.random());
// }
// // while loop
// let i=0;
// while(i<10){
//     console.log(Math.random());
//     i++;
// }
// arrays in js simillar is also konws as list in python
let arr =[1,2,3,4];
console.log(arr[0])
// 
let arr1=["abhi","singh"];
console.log(arr1);
// it mixed arry asme like list in python we are adding in num and strs
// propert y of the arry
arr[0]=100
// arr[1]="prasahnt"
console.log(arr)
// push is used add the value at the end 
arr.push(7);
console.log(arr);
// pop is used for remove the elemnt in the in arr at en
arr.pop(7)
console.log(arr);
// shift
console.log(arr.shift());
// unshift is used for the first element in the arrayc
arr.unshift(2)
console.log(arr);
// splice is used to delet the multiple element in the arry 
arr.splice(0,2)
console.log(arr);
//reverse is used for the reverse the value in the arry
arr.reverse()
console.log(arr);
 let arr3=[];
 for(let i=0;i<10;++i){
    arr3.push(i)
 }
 console.log(arr3)


 // object i js
 const obj={
name:"prasahnt",
surname:"singh",
income:2000
,male:true
 }
 console.log(obj);
//  it same like pythonb dict
// add ing the new  data
obj.newdata="newdta"
console.log(obj);
// function
console.log("hello world5");
let a=10
let b=20
let c=23
let resule=(a*10)+(b*20)+(c*30)
console.log(resule);
// function printthevalue
function printthevalue(){
   let res=(23+10)
   res=res/3
   console.log(res);
}
printthevalue()
printthevalue()