// Function to convert miles to kilometers
function milesToKm(miles) {
    // 1 mile equals 1.60934 kilometers
    const conversionRate = 1.60934;
    
    // Multiply miles by conversion rate to get kilometers
    const kilometers = miles * conversionRate;
    
    // Return the result rounded to 2 decimal places
    return Number(kilometers.toFixed(2));
}

// Function to convert kilometers to miles
function kmToMiles(kilometers) {
    const conversionRate = 0.621371;  // 1 km = 0.621371 miles
    const miles = kilometers * conversionRate;
    return Number(miles.toFixed(2));
}

// Function to convert feet to meters
function feetToMeters(feet) {
    const conversionRate = 0.3048;    // 1 foot = 0.3048 meters
    const meters = feet * conversionRate;
    return Number(meters.toFixed(2));
}

// Function to convert meters to feet
function metersToFeet(meters) {
    const conversionRate = 3.28084;   // 1 meter = 3.28084 feet
    const feet = meters * conversionRate;
    return Number(feet.toFixed(2));
}

// Modify the convert function to accept an object
function convert(data) {
    // Destructure the object into individual variables
    const { value, fromUnit, toUnit } = data;
    
    // Make units lowercase to handle different cases
    const from = fromUnit.toLowerCase();
    const to = toUnit.toLowerCase();
    
    // Check which conversion to perform
    if (from === "miles" && to === "km") {
        return milesToKm(value);
    } else if (from === "km" && to === "miles") {
        return kmToMiles(value);
    } else if (from === "feet" && to === "meters") {
        return feetToMeters(value);
    } else if (from === "meters" && to === "feet") {
        return metersToFeet(value);
    } else {
        return "Conversion not supported";
    }
}

// Example usage with objects:
const example1 = {
    value: 20,
    fromUnit: 'miles',
    toUnit: 'km'
};

const example2 = {
    value: 5,
    fromUnit: 'km',
    toUnit: 'miles'
};

console.log(`${example1.value} ${example1.fromUnit} =`, 
    convert(example1), example1.toUnit);  // Output: 10 miles = 16.09 km

console.log(`${example2.value} ${example2.fromUnit} =`, 
    convert(example2), example2.toUnit);  // Output: 5 km = 3.11 miles
