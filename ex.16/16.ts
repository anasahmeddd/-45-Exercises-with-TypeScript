
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.




let oldguests: string[] = ["majid","rizwan","waseem"];
console.log("good news! We found a bigger dinner table!");
oldguests.unshift("rauf");

const middleIndex = Math.floor(oldguests.length / 2);
oldguests.splice(middleIndex, 0, "shadab");

// append() giving error
oldguests.push("hassan");


oldguests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner at my place.`);
});