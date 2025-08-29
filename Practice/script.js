/* What Number's Bigger? */

let number1 = 10;
let number2 = 20;

if (number1 < number2) {
    console.log(`The greater number of ${number1} and ${number2} is ${number2}.`);
} else {
    console.log(`The greater number of ${number1} and ${number2} is ${number1}.`);
}

let number3 = 20;
let number4 = 10;

if (number3 < number4) {
    console.log(`The greater number of ${number3} and ${number4} is ${number4}.`);
} else {
    console.log(`The greater number of ${number3} and ${number4} is ${number3}.`);
}


/* The World Translator */

let value = "ru";

switch (value) {
    case "es":
        console.log("Hola Mundo");   // Spanish
        break;
    case "de":
        console.log("Hallo Welt");   // German
        break;
    case "en":
        console.log("Hello World");  // English
        break;
    default:
        console.log("Hello World");  // Default to English
}

/* The Pluralizer */

let noun = "cat";
let number = 5;

if (number === 1) {
    console.log(`${number} ${noun}`);
} else {
    if (noun === "sheep") {
        console.log(`${number} sheep`);
    } else if (noun === "goose") {
        console.log(`${number} geese`);
    } else {
        console.log(`${number} ${noun}s`);
    }
}