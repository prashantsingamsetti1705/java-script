// events on js
const heading=document.getElementById("heading")
const btn=document.getElementById("mybtn")
const box1=document.getElementById("box1");
// btn.addEventListener("click",()=>{
    
//     box1.style.backgroundColor="red"
//     console.log("clicked");
// })
btn.addEventListener("click",()=>{
    
    box1.classList.add("classfordiv")
    console.log("clicked");
})
box1.addEventListener("mouseover",()=>{
    btn.style.transform="scale(1.1)";
    heading.style.backgroundColor="pink";
})
box1.addEventListener("mouseout",()=>{
    heading.style.backgroundColor=""
    btn.style.transform="";
})
btn.addEventListener("contextmenu",(e)=>{
    btn.body.style.backgroundColor="purple"
    e.preventDefault()
})