// Different Types of Loops in JavaScript

// Sample data to work with
const numbers = [1, 2, 3, 4, 5];
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 }
];

// 1. For Loop (Traditional)
console.log('--- Traditional For Loop ---');
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

// 2. For...of Loop (Modern, for iterating arrays)
console.log('\n--- For...of Loop ---');
for (const number of numbers) {
    console.log(`Number: ${number}`);
}

// 3. For...in Loop (for iterating object properties)
console.log('\n--- For...in Loop ---');
const person = { name: 'John', age: 30, city: 'New York' };
for (const property in person) {
    console.log(`${property}: ${person[property]}`);
}

// 4. While Loop
console.log('\n--- While Loop ---');
let counter = 0;
while (counter < 5) {
    console.log(`Counter: ${counter}`);
    counter++;
}

// 5. Do...While Loop (executes at least once)
console.log('\n--- Do...While Loop ---');
let dice = 0;
do {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(`Dice roll: ${dice}`);
} while (dice !== 6);

// 6. forEach Method (Array method)
console.log('\n--- forEach Loop ---');
students.forEach((student, index) => {
    console.log(`Student ${index + 1}: ${student.name} - Grade: ${student.grade}`);
});

// 7. Practical Example: Calculating Average Grade
console.log('\n--- Practical Example: Average Grade ---');
let totalGrade = 0;
for (const student of students) {
    totalGrade += student.grade;
}
const averageGrade = totalGrade / students.length;
console.log(`Average Grade: ${averageGrade}`);

// 8. Break and Continue
console.log('\n--- Break and Continue Example ---');
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        console.log('Skipping number 2');
        continue; // Skip the rest of this iteration
    }
    if (i === 4) {
        console.log('Found number 4, stopping loop');
        break; // Exit the loop entirely
    }
    console.log(`Number: ${i}`);
}

// 9. Nested Loops
console.log('\n--- Nested Loops Example ---');
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
    let rowString = '';
    for (let col = 0; col < matrix[row].length; col++) {
        rowString += matrix[row][col] + ' ';
    }
    console.log(rowString.trim());
} 