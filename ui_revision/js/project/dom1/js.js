//
let isstatus=document.querySelector("h5")
var addf=document.querySelector('#add')
// var removef=document.querySelector("#remove")
var flag=0;
addf.addEventListener("click",()=>{
    if (flag==0){
        isstatus.innerHTML="friends"
        isstatus.style.color="green"
        addf.innerHTML="remove friend"
        flag=1  
    }
    else{
    isstatus.innerHTML="stranger"
    isstatus.style.color="red"
    addf.innerHTML="add friend";
    flag=0
    }

})
// removef.addEventListener("click",()=>{
//     isstatus.innerHTML="stranger"
//     isstatus.style.color="green" 
// })