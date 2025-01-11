// Basic Data Types in JavaScript

// 1. Numbers
const integer = 42;
const float = 3.14;
const negative = -10;

// 2. Strings
const singleQuotes = 'Hello World';
const doubleQuotes = "Hello World";
const templateLiteral = `The number is ${integer}`; // String interpolation

// 3. Booleans
const isTrue = true;
const isFalse = false;

// 4. Undefined and Null
let undefinedVariable;  // undefined by default
const nullValue = null;

// 5. Arrays (ordered collections)
const fruits = ['apple', 'banana', 'orange'];
const mixedArray = [1, 'hello', true, { name: 'John' }];

// 6. Objects (key-value pairs)
const person = {
    name: 'Alice',
    age: 25,
    isStudent: true,
    hobbies: ['reading', 'coding'],
    address: {
        street: '123 Main St',
        city: 'Boston'
    }
};

// 7. Functions (which are also objects in JavaScript)
function greet(name) {
    return `Hello, ${name}!`;
}

// 8. Date object
const today = new Date();

// Examples of accessing and modifying data
console.log('Array element:', fruits[0]);  // Accessing array element
console.log('Object property:', person.name);  // Accessing object property
console.log('Nested object:', person.address.city);  // Accessing nested object
console.log('Function call:', greet('World'));  // Calling a function

// Adding to arrays
fruits.push('grape');
console.log('Updated array:', fruits);

// Modifying objects
person.age = 26;
person.email = 'alice@example.com';  // Adding new property
console.log('Updated person:', person); 