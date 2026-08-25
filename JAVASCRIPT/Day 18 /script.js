// Build a String Formatter 

// now it's time to Recap the all Code whats's Going on the code so let's start.

const userInput = "   Hello World!   ";  // declare the Variable
console.log("Original input:"); // terminal output just String 
console.log(userInput);  // Output variable Store the int

const cleanedInput = userInput.trim(); // now it's time to Space remove for String i all so use trim() fucntion
console.log("Result of trimming whitespace from both ends:"); // terminal output just string
console.log(cleanedInput); // show the output console.log() 

const trimmedStart = userInput.trimStart(); // White Space remove Start of the sentace
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd(); // A String White space remove the sentace End
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd); 

const upperCaseInput = cleanedInput.toUpperCase();  // All text ar convarte the Uppercase text
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase(); // All text ar convarte the Lowercase text
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);  //  text ar slice frist brack and then concat and last again slice () function use.
console.log("Camel cased version:");
console.log(camelCasedVersion);





// How Can You Replace Parts of a String with Another?

const sentance = "I enjoy working with JavaScript.";
console.log(sentance);
const updateSentance = sentance.replace("JavaScript",  "Coding");
console.log(updateSentance);