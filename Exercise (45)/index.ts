// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function createCar(manufacturer: string, modelName: string, ...otherOptions: [string, any][]): { manufacturer: string, modelName: string, [key: string]: any } {
    let car: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (let [key, value] of otherOptions) {
        car[key] = value;
    }

    return car;
}

let car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

console.log(car);
