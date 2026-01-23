// control flow startments in JavaScript

// if-else statement (if ,if else , id else-if else)
// if (condition) {} --> condition true hoy to {} code run
if (12<13){
    console.log(true);
}

if (15<13){
    console/log(true);
} // condition is false that why if statement code not run

if (!12) {
    // 12--> true. !12 --> false
    console.log("number");
}

if(!0){
    console.log("number");
}

// if-else statement
if (12 > 13) {
    console.log(true);
} else {
    console.log(false);
}

if(15< 13){
    console.log(true);
} // condition is false that why if statement code not run
else{
    console.log(false); // if if statement is false then run this code 
}

if(!12) {
    console.log("number");
}else{
    console.log("not a number");
}

let age = 20;
if (age>18){
    console.log("adult");
}else{
    console.log("not adult");
}

let login = false;
let admin = true;
if (login && admin){
    console.log("welcome admin");   
}else if (login){
    console.log("welcome user");
}else{
    console.log("go to login");
}

// let score;
// score = prompt("Enter your score:");
// score = Number(score);  
// if (score >= 90){
//     console.log("A+");  
// }else if (score >= 80){
//     console.log("A");
// }else if (score >= 70){
//     console.log("B");
// }else if (score >= 60){
//     console.log("C");
// }else{
//     console.log("D");
// }

// switch case statement
switch("BOGO") //value --> case value sathe match karshe ane code run thase
{
    case "First50":
        console.log("50% off on first order");
        break;
    case "BOGO":
        console.log("Buy one get one free");
        break;
    case "BlackFriday":
    console.log("it's black friday sale - get at rs.50");
    break;
    default:
        console.log("offer not valid");
}

// switch(grade)
// {
//     case "A+":
//         console.log("Excellent");
//         break;
//     case "A":
//         console.log("Very Good");
//         break;
//     case "B":
//         console.log("Good");
//         break;
//     case "C":
//         console.log("Average");
//         break;
//     default:
//         console.log("Poor");
// }

// early return pattern
function score(value){
    if (value >= 90){
        return "value is more than 90";
    }else if (value >= 80){
        return "value is more than 80";
    }else if (value >= 70){
        return "value is more than 70";
    }else if (value >= 60){
        return "value is more than 60";
    }else{
        return "value is less than 60";
    }
}
score(100);
// console.log(score(100));

function score1(value){
    if (value >= 90) return "value is more than 90";
    else if (value >= 80) return "value is more than 80";
    else if (value >= 70) return "value is more than 70";
    else if (value >= 60) return "value is more than 60";
    return "value is less than 60";
}   
// score1(50);
// // console.log(score1(50));


// Example 1 :
let x = 2;
switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}

// Example 2 :
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } else if (score >= 80 && score <= 89) {
        return "A";
    } else if (score >= 70 && score <= 79) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 33 && score <= 59) {
        return "D";
    } else if (score >= 0 && score <= 32) {
        return "Fail";
    } else {
        return "Invalid Marks";
    }
}

// Example 3 : Rock, Paper, Scissors game
let player1 = "rock";
let player2 = "scissors";

if (player1 === "rock" && player2 === "scissors") {
    console.log("rock wins");
} else if (player1 === "scissors" && player2 === "rock") {
    console.log("rock wins");
} else if (player1 === "paper" && player2 === "rock") {
    console.log("paper wins");
} else if (player1 === "rock" && player2 === "paper") {
    console.log("paper wins");
} else if (player1 === "scissors" && player2 === "paper") {
    console.log("scissors wins");
} else if (player1 === "paper" && player2 === "scissors") {
    console.log("scissors wins");
} else if (player1 === player2) {
    console.log("It's a tie");
} else {
    console.log("Invalid input");
}
