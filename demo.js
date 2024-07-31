//variable
//  let name='birundha';
// console.log(name);
// let firstname='birundha';
// let lastname='s';
// console.log(firstname+lastname); 
// // function declaration
// function sayhi(){
//     console.log('hi all')
// };
// sayhi();
// //functions as expressions
// let expfun=function(){
//     console.log('this is first citizens')
// }
// expfun();
// var a=2;
// var b=3;
// function add(num1,num2){
//     var ans=num1+num2;
//     return ans;
// }
// let add1=add(a,b);
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
// 



// function x()
// {
//     for(let i=1;i<=6;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*2000);
//     }
//     console.log("hello");

// }
// x();


// function x()
// {
//     for(var i=1;i<=6;i++){
//         function closoure (x){ 
//             setTimeout(function(){
//             console.log(x);
//         },x*2000);
        

//         }
//         closoure(i);
//     }
//     console.log("hello");

// }
// x();

// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }
  
//   // Call add() 3 times
//   add();
//   add();
//   add();
// function add() {
//     let counter = 0;
//     function plus()
//      {counter += 1;}
//     return counter;

//   }
//   plus();
//  console.log(add());
// console.log(add());
//  console.log(add());
// add();
// add();

// 

// let fs = require('fs');

// console.log('1');

// fs.readFile('notes.txt',function(error, data) {
//     if (error) {
//          throw error;
//     }

//    else{
//     console.log(data.toString());
//    }
// });

// console.log('3');




// function invokeAfterDelay(callback) {
//   setTimeout(callback, 2000); // 2000 milliseconds = 2 second
// }
// function display_message() {
//   console.log('Hello!');
// }
// invokeAfterDelay(display_message); // Invokes the sayHello function after a 1-second delay

// function a(){
// setTimeout(()=>{const minits=new Date().getTime()
//   console.log(minits,'1');
// },500)}
// a();
// function b(){
// setTimeout(()=>{const minits=new Date().getTime()
//   console.log(minits,'2');
// },500)
// }

// b();

