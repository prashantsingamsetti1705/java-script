// // console.log(document.head);// it used get head of html
// // console.log(document.body);// it used to get the body tag of the html
// // console.log(document.documentElement);// it used get full html page
// // console.log(document.body.children);// it is not arry we if you you will conver it 
// // const a=document.body.children
// // const newarrray=Array.from(a);
// // for (let i=0;i<newarrray.length;i++){ console.log(newarrray[i])}
// // console.log(thisone)
// // document.getElementById("thisone")
// // console.log(document.getElementById("thisone"))
// // console.log(document.getElementsByClassName("thisone"))
// // by tag name also
// const thisone=document.getElementsByTagName("span")
// // thisone[0].textContent="hello world"
// // thisone[0].innerText="hello world"
// thisone[0].innerHTML=`<spane>hello</spane>`
// thisone[0].style.color="red";
// thisone[0].style.backgroundColor="BLUE";
// console.log(thisone[0])
//
const mybtn=document.getElementById("mybtn");
mybtn.style.backgroundColor="red"
mybtn.style.color="white";
mybtn.style.fontSize="20px";
mybtn.style.borderRadius="20px"
mybtn.style.cursor="pointer"
// mybtn.style.hover="red"
// mybtn.style.transitionDelay="0.5s"
mybtn.style.padding="10px";
// qurey slector
const btn=document.querySelector(".oky")
btn.innerText="anil"
// get attribute it used see the arrtribute and set attribute is used for ser the attribute
// 
//  const mybtns=document.querySelectorAll("button")
function bringheadtag(){
    const h2=document.createElement("h2");
    h2.innerText="hello";
    document.body.prepend(h2)

}

function delheadtag(){
    const h2=document.querySelector("h2");
    h2.remove()
}