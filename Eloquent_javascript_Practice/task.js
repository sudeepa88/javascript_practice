const num = Number(prompt("Enter Your Desired Number : "));
let str="";
for(let outerLoop=0;outerLoop<num;outerLoop++){
for(let innerLoop=0;str.length<=num; innerLoop++){
    str=str+"#";
}
console.log(str);
}