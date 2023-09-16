// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping);
// console.log(shopping.length);

// shopping[0] = 'tahini';
// console.log(shopping);

const cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities.length); 
cities.unshift('Alipurduar');
console.log(cities);
console.log(cities.length);
const removedCity=cities.pop();
console.log(cities);
console.log(removedCity);

cities.push('Kolkata','Siliguri','Singur','solidity');
console.log(cities);

const reFirstEle = cities.shift();
console.log(reFirstEle);
console.log(cities);

const index= cities.indexOf('Singur');

if (index !== -1){
   let newCities = cities.splice(index,index+2);
}
console.log(cities);
console.log(newCities);

