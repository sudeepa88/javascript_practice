const birds = ['Parrot', 'Falcon', 'Owl'];

for (const a of birds) {
  console.log(a);
}
console.log('\n');
///////////////////////////-----------------------------------------
function double(number) {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled);  // [ 10, 4, 14, 12 ]
  console.log('\n');
  //--------------!


  function isLong(city) {
    return city.length > 8;
  }
  const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
  const longer = cities.map(isLong);
  console.log(longer);  // [ "Liverpool", "Edinburgh" ]
  
  //////////filter() 
  