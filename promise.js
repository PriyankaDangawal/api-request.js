// const pobj= new Promise( (resolve,reject) =>{
//     setTimeout( () =>{
//         let roll_no= [1,2,3,4,5];
//         // resolve(roll_no);
//         reject("while communicating error")
//     }, 2000);

// });
// pobj.then( (rollno) =>{
//     console.log(rollno);
// }).catch((error)=>{
//     console.log(error)
// })

// function getname(name, callback){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("inside name function")
//             resolve(name);
//         }, 2000)
//     })
// }
// function gethobbies(name, callback){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("inside hobbie function")
//             resolve (["cricket,reading, hobbie"]);
//         }, 1000)
//     })
// }
// getname("sonam")
// .then(nm=>gethobbies(nm))
// .then(hobby=> console.log(hobby))

// setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// function myFunction(value) {
//   var innerHTML = value;
// }console.log(value)
function myDisplayer(some) {
    var value= some;
  }
  

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
console.log(myDisplayer(value))
  