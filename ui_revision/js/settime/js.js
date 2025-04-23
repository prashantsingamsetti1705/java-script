const printname=(name,income,male)=>{
    let gender=male;
    if(gender){
gender="male";
    }else{
        gender="female";
    }
console.log(`welcome,${name},${income}.gender is ${gender}`)
}
const ct=setInterval(printname,2000,"anil",200,true);

const btn=document.querySelector("button")
btn.addEventListener("click",()=>{
   clearInterval(ct);
})