// 2 conditon are use this Code 1st = true then print Yes 
// false then print NO!

const age = 19;

if (age >= 18) {
    console.log("Yes")
}
else {
    console.log("No!");
}


// now It's time to create some multiple Conditon Create 

// Say are you a Student and and marks 85 

const mark = 50;

if (mark >= 90) {
    console.log("You got an A");
}
else if (mark >= 80) {
    console.log("You Got an B");
}
else if (mark >= 70) {
    console.log("You Got an C");
}

else if (mark >= 50) {
    console.log("fail");
}

// weather temperatures in Celsius

const temperatures = 30;
const weather = temperatures > 27 ? "Cool" : "Hot";
console.log(`It's a ${weather} Day! `);
