function store_car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = { manufacturer: manufacturer, model: model };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            carInfo[key] = extra[key];
        }
    }
    return carInfo;
}
// Call the function with required information and two other name-value pairs
var car = store_car_info("Toyota", "Camry", { color: "Red" }, { year: 2023 });
// Print the returned object to ensure all information was stored correctly
console.log(car);
