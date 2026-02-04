// // functions
// // what --> function is a block of code that performs a specific task.
// // why --> to avoid code repetition and to make code modular and reusable.
// // how --> function keyword,name,parameters,body,return statement

// function temp_cart(){
//     console.log("adding producat");
// }
// temp_cart();
// temp_cart();
// temp_cart();


// // parameters and arguments
// // parameters are the names listed in the function definition
// // (params --> () ni andar lakheli value)
// // arguments are the real values passed to the function (args --> function call krti() ni andar lakheli(pass) karelu values)

// function cart(producat){
//     // product -- params
//     console.log("product" , producat)
// }

// cart("Mobile"); // mobile -- argument
// cart("Laptop"); 
// cart("Tablet");

// // type of functions:{} --> function declaration
// function abc() {}
// // let fnc = function (){} --> function expression
// let fnc = function (){};
// // let fnc = () => {} --> arrow function --> fat arrow function
// let fnc1 = () => {};

// // convert into function expression
// // let cart1 = () => {}



// // default, rest and spread parameters 
// // default
// function abc(v1, v2){
//     console.log(v1, v2);
// }
// abc(20,21);

// function cart3(product = "product", price = "price"){
//     console.log(product, price) 
// }
// cart3("Mobile", 20000);


// function abcd(v1,v2){
//     console.log(v1,v2);
// }

// abcd(1,2,3,4,5);

// function cart4 (...product){
//     console.log(product);
// }
// cart4("p1","p2","p3","p4","p5");

// // return or early return
// function temp_fnc(){
//     if (10>9) return "true";
// }
// temp_fnc();

// // first class functions:
// // function can be treated as variables 
// // let fnc = function (){}
// // let fnc = () => {}
// let buyNow1 = function (product, price){
//     console.log(product, price)
// }
// buyNow1("S24 FE", 50500);

// convert into arrow function
// let buyNow2 = (product, price) => {
//     console.log(product, price)
// }
// buyNow2("S24 Ultra", 105500);

// // function can be passed as arguments to other functions
// // let fnc = function(){}
// // fnc(function(){})
// function abc1(v1, v2){
//     console.log(v2);
//     return v1();
// }
// abc1(function(){
//     console.log("first class function")
// },"hello")

// function abc2(v1, v2){
//     return v1();
//     console.log(v2);
// }
// abc2(function(){
//     console.log("first class function")
// }, "hello")


// // function can be returned from other functions
// function


// //higher order function (HOF)
// // function thta takes another function as an argument or returns a function as a resulr (eva function je return kare ek function athava accept kre ek function params ma )
// // function abcd(val){val();}
// // --> abcd(function(){console.log("hello")})
// // function abcd(val){} --> higher order function

// // function abcd(){ return function(){} } abcd()() --> higher order 

// // pure vs impure function 
// // pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function baar na stare ne modify na kare )
// let a =

//  Example 1: 
// what's the difference between function declaration and function expression in terms of hoisting?
// Ans and Why: Function declarations are hoisted, meaning they can be called before they are defined in the code. Function expressions, on the other hand, are not hoisted, so they cannot be called before they are defined.


// example 2:
greet();
function greet(){
    console.log("Hello!");
} // Ans or Err and Why: 
// The function will print "Hello!" to the console. This is because function declarations are hoisted, allowing them to be called before their definition in the code.

// Example 3: 
// Convert normal function to Arrow Function
// function add(a, b){
//     return a + b;
// }

let add1 = (a, b) => {
    return a + b;
}
console.log(add1(2,3));

// Example 4:
// Identify what is parms and what is args
function welcome(name){
    console.log("Welcome " + name);
}
welcome("user");  // -- name is param, user is arg
// why : name is the parameter that the function expects, and "user" is the argument that is passed to the function when it is called.

// example 5:
// how many parameters and args
function temp (a, b, c){
    console.log(a,b,c);
}
temp(1, 2) // -- 3 params, 2 args
// Ans, Err and Why: The function has 3 parameters (a, b, c) but is called with only 2 arguments (1, 2). Therefore, the output will be "1 2 undefined" because the third parameter 'c' is not provided an argument and defaults to undefined.

// example 6:
// Predict the output
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user(); // -- output: Hello Guest
// Ans, Err and Why: The function will print "Hello Guest" to the console. This is because the default parameter value for 'name' is set to "Guest", and since no argument is provided when calling the function, it uses the default value.

