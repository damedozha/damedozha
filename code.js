
function twiceAsOld(dadYearsOld, sonYearsOld) {
// your code here
let targetAge = sonYearsOld * 2 
let howLongAgo = dadYearsOld - targetAge
if  (howLongAgo >= 0) {
return howLongAgo 
} else
return (-howLongAgo) 
console.log(targetAge)
}