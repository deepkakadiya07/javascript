// function can be returned from other functions
// function

//higher order function (HOF)
// function thta takes another function as an argument or returns a function as a resulr (eva function je return kare ek function athava accept kre ek function params ma )
// function abcd(val){val();}
// --> abcd(function(){console.log("hello")})
// function abcd(val){} --> higher order function

// function abcd(){ return function(){} } abcd()() --> higher otder

// pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function baar na stare ne modify na kare )
let a = 20;
function change_a() {
  return "a not change(pure function)" + a;
} // -- pure function

console.log(change_a());

//impure function --> function je same nput par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare)
function change_a1() {
  a++;
  return "a changed(impure function) " + a;
} //-- impure function
console.log(change_a1());

// closure function
// function je potana parent function na variable ne acces kari shake (return thava valo function use karse parent function na koi variable ) (function within function )
function outer() {
  let outer_var = "outer function variable";
  function inner() {
    console.log(outer_var);
  }
  inner();
}
outer();

// lexical scope --> nested function can access variables declared in their outer scope
function outer1(){
    let outer_var = "outer function variable";
    function inner1(){
        console.log(outer_var);
        let inner_var = "inner function variable";
        function most_inner(){
            console.log(outer_var);
            console.log(inner_var);
        }
        most_inner();
    }
    inner1();
}
outer1();

//IIfE --> Immediately Invoked Function Expression
(function (){})(); // function je declare krta j call thai jaye
(function (){
    console.log("IIFE executed");
})();

// hoisting in functions
// use case -->  show project structure 
temp_fnc();

function temp_fnc(){
    console.log("hoisting function");
}

