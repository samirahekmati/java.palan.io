console.log(`coding is my job,cooking is my passion!`);
//console.log('coding is my job!s')

//window.alert(`This is an alert!`);

document.getElementById(`myH1`).textContent =`Hello!`;
//document.getElementById(`myp`).textcontent = `coding is my job, cooking is my passion.`;

//  VARIABLES
//  1. declaration  let x;
//  2. assignment   x = 100;

let x 
x = 100;
console.log(x);
console.log(x+100);



let gpa = 3.5;
let salary = 50000;
let price = 10.99;

console.log(`your salary is ${salary}.`);
console.log(`The price is $${price}.`);
console.log(`your gpa is ${gpa}`);



//to create a string you can use '' or "".
let firstName = "sim";
console.log(typeof firstName);
console.log(firstName);
console.log(`your name is ${firstName}.`)

//boolean 

let sunny = true;

console.log(sunny);
console.log(typeof sunny);
console.log(`the weather is sunny: ${sunny}`);

let forSale = true;
console.log(`is this car for sale: ${true}`);

let isStudent = false;
console.log(`is she a student: ${isStudent}`);

let fullName = 'Samira Hekmati'
//let age = '33';
let student = false;

document.getElementById("p1").textContent = `your name is ${fullName}.`;
//document.getElementById("p2").textContent = `you are ${age} years old.`;
document.getElementById("p3").textContent = `you are student: ${student} `;


//let students = 30;

//students = students + 1;
//students = students * 2;
//students = students / 2 ;
// power: students = students ** 2;
// remainder students = students % 2
//students +=1;;
//students -=1;
//students *=2;
//students /=2;
//students **=2;
//students %=2;
//students++;
//students--
//console.log(students);


/*operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division & modulo
4. addition & subtraction
*/

//let result = 1 + 2 * 3 + 4 ** 2;
//console.log(result);




let grade;
grade = 55;
if (grade < 40) {
    console.log('you do not pass the exam.')
}
 if (grade >=40 && grade < 45){
    console.log('you do dont pass the exam but you can enter the test again')
}
//or you could say: else if()
else {
    console.log('congrates, you pass the test!')
}




 let age 
 age = 23
 if (age < 18) {
    console.log('cannot enter the cafe')
 }
 else if ( age < 23) {
    console.log( 'you can enter the cafe but you cannot drink alcohol')
 }
 else {
    console.log('you can drink alcohol in the cafe.')
 }

 //if (age < 18) {
    //console.log( 'cannot enter')
 //}
 //if ( age < 23){
    //console.log( 'you can enter the cafe but cannot drink alcohol')
 //}
 //else {
    //console.log('you can enter the cafe and drink')
 //}



 /* turnary operator:
 is like conditionla statements but is just one line*/

 let score = 45;

 score < 50 ? console.log('not pass') : console.log( ' pass');

 let result = score < 50 ? 'failure' : 'success';
 console.log(result);
 //or:  if (score < 50){
    //(result = 'failure')
    //}
    //else {
        //(result = 'sucess')
    //}
    //console.log(result)


    //switch case statements

/*
Alex, Sara and Nancy are in the same class.
In math class, Alex's grades are 90, 80,95.
Sara's grades are 89,76,98
Nancy's grades are42,98,83
1.Calculate the average score for each student, then save that value
into a variable.
2. Find the highest average and then console log the student who has
the highest average
3.Averages may be the same.
*/

const alexGrade = (90 + 80 + 98) / 3 ;
const saraGrade = (89 + 76 + 98) / 3;
const nancyGrade = (42 + 98 + 83) / 3;

console.log('Alex average grade', alexGrade);
console.log('Sara average grade', saraGrade);
console.log('Nancy average grade', nancyGrade);

if (alexGrade > saraGrade && alexGrade > nancyGrade) {
   console.log('Alex has the highest average', alexGrade);
} else if(saraGrade > alexGrade && saraGrade > nancyGrade) {
   console.log('Sara has the highest average', saraGrade);
} else if (nancyGrade > saraGrade && nancyGrade > alexGrade) {
   console.log('Nancy has the highest average', nancyGrade);
} else {
   console.log('every body has the same average');
}

/////////////////// LOOPS (Repetitive Situations)//////////////////////
/*
Print numbers from 1 to 10 on the console
(This is where loops come into play.)
DRY = DO NOT REPEAT YOURSELF
*/

/////////////////// WHILE LOOPS ///////////////////
/*Makes the code repeat as soon as certain situation is correct
 while (situation){
//If the situation is correct,it will run the code here.
 }
*/

console.log('one to ten');
let number = 1; //dose not work with const

while (number < 11){
   console.log(number);
   number++; //number = number + 1
}

 /////only EVEN NUMBERS/////
/*while ( number <20) {
   console.log(number++);
   number++; 
}*/



/*///////// WHILE LOOPS QUIZ /////////.
1. Print even numbers from 132 to 148 on the console
2. Print numbers between 25 and 100, divisible by 7, to the console
*/

/*let adad = 132;

while ( adad <= 148){
   console.log(adad);
   adad +=2;
}*/


console.log('even numbers from 132 to 148');
let dade = 132;

while (dade < 148){
   if(dade % 2 === 0 ){
   console.log(dade);
   }
   dade++;

}
 

console.log('numbers divisable by 7');
let adad = 25;
while (adad < 100){
   if ( adad % 7 ===0){
      console.log(adad);
   
   }
   adad++;
}

