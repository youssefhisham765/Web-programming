let t=60;

if(t>=100){
    document.writeln("boiling");

}else if(t>=70 && t<100){
    document.writeln("hot");
}else if(t>=50 && t<70){
    document.writeln("warm");
}else{
    document.writeln("cold");
}

let day=4;

switch(day){
    case 1:
        document.writeln("sunday");
        break;

        case 2:
            document.writeln("monday");
            break;

            default:
                document.writeln("not a day");
}

let q = (t>=100)?"boiling" : "not boiling";

// for(var i=1; i<4;i++){
//     document.writeln(i);
// }

var w = 6;

while(w<5){
    document.writeln(w);
    w++
}
document.writeln("finished");


do{
     document.writeln(w);
     w++;
}while(w<5)



function sum(num1 = 5 , num2 = 3){
    var result = num1 + num2
    console.log("sum is " + result)
}

sum(4,1)

function multiply(num1 , num2){
    var k = 456
    var result = num1*num2
    return result
}


console.log(multiply(2,4))


var z = function(){
    console.log("this is z")
}
z()

function callAnotherFunction(anotherFn){
    console.log("this functon that calls another function")
    anotherFn()
}

callAnotherFunction(function(){
    console.log("this is the anonymous function")
})


var m = (number) => {
    console.log(number)
}

m(4)


var arr = [100,200,"name"]
console.log(arr[1])
arr[2]=300
console.log(arr)
console.log(arr.length) 
arr.push(500,700)
console.log(arr)
arr.splice(1)
console.log(arr)

arr.shift()
console.log(arr)
//console.log(arr[0])
arr.unshift(30)
console.log(arr)

arr = [10,20,30,40,50]
console.log(arr)

console.log(arr.indexOf(50))
console.log(arr.lastIndexOf(20))