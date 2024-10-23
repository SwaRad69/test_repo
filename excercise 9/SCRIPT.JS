let random = Math.random()
let a = prompt("first no");
let b = prompt("second no");
let c = prompt("write the operation");

let obj ={
    "+":"-",
    "/":"**",
    "*":"+",
    "-":"/",
}
if (random>0.1) {
    alert(`The result is${eval(`${a} ${c} ${b}`)}`)
    
} else {
    c= obj[c]
 alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
 
}