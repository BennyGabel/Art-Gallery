cString = "Hello"

console.log(cString)                       // Hello
console.log(cString.slice(-1))             // o          Extract last     letter
console.log(cString.slice(-2))             // lo         Extract last two letters

console.log(cString[cString.length - 2]);  // l          Extract Second Last Letter


console.log("**",cString.substr(0,cString.length-1))