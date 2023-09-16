const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText=`It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day`;

let insertX=["Willy the Goblin",
              "Big Daddy",
             "Father Christmas"];

let insertY=["the soup kitchen","Disneyland","the White House"];
let insertZ=["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];







randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  let xItem=randomValueFromArray(insertX);
  let yItem=randomValueFromArray(insertY);
  let zItem=randomValueFromArray(insertZ);


  if(customName.value !== '') {
    const name = customName.value;

  }else{
    const name='Bob'
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+" stones";
    const temperature =  Math.round((94-32)*5/9)+" celcius";

  }
  // else{
  //      const weight = Math.round(300)+" pounds";
  //     const temperature =  Math.round(94)+" farenheiht";
  // }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}