// example 7:
// what is ... operator and why use it  in function
function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5) // -- output: [1, 2, 3, 4, 5]
// Ans and Why: The '...' operator is called the rest parameter syntax. It allows the function to accept an indefinite number of arguments as an array. In this example, all the arguments passed to the function are collected into the 'numbers' array, which is then logged to the console.

// example 8:
// Use rest Parameters to accept any number of scores and return the total
function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}
function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}
calculateTotal(10, 20 ,30 ,40 ,50)
let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50) // -- Ans: 150

// Ans, Err and Why: The function will return 150 as the total score. The rest parameter '...scores' allows the function to accept any number of arguments, which are then summed up using a loop or forEach method.

// example 9:
// Fix the function using early return
function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
} 
// Ans And how: The function will print "Access Granted" if the age is 18 or older, and "Too Young" if the age is less than 18.


//  Example 10: 
// What is the return value of above function
function f(){ return; }
// Ans and Why: The function will return undefined because there is no explicit return value.


// Example 11:
// What does is mean when we say "functions are first-class citizens"?
// Ans and Why : It means that functions in JavaScript can be treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions. This allows for higher-order functions and functional programming techniques. 

// Example 12: 
// Can You assign a function to a variable and then call it?
let a = function(){console.log("Hello");}
a(); // Hello
// ans and why : Yes, you can assign a function to a variable and then call it. In this case, the function is assigned to the variable 'a', and when 'a()' is called, it executes the function and prints "Hello" to the console.

// Example 13:
function abcd(val){val()}
abcd(function(){ console.log("Hello")})
// ans, err and why : The function 'abcd' takes a function as an argument and calls it. In this case, it will print "Hello" to the console.

// Example 14: 
// What is higher order function?
// Ans and Why : A higher-order function is a function that takes another function as an argument or returns a function as a result. This allows for more abstract and flexible code, enabling patterns like callbacks, function composition, and decorators.

// Example 16:
// pure or impure function?
let a1 = 5;
function num(num){
total += num;
}
num(3);
// Ans and Why: This is an impure function because it modifies the external variable 'total' which is outside its scope. A pure function would not have any side effects and would always produce the same output for the same input without modifying any external state.

// Example 17: 
// convert example 16 function into pure function?
function numPure(total, num){
    return total + num;
}
let result = numPure(a1, 3);
// Ans and how: The function 'numPure' is a pure function because it does not modify any external state. Instead, it takes the current value of 'total' and 'num' as arguments and returns the new total without side effects.

// Example 18:
// What is Closure? When is it created?
// Ans and Example: A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. It is created when a nested function is defined within an outer function, allowing the inner function to access variables from the outer function even after the outer function has finished executing.
function outerFunction() {
    let outerVariable = 'I am from outer function';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
let closureFunction = outerFunction();
closureFunction(); // I am from outer function

// Example 19:
// What's logged?
 function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
// Ans and Why: The output will be 1 and then 2. This is because the inner function retains access to the 'count' variable from the outer function's scope, allowing it to increment and log the value each time it is called.

// Example 20: 
// Convert below function into an IIFE:
(function init(){
    console.log("Initialized");
})();
// Ans and Why: The function 'init' is wrapped in parentheses and immediately invoked. This is an example of an IIFE (Immediately Invoked Function Expression), which allows for the creation of a new scope and the execution of the function without polluting the global scope.

// Example 21:
// What is the use of IIFE? Name one real-world use case.
let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()
// Ans and Why: The IIFE is used here to create a private scope for the variable 'score'. This prevents external code from directly accessing or modifying 'score', allowing controlled access through the 'getScore' and 'setScore' methods. This pattern is useful for encapsulating state and behavior, promoting better organization and modularity in code.

// Example 22:
// What will be the output here and why?
temp_var();
var temp_var = function(){
    console.log("Hello");
}
// Ans and Why: The output will be "Hello". This is because the function expression is hoisted, but not its assignment. When 'temp_var()' is called before the assignment, it refers to the variable 'temp_var', which is currently undefined, leading to a TypeError. After the assignment, calling 'temp_var()' will correctly log "Hello".

// Example 23:
// What will be the output here and why?
temp_var();
function temp_var(){
    console.log("Hello");
}
// Ans and Why: The output will be "Hello". This is because the function declaration is hoisted, and the function is available in the scope before its definition. Therefore, calling 'temp_var()' before the function definition will correctly log "Hello".