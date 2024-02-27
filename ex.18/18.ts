// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let countries = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "Grand Canyon"];


console.log("Original order:");
console.log(countries);


console.log(" Alphabetical order:");
console.log([...countries].sort());


console.log(" Original order :");
console.log(countries);

console.log(" Reverse alphabetical order:");
console.log([...countries].sort().reverse());


console.log(" Original order :");
console.log(countries);


countries.reverse();
console.log(" Reversed order:");
console.log(countries);


countries.reverse();
console.log(" Back to original order:");
console.log(countries);


countries.sort();
console.log(" Sorted in alphabetical order:");
console.log(countries);


countries.sort((a, b) => b.localeCompare(a));
console.log(" Sorted in reverse alphabetical order:");
console.log(countries);