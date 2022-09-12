//Challenge 1: Your Age in Days
document.getElementById("btnClick").addEventListener("click", ageInDays);
function ageInDays() {
var birthYear = prompt('What year were you born... Good friend?');
var yourAgeInDays = (2022- birthYear) * 365;
var h1 = document.createElement('h1');  
var textAnswer = document.createTextNode('You are ' + yourAgeInDays +' days old.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
document.getElementById("ageInDays").remove();}