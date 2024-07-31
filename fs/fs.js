// const fs=require('fs');
// console.log('start');
// let data=fs.readFileSync('text1.txt');
// console.log('file of data 1 is ',data.toString());
// console.log("end");


// const fs=require('fs');
// console.log('start');
// fs.readFile('text1.txt',function (error,data){
//     if(error){
//         console.log("Some error ocurred")
//         return ;
//     }
//     console.log('data of text1',data)
//     fs.readFile('text2.txt',function (error,data){
//         if(error){
//             console.log("Some error ocurred")
//             return ;
//         }
        
//             console.log('data of text2',data)
//             fs.readFile('text.txt',function (error,data){
//                 if(error){
//                     console.log("Some error ocurred")
//                     return ;
//                 }
                
//                     console.log('data of text3',data)
                
//             });
//     });




function one(a){
    console.log('1');
    a();
}
function two(){
    console.log('2');
}
one(two);
   
    

//console.log('end');

