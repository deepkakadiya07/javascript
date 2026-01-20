// //word vs keywords

// // variable -- temp data store (ex. flipkart or amazon that save your data for buying purpose)

// //var, let and const -- line by line comparison
// // var (ES5)
// var a = "temp";
// var _123 = "hello";
// var $123 = "hello";
// // var 123 = "number"
// b = 24; //never use
// // let
// // let temp = "abc";
// // const
// const temp_const = "hello world !!";
// console.log(_123);

// // declare and initialization
// var d;
// var temp_d = 12; // declare and initialize for first time
// // var add value into window
// // var is function scoped
// // var can be redeclared and reassigned
// var name = "user name";
// let name1 = "username";

// //reassignment , redeclaration 
// var temp = 12;
// temp = "number";  //reassignment
// var temp = "24";  //redeclaration
// // let temp_a = 24;
// // var temp_a = 34; //you cant redeclar let variable
// // const temp_b = "name";
// temp_b = "username" //you can't reassign const variable

// //scope (global , block , functional)
// var e = 23;// gloabal scope
// console.log("global scope " + e);
// {
//     var e = 25; //block scope
//     console.log("block scope " + e);
// }
// function abc(){
//     var e = 30; //functional scope
//     console.log("functional scoppe " + e);
// }
// abc();
// console.log("Outside " + e)

// // scoping difference with let
// let f = 23;// gloabal scope
// console.log("global scope let variable" + f);
// {
//     let f = 25; //block scope
//     console.log("block scope let variable " + f);
// }
// function abc(){
//     let f = 30; //functional scope
//     console.log("functional scoppe let variable" + f);
// }
// abc();
// console.log("Outside let variable " + f)

// // scoping difference with let
// const g = 23;// gloabal scope
// console.log("global scope const variable" + g);
// {
// const g = 25; //block scope
//     console.log("block scope const variable " + g);
// }
// function abc(){
//     const g = 30; //functional scope
//     console.log("functional scoppe const variable" + g);
// }
// abc();
// console.log("Outside const variable " + g);

// // temporal dead zone (TDZ)
// console.log(h);
// var h = 24;

// //console.log(g);
// console.log(j);
// let j = 12;

// // hoisting Impact
// // hoisting --> when your craete a variable into js that break into two part first is declare part that go to up and there initialization part that go down 
// var temp_d = 12;
// //var temp_d; --> undefined; --> that go to up 
// // temp_d = 12; --> that go to down (means stuck into line 66)
// // if you use console.log before initialization that give you undefined;
// let temp_d_let = 24;
// //let variable not use before initialization 
// // if you use console.log before initialization that give you error;
// // hoisting Impact on var, let, const
// /*
// var --> hoist --> undefined
// let --> hoist --> error
// const --> hoist --> error
// */

// Example 1 :
// console.log(nm);
// let nm = "name";

// example 2:
console.log(b);
var b = "username";

// example 3:
var x = 1;
{
    var x= 2;
}
console.log(x);

// example 4:
let a = 10;
{
    let a = 20;
    console.log("Inside:", a);
}
console.log("Outside:", a);

// example 5:
const person = {name: "demo"}; 
console.log
person.name= "user";
person = {} ; 