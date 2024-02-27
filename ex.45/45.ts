// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.




function store_car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]){
    let carInfo = { manufacturer: manufacturer, model: model };
    for (let extra of extras) {
        for (let key in extra) {
            //adding extra values to carInfo if there is any
            carInfo[key] = extra[key];
        }
    }
    return carInfo;
}

//Call the function with the required information and two other name-value pairs, such as a color or an optional feature
let car = store_car_info("Toyota", "Camry", {color: "Red"}, {year: 2023}) ;

// Print the Object that’s returned to make sure all the information was stored correctly.
console.log(car);