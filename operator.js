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