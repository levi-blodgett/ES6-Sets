// SETS - Store a set of unique values of any type, primitive or reference, ALWAYS UNIQUE

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // Won't add, already there, has to be a unique value

// Add values to set another way
const set2 = new Set([1, true, 'Hello']);

// console.log(set1);
// console.log(set2);

// // Get count
// console.log(set1.size);

// // Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'John'})); // Returns false, this is a reference object, not primitive

// console.log({name: 'John'} === {name: 'John'}); // Pointing to a different location in memory since it is a reference object
// console.log('Hello' === 'Hello'); // Returns true, since it is a primitive value type

// Delete from set
set1.delete(100);

// console.log(set1);

// Iterate through sets
// For...of loop
for (let item of set1) {
  console.log(item);
}
console.log('');
for (let item of set1.entries()) {
  console.log(item);
}
console.log('');
for (let item of set1.keys()) {
  console.log(item);
}
console.log('');
for (let item of set1.values()) {
  console.log(item);
}

console.log('');

// ForEach loop
set1.forEach((value) => {
  console.log(value);
});

console.log('');

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);