var animals = ['Ant', 'Antelope','Baboon','Bat','Beagle', 'Bear','Bird','Butterfly','Cat','Caterpillar'];

// to check by index value
console.log(animal[0]);
console.log(animal[1]);
console.log(animal[2]);
console.log(animal[3]);
console.log(animal[4]);
console.log(animal[5]);
console.log(animal[6]);
console.log(animal[7]);
console.log(animal[8]);
console.log(animal[9]);

// length of Array
console.log(animal.length);

// Push is use to add the element at the end of array
animals.push('Dog');
console.log(animals);

// Pop is use to delete the the element at the end of array
animals.pop();
console.log(animals);

// Unshift is use to add element at the begining
animals.unshift('Dog');
console.log(animals);

// Shift is use to delete element from the begining
animals.shift();
console.log(animals);

// Splic is use to changes the contents of an array by removing or replacing existing elements

// to add or inserting the element
animals.splice(6,0, 'Dog');
console.log(animals);

// to delete the element
animals.splice(3,2);
console.log(animals);


// Concat is use to merge two or more arrays
var animals = ['Ant', 'Antelope','Baboon','Bat','Beagle', 'Bear','Bird','Butterfly','Cat','Caterpillar'];
var updated = ['Deer','Bee','Sheep','Fish'];

var latest = animals.concat (updated);
console.log(latest);

var latest = updated.concat (animals);
console.log(latest);

// Reverse method reverses an array in place
animals.reverse();
console.log(animals);






