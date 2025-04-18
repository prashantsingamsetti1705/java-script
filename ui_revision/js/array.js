// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// indeces in array 
let arr=[1,2,3,4]
console.log(arr[0])
// length of the array
const fruits =['apple','bannana','oarange']
console.log(fruits.length)
console.log(fruits[2])
// pop and push we works on the end of the elemnts
fruits.push('grape')
console.log(fruits)
fruits.pop()
console.log(fruits)
// shit and unshif it will work at frist at of elements
fruits.unshift("anikl")// it will add the frist element on array
console.log(fruits)
fruits.shift()// it will remove the frist value of the elements
console.log(fruits)
delete fruits[0];// delete will levaes undefined hole array
console.log(fruits);
// conact is used for the merrging the array
let arr1=[1,3,4,65]
let arr2=[12]
let arr3=arr1.concat(arr2)
console.log(arr3)
//splice(index,value) add the values
console.log(arr3.splice(2,3),12,33,35)
// silce iused of the silce the elemnt in the array
const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(1, 3);
console.log(citrus)