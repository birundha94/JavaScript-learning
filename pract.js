//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
// function invokeAfterDelay(invoke){
//     setTimeout(invoke,2000);
// }
// function invoke(){
//     console.log('callback invoked');
// }
// invokeAfterDelay(invoke);


//Write a JavaScript program that converts a callback-based function to a Promise-based function.
// function Promise(){

// }

//Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function setinter(fixinter){
    setInterval(fixinter,1000);
}
function fixinter(){
    console.log("intervel called");
}
setinter(fixinter);
