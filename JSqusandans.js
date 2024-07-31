//Function statement-creating a function with the given name
function a(){
console.log("a called");
} // Function Declaration



// Function expression
var b=function b(){
    console.log("b called");
    }

//Anonymous Function-fun without name ,when the fun use there value on that anonymous function (){
function () {

}
// Named Function Expression-giving name to the anonymous fun
// Diff b/w Parameters & Arguments
var b=function b( param1,param2){
    console.log("b called");
    }
    b(1,2);

// First class function-ablity to use fun as values  and can be passed as an argument to another fun and can be return to the fun is known as first class fun 
//and first class citizen 

//Arrow Function-->

//what is call back function in js
//js is synchronous and single-threaded lang
//Blocking the main thread
//Power of callbacks
//deep about event listeners
//Scope demo with event listeners
//Garbage collection &removeEventlisteners