// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirts(size:string = "large",message:string="I Love Typescript") {
    console.log(`the shirt size is ${size} and this message: ${message} is printed on the shirt`);
};


// Making large shirt with default message
make_shirts();

// Making medium shirt with default message
make_shirts("Medium");

// Making a shirt of any size with a different message
make_shirts("Small", "Keep coding!");