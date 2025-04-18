// function are used code reuseable perpuse and etc and les code complexcity
// in python we def as key word but here we use the function
let myfunc=function(a,b){
    return a+b
}
c=myfunc(10,2)
console.log(c)
// now similarly we use arraow fuction
let myfunc1=(a,b)=>{
    return a+b
}
d=myfunc1(10,3)
console.log(d)
d=myfunc1(12,4)
console.log(d)
// write a js program on given value id given or not
let myc=(a)=>{
    let sum=0;
    for (i=0;i<=a;i++){
        if(i%2==0){
        sum=sum+1
        }
    }
    console.log("it is even number")
    console.log(sum)
}
f=myc(5)
