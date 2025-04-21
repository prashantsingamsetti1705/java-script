// forEach(callbackfunction)
let arr=['anil',"delhi"];
arr.forEach((val)=>{
    console.log(val.toUpperCase());
})

let arr2=[1,2,4];
arr2.forEach((val)=>{
    console.log(val**2)
})
 // or
 let my_func=(arr2)=>{
    console.log(arr2*arr2);
 }
 arr2.forEach(my_func) ;

 // workinf onth emap
//  let old_array=[65,17,22,45]
//  let new_array=old_array.map((val)=>{
//     return val*2
//  })
//  console.log(new_array)
// filter
let arr3=[1,2,3,4]
let newarr=arr3.reduce((val,curr)=>{
return val+curr;
})
console.log(newarr);

function starline(n){
    var ans="";
    for (var i=0; i<n; i++){
        ans=ans+"*"
    }
    console.log(ans)
}

function starp(n){
    for (var i=0; i<n; i++){
        starline(i)
    }
}
var ans2=starp(10)
console.log(ans2)