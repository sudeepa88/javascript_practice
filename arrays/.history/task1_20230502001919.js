const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
let bird=[];
const index = birds.indexOf('Eagles');


if(index !==-1){
    bird=birds.splice(index,index+1);
}