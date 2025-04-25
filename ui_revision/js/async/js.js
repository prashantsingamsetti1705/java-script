// now we are working on the asysc java srcipt
// it works on multi tasking exaple like store doing payment like upi take 20 min other person bill will check out in another tab 
// call back,promise ,asyncwait
// function example(name='abhi'){
//     return `wass iam iamabhi ${name}`
// }
// const res=example();
// console.log(res)
//example
// 
// function example2(name="abhi"){
// setTimeout(
//         ()=>{
//             for(let i=0;i<500;i++){
//                 console.log(`${name},${Math.random()}`)
//             }
//         }
//     ,3000);
// }
// example2();
// alert("lastline")
// console.log("lastline")
// now we are working the example 3
// setTimeout(()=>{
//     alert("anil")
// },3000)
// console.log("lastline")
// another example
// sync means one by one task with out completion of the one task cant not perform another task
// async means working all task same time and given which output geting frist will show the result
// console.log("1");//sync
// console.log("2");//sync
// console.log("12");//sync
// anysc setTimeout(callback,timeinmillsec)
// setTimeout(()=>{
//     alert("sai anna food intava")
//     prompt("")
// },3000)
// console.log("hii babu")
// main stack =>excecution
// syc always moves through mainstack
// async aalways moves trough sidestack
// if main stack moves empty then it goes to side stack and it goes to main stack
// this process is called event loop
// code
// console.log("1")//syc-->mainstack
// console.log("2")//sync
// console.log("3")//sync
// setTimeout(()=>{
// console.log("4")
// },3000)//async -->side stack
// console.log("5");//sync-->mainstack
//anysc code we use 
// fecth,axios,promises,settime,settimeout,setinterval
// then,catch,call back,ayncwait -->answer
//callback==>function when anysc code completion

// promise-->resolve,recject store in var if resolve we use then and reject we use ctach-->pending state
// var ans =new Promise((res,rej)=>{
// if (false)//true{
//     return res()
// }
// else{
//     return rej()
// }
// })
// ans.then(()=>{
//     console.log("resolve")
// })
// .catch(()=>{
//     console.log("reject");
// })
// user will ask 0-->9 if nuber below 5 or resolve if not reject
// var ans =new Promise((res,rej)=>{
// let n=Math.floor(Math.random()*10)
// if (n<5){
//     return res()
// }
// else{
//     return rej()
// }
// })
// ans.then(()=>{
//     console.log("below")
// })
// .catch(()=>{
//     console.log("above");
// })// new is the cunstructor
//sbase phleghar phoavo
//gate kholo aur gate lago
// khana pakao khana khao
// incognito kholo chalo
// soja kyuki tum thak gaye ho
var ans=new Promise((res,rej)=>{
return res("base phleghar phoavo")
})
var p2=ans .then((data)=>{
    console.log(data)
   return new Promise((resolve, reject) => {
        return resolve("gate kholo aur gate lago")
    })
})
var p3=p2.then((data)=>{
    console.log(data)
    return new Promise((resolve, reject) => {
        return resolve("khana pakao khana khao")
    })
})
p3.then((a)=>{
    console.log(a)
})