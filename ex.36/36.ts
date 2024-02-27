// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


function make_shirt(size:string,message:string) {
    console.log(`the shirt size is ${size} and this message: ${message} is printed on the shirt`);
};



//two way of calling function
let size = "large";
let message = "Hello, World";

make_shirt(size, message);
//OR
make_shirt("large", "Hello, World");