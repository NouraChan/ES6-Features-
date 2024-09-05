//1


//works fine
function addNumbersV1(x,y){
  sum = x + y ;
  return sum;
}
addNumbersV1(5,10); //returns 15

//replaces x , because parameters have the same name
function addNumbersV2(x,x){
  sum = x + x ;
  return sum;
}

addNumbersV2(5,30); //returns 60 


//********************
//2
var argument = 30; //works fine even though it's a reserved word. 


//********************
//3

if(true) {
var z = 8} //block scope 

console.log(z); //returns 8, block scope doesn't make it local. 


//********************
//4 memory allocation (managed-unmanaged) 

var name = "nour";

delete name ; //works just fine. 



//********************
//5

var a = 5; 
var a = 7; 

//can redeclare without any problems. 


//********************


//SOLUTION TO ALL PAST PROBLEMS : "use strict mode" which switches from sloopy to strict . 


var v = 5;

v=9 ; //output 9, reassigned. 

let g = 5;
//let g = 10; 

//or 

const P = 50;
//const P = 80; 

//both "let" and "const" can't be redeclared. 



//********************





