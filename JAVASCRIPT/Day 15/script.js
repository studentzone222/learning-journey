// What is ASCII (American Standard Code for Information Interchange)

//  Every Singel Charcter are Hiden Number provide

//  let's try it How can it's that work

let letter ="0";
let letterOne ="1";
let letterTwo ="2";
let letterThree ="3";
let letterFour ="4";
let letterFive ="5";
let letterSix ="6";
let letterSeven ="7";
let letterEight ="8";
let letterNine ="9";
let letterTen ="A";

let l = String.fromCharCode("65");
console.log(l);
let lll = String.fromCharCode("97");
console.log(lll);

let ll = "a";
console.log(ll.charCodeAt(0));

console.log(letter.charCodeAt(0))
console.log(letterOne.charCodeAt(0));
console.log(letterTwo.charCodeAt(0));
console.log(letterThree.charCodeAt(0));
console.log(letterFour.charCodeAt(0));
console.log(letterFive.charCodeAt(0));
console.log(letterSix.charCodeAt(0));
console.log(letterSeven.charCodeAt(0));
console.log(letterEight.charCodeAt(0));
console.log(letterNine.charCodeAt(0));
console.log(letterTen.charCodeAt(0));





let sentance ="The first thing Kamila Okonkwo noticed about the orders from Willowbrook Retirement Village was their peculiar precision. Every Tuesday: two portions of sweet and sour chicken, one spring roll, jasmine rice.";
let resultSentance = sentance.includes("orders");
let resultSentanceTwo = sentance.includes("kd");
console.log(resultSentance);
console.log(resultSentanceTwo);


console.log(sentance.charCodeAt(0));

let sentanceToWord = String.fromCharCode("84");
console.log(sentanceToWord);



const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);
const hasJavaScript = fccSentence.includes("JavaScript");


console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);