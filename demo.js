//variable
 let name='birundha';
console.log(name);
let firstname='birundha';
let lastname='s';
console.log(firstname+lastname); 
// function declaration
function sayhi(){
    console.log('hi all')
};
sayhi();
//functions as expressions
let expfun=function(){
    console.log('this is first citizens')
}
expfun();
var a=2;
var b=3;
function add(num1,num2){
    var ans=num1+num2;
    return ans;
}
let add1=add(a,b);
// let add2=add(5,6);
// console.log(add1);
// console.log(add2);

// var n=3;
// function square(num3){
//     var ans1=num3*num3;
//     return ans1;
// }
// let square1=square(n);
// console.log(square1);

// let msg='helloo';
// var msgval='helllo world';
// function hoisting(){
//     console.log(msgval,' this is hoisting and functions')
// }
// console.log(msgval);
// hoisting();

// let myname=alert("not allowed");
// console.log(myname);
// let entname=confirm("allowed name only");
// console.log(entname);
let entname=prompt("Enter the name");
if(entname){
 console.log(entname ?? "your name not entered");
}
else{
    console.log("your name not entered");
   
}
console.log(entname.trim().length);