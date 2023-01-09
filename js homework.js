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









