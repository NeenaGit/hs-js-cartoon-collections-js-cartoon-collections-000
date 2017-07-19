function dwarfRollCall(dwarfs){
var dwarfList = []
    for ( var i = 0; i < dwarfs.length; i++){
        dwarfList.push(`${i+1}. ${dwarfs[i]} `)

    }

    return dwarfList.join('')
}

function summonCaptainPlanet(planeteerCalls){
  var upperPlaneteerCalls = [];

   for (var i = 0; i < planeteerCalls.length; i++) {
   upperPlaneteerCalls.push(planeteerCalls[i].toUpperCase() + "!");
   }
   return upperPlaneteerCalls
}


function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if(words[i].length > 4){
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {

 const cheese = ['cheddar',  'gouda', 'camembert'];
 // find that works with arrays
 // includes function that also works with arrays

 // find is an iterator that takes in a function definition to pass in the parameter(callback)
 // inside the function(callback it checks if each food is included in the cheeese array)
 // if it is included, cheese.includes(food) will return true, which will stop the find function
 // and return us the element(food) that it is currently iterated on and set it to our food variable

 var food = foods.find(function(food){
   return cheese.includes(food)
 })

 // if food is set to an element based on the return value of find
 if (food) {
   // we return true
   return food

 } else {
   // else find would have returned nothing / null, and it will return no cheese!
   return 'no cheese!'
 }
}
