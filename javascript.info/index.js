//what are the datatypes in javascript ?
//there are mainly 4 types of data in javascript 
//       1.Numbers(Number)
//           --> there are some special numeric number called Infinity, -Infinity , NaN(Not a Number)
//       2. BigInit
//           --> in javascript numbers cannot store values larger than (2^53-1) or less than (2^53-1)for negatives 
//       3.Strings
//       4. Boolean

// let name= "Sudeepa"
// alert(`Hello ${name} Welcome in our course !`);
// alert(`The result is ${1+2}`);
// console.log("okay");
//


///Inline javascript handlers

// function createPara(){
//     document.body.appendChild(document.createElement("h1").textContent("You clicked the button"));
// }

//**** Not the right way to append  */

/** Again the wrong way to do this */
// function createPara(){
//     const a=document.createElement("h1").textContent("You clicked the button");
//     document.body.appendChild(a);
// }

function createPara(){
    const app = document.createElement("h1");
    app.textContent="Hello There!";
    document.body.appendChild( app);
}