var ar1 =[1,3,5]
var ar2 =[7,8,9]
let newArr = ar1.concat(ar2);
console.log(newArr);

let arr77 = ["welcome","youssef"]
let str =arr77.join(" ");
console.log(str);

let ar = ["a","v","c","f"]
let stored=ar.sort()
console.log(stored)

let ar3= [5,10,20]
console.log(ar3.sort())

let storedNum =  ar3.sort((a,b)=>a-b)
console.log(storedNum);


let sortednum2 = ar3.sort((a,b)=>b-a)
console.log(sortednum2)

var arrayIt =[1,2,3,"youssef","Hisham"]
for(var i=0;i<arrayIt.length;i++){
console.log(arrayIt[i])
}

arrayIt.forEach(function(number){
    console.log(number)
})

for(var elemnt of arrayIt){
    console.log(elemnt)
}

let obj1 = document.getElementById("first")
console.log(obj1)

let obj2 = document.getElementsByClassName("child")[1]
console.log(obj2)

let obj3 = document.getElementsByTagName("h2")[2]
console.log(obj3)