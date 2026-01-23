// operators
// arithmetic , comparison , logical , assignment ,unary, ternary, 
// Arithmetic :
// + , - , * , / , % ,**
// + --> add and cocatenation
// ex. 1+2 --> add  ans --> 3
// "user" + "name" --> concat  ans --> username
// 5 + "5" --> concat 55, 5 + 5 --> 10
// -
// ex. 2 - 1 ans --> 1
// /, *
// ex. 240/2, 25*2  ans --> 120, 50
// % (modules) (sheshfal) (reminder)
// ex. 12%4 --> 0
// ex. 9%2 --> 1
// ** (exponentiation) (square)
// ex. 2**3 --> 8

// comparison operators (ans : true, false)
// ==
// ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)
// ===
// ex. 12 === "12" (check type and value, strict comparison)
// !=
// ex. 12 != 13 (reverse of ==, not strict comparison)
// !==
// ex. 12 !== "12" (reverse of ===, strict comparison)
// >=
// 22 >= 22
// <=
// ex. 13 <= 13
// < 
// ex. 12 < 113, 12 < 9, 22 < 22
// > 
// ex. 12 > 113,12 > 9,13 > 13

// assignment operators
// =
// give a value , value assignment operator
// ex. let a = 12;
// +=
// ex. a += 3; (add value into old value and save it into a )
// -=
// ex. a -= 4 (subtract value from old value and save it into a )
// *=
// ex. a *= 2;
// /=
// ex. a /= 2;
// %=
// ex. a %= 2; (give remainder)

// logical operators
// && (and)
// ex. true && true --> true 12<13 && 14<15 --> true
// false && true --> false 12<10 && 14<15 --> false 
// true && false --> false 
// false && false --> false

// || (or)
// ex. true || true --> true
// false || true --> true
// true || false --> true
// false || false --> false

// ! (not)
// ex. !true --> false
// !false --> true
// !12 --> false --> !!12 --> true

// unary operators
// + - ! typeod ++ --
// +
// convert string to number 
// ex. +"5" --> 5
// +"\Name" --> NaN
// "5" + 5 --> 55
// +"5" + 5 --> 10
// -
// ex. -5
//!
// ex. !12 --> false
// typeof
// ex. typeof 12 --> number
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post ex. a++ a => 25
// ++a --> 13 // pre ex. ++a a => 26
// --
// ex. let a = 3;
// a--
// a++

// ternary operator
// ? :
// condition ? true thase to print thase : false thase to print thase 
// let a = 12 > 13 ? console.log("true") : console.log("false");

// typeof null --> object 
// typeof [] --> object, let a =[]; a instamceof array --> true
// instanceof --> check type of reference data types // don't use typeof for reference data types
// typeof NaN --> number
// typeof --> premetive data types mate use karvo 
// instanceof --> reference data types mate use karvo

// examples: 1
let x = 10;
let y = 20;
if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}

// examples: 2
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}

// examples: 3
let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}

// examples: 4
let a = 0;
if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}

// examples: 5
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);

// examples: 6
let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);

// examples: 7
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);

// examples: 8
let temp_a = 5;
temp_a++
console.log(temp_a);

// examples: 9
let b = 8;
++b;
console.log(b);

// examples: 10
let temp_b = 4;
let c = temp_b++;
console.log(temp_b, c);

// examples: 11
let d = 4;
let temp_c = ++d;
console.log(d, temp_c);

// examples: 12
let m = 10;
console.log(m--);
console.log(m);

// examples: 13
let n = 5;
let result = n++ + ++n;
console.log(result);

// examples: 14
let likes = 100;
function likePost(){
    likes++;
}
console.log(likePost());
console.log(likes);

// examples: 15
let count = 5;
if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}