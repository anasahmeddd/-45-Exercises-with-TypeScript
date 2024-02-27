// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("the shirt size is ".concat(size, " and this message: ").concat(message, " is printed on the shirt"));
}
;
// Making large shirt with default message
make_shirts();
// Making medium shirt with default message
make_shirts("Medium");
// Making a shirt of any size with a different message
make_shirts("Small", "Keep coding!");
