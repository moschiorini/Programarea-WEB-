console.log("Laborator N#1");

var numbers = [5, 8, 7, 4, 9, 10];
var numbers1 = [5, 8, 7, 4, 9, 10];
var numbers2 = [5, 8, 7, 4, 9, 10];
var min = numbers[0]; 
var max = numbers[0];
// Minimalinie element

console.log("Initial", numbers);

function minim(){
for (var i = 0; i < numbers.length; i++){
    if (numbers[i] <= min) {
    	min = numbers[i];
    }
 }
 console.log('Minimum - ', min);
}


minim(numbers);

// minim cherez matematicheschie functii
function minimum() {
var mini = Math.min.apply(null, numbers);
console.log("minimum cherez matem funchii-",mini);
}

//vizov matem minimuma
minimum(numbers);


function maximu(){
for (var i = 0; i < numbers.length; i++){
    if (numbers[i] >= max) {
      max = numbers[i];
    }
 }
 console.log('Maximum - ', max);

}

//vizov functii maximum
maximu(numbers);





// maximum cherez matematicheschie functii
function maximum() {
var mini = Math.max.apply(null, numbers);
console.log("maximum cherez matem funchii-",mini);
}

//vizov matem minimuma
maximum(numbers);

 

 var srednea = 0;
 var s = 0;

function sred(){
for (var i = 0; i < numbers.length; i++){
    s += numbers[i]; 
srednea = s/numbers.length-1;
 }
console.log('Srednea arifmet ', srednea);
}

sred(numbers);



function myCres() {
  numbers.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = numbers;  
}

function des(){
numbers.sort(function(a, b)
	{return b - a })
console.log('Otsenki po ubivaniu ---> ' + numbers);
}

des(numbers);

function cres(){
numbers.sort(function(a, b)
  {return a - b })
console.log('Otsenki po vozrastaniu ---> ' + numbers);
}

cres(numbers);

function myDes() {
  numbers.sort(function(a, b){return b - a});
  document.getElementById("demo").innerHTML = numbers;  
}

function povo(){
var arr = [];
arr[0]=numbers1[numbers1.length-1];
for (var i = 0; i < numbers1.length-1; i++){
    arr[i+1] = numbers1[i];
 }
 console.log('Rotirea tabelului la stânga ---> ' + arr);
}

povo(numbers1);


numbers2.push(17);    
console.log('Dobavlennie 17: ' + numbers2);
// functie pentru reinovarea tabelui

numbers2.splice(2, 1);
console.log('Udalenit  ' + numbers2);


 function isInputNumber(evt) {
        var ch = String.fromCharCode(evt.which);
        if (!/[0-9-,]/.test(ch)){
            evt.preventDefault();
        }
    }  