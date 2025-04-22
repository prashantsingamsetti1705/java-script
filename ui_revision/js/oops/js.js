// const a={
//     name:"jhon",
//     age:30,
// };
// console.log(a)
// object 
// litral
const a="hello";


const b={
    name:"abhi",
    printsurname:()=>{
        console.log("singh")
    }
}
console.log(b);
b.added="value is adde"
console.log(b);
// 
const employee={
    calctax(){
        console.log("tax rate is 10%");
    }
}
//
const karanarjun={
    slaray:5000
}
karanarjun.__proto__=employee;

// class
// class toyatacar{
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }
//     setbrand(brand){
//         this.brand=brand;
//     }
// }
// let forl=new toyatacar()
// forl.setbrand("fortunure")
// constructor
class carl{
    constructor(brand,mailage){
        this.brand=brand
        this.mailage=mailage
        console.log("creating object")
    }
    start1(){
        console.log("start")
    }
    stop2(){
        console.log("stop");
    }
}

let forl2=new carl("for",12);


