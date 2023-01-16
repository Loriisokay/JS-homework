// Lesson 12. Homework.

//Task 1. 

let a = prompt('Enter 2 numbers to find their avarage. Ex: 2 5');
let b = a.split(' ');

function countAvarage () {
    if (b.length > 2) {
        alert('You must enter 2 numbers only');
    } else {
        let avarage = (Number(b[0]) + Number(b[1])) / 2;
        console.log(avarage);
    }  
}

countAvarage();


// Task 2. 

let c = prompt('Enter 2 numbers to get the remainder');
let d = c.split(' ');

function getRemainder () {
    if (d.length > 2) {
        alert('You must enter 2 numbers only');
    } else {
        let remainder = d[0] % d[1];
        console.log('The remainder is ' + remainder);
    }
}

getRemainder();


//Lesson 13. Homework. 

// Task 1

// For loop
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// Do while loop
let i = 1;
do {
    console.log(i);
    i++;
} while ( i < 6)

// While loop 
let i = 1;
while (i < 6) {
    console.log(i);
    i++
}


// Task 2.

// For loop
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// While loop
let i = 5;
while(i < 6 && i > 0) {
    console.log(i);
    i--;
} 

// Do while loop
let i = 5;
do {
    console.log(i);
    i--;
} while (i < 6 && i > 0);


//Task 3. 

// For loop
for (let i = 1; i < 11; i++) {
    console.log(i + " * 3 = " + i * 3);
}

// While loop
let i = 1;
while (i < 11) {
    console.log(i + " * 3 = " + i * 3);
    i++;
}

// Do while loop
let i = 1;
do {
    console.log(i + " * 3 = " + i * 3);
    i++;
} while ( i < 11);


// Task 3.

// For loop
let digit = prompt("Enter a positive number: ");

if (digit > 0) {
    let result = 1;
    for (let i = 1; i < digit - 1; i++) {
        result++;
        result += i;
    } 
    console.log('The sum of all the numbers before ' + digit + ' is - ' + result);
}

// Lesson 14. Homework. 

// Task 1. 

let odd = [];
for (let i = 1; i < 99; i += 2) {
    odd.push(i);
}

console.log(odd);

// Task 2.

let even = [];
for (let i = 2; i < 21; i += 2) {
    even.push(i);
}

console.log(even);

// Task 3. 

let even = [];
for (let i = 2; i < 21; i += 2) {
    even.push(i);
}

for (let i = 0; i < 1; i++) {
    for (let j = 1; j < even.length; j++) {
        even[i] = even[i] + even[j];
        sum = even[i];
    }
}

console.log(sum);

// Lesson 15. Homework. The (almost) infinite calculator with simple functions

main()

function main() {
    
    while (true) {
        const expression = promptUser();

        // Let's make sure that the calculator works in cases when a user enters math expression without white spaces
        const operators = ["+" , "-", "*", "/"];
        let split = expression.replace(new RegExp('\\' + operators.join('|\\'), 'g'), ' $& ');
        split = split.split(" ");
        split = split.filter(filterWhiteSpaces);

        // Let's assign values
        const firstDigit = parseInt(split[0]);
        const secondDigit = parseInt(split[2]);
        const operator = split[1];
        let result = 0;

        if (expression == "STOP") {
            break;
        } else if (Number.isInteger(secondDigit) != true || Number.isInteger(firstDigit != true)) {
            message("You have to type math expression");
        } else if (operator == "+") {
            result = add(firstDigit, secondDigit);
            message(result);
        } else if (operator == "-") {
            result = subtract(firstDigit, secondDigit);
            message(result);
        } else if (operator == "*") {
            result = multiply(firstDigit, secondDigit);
            message(result);
        } else if (operator == "/") {
            result = divide(firstDigit, secondDigit);
            message(result);
        } else if (operator != "+" || operator != "-" || operator != "*" || operator != "/") {
            message("Unknown operator");
        }
    }
}

function promptUser () {
    const data = prompt("Enter math expression you want to count (type 'stop' if you want to leave the program): ").toUpperCase();
    return data;
}

function filterWhiteSpaces (str) {
    // returns an array with elements that != " "
    return /\S/.test(str);
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function message (number) {
    alert(number);
}

// Lesson 16.Homework.

let sapsanStudent = {
    name: "Saule",
    surname: "Nazarbayeva",
};

sapsanStudent.name = "Akmaral";

delete sapsanStudent.name;

function isEmpty(obj) {
        if(JSON.stringify(obj) == '{}') {
            return true;
        } else {
            return false;
        }
}

isEmpty(sapsanStudent);

const myFamily = {
    me: {
        firstName: "Larissa",
        lastName: "Lee",
        hobby: "reading"
    },
    pet: {
        species: "cat",
        breed: "persian",
        color: "ginger",
        hobby: "sleeping"
    }
}





