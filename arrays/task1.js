const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
let bird=[];
const index = birds.indexOf('Eagles');
console.log(index);

if(index !==-1){
    bird=birds.splice(index,1);
}
console.log(bird);
console.log(birds);

let eBirds=birds.filter(function(b){
    return b.startsWith('E');
});
console.log(eBirds);