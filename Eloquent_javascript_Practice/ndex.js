/** have to write this code using for loops in javascript :  
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */


// const num =Number(prompt("Enter Your Desired Number :  "));
// for(let line="#";line.length<=num;line+="#"){
//     console.log(line);
// }

const num=Number(prompt("Enter a number here:  "));
 let str="";
for(let innerLoop=0;str.length<=num;innerLoop++){
            str=str+"#";
           console.log(str);
        
}