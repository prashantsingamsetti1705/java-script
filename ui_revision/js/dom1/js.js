//dom document object model 
// 4 pillar of the dom 
// 1.selection of an element --> it ment that elment reton html and css
// 2.changing html
// 3.changing css
// 4.event listener


// var a= document.querySelector("h1")// selecting on html elemnts
// console.log(a);
// chaning html
//var a= document.querySelector("h1")
// a.innerHTML="changed html"
// console.log(a)
// chaning css
// let b=document.querySelector("h1")
// b.style.color="red"// we are camilcas
// b.style.backgroundColor="black"
// console.log(b)
// evenlistner are perfoming the operation & observer
// var c=document.querySelector("h1")
// c.innerHTML="kaise app log"
// c.addEventListener("click",()=>{
// c.innerHTML="mei badsha hu "
// c.style.color="yellow"
// c.style.backgroundColor="black"
// })

// simple example
// let a =document.querySelector("#bulb")
// let btn=document.querySelector("button")
// let flag=0
// btn.addEventListener("click",()=>{
//     if (flag==0){
//  a.style.backgroundColor="yellow"
//  flag=1
//     }else{
//         a.style.backgroundColor="transparent"
//         flag=0 
//     }
// })
let s=document.querySelectorAll("h1")
console.log(s)

s.forEach((e)=>{
    console.log(e);
})
// documet.getElemntbyId("")
// document.getElementsByClassName("")