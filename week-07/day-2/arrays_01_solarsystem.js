'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// bonus for using some built in methods

var planetList = ["Mercury","Venus","Earth","Mars","Jupiter","Uranus","Neptune"];

// planetList = planetList.split()
var planetList2 = planetList.splice(6, 0, 'Saturn');
console.log(planetList)
