let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
myArray.pop();
myArray.push('Camelia','Debosmita');
console.log(myArray);

let muls=myArray.map(function(ino,n){
    return ino+" ("+myArray+")";
  });
  console.log(muls);