<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: variable.js:103 Uncaught ReferenceError: Cannot access 'nm' before initialization
    at variable.js:103:13</p>
<p>Why :Because let variables are hoisted but not initialized until their declaration is reached. </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undefined</p>
<p>Why :Because var variables are hoisted and initialized with undefined. </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: 2</p>
<p>Why :Because var variables are function-scoped, so the inner block shares the same variable. </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: Inside: 20
 Outside: 10</p>
<p>Why : Because let variables are block-scoped, so the inner block has its own variable.</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: variable.js:129 Uncaught TypeError: Assignment to constant variable.
    at variable.js:129:8 </p>
<p>Why : Because const variables cannot be reassigned, but their properties can be modified.</p>
</div>

<h3>Example 1 :</h3>
<p>true + false </p>
<p>ans or error: 1</p>
<p>why : true → 1
false → 0
1 + 0 = 1
JavaScript converts booleans to numbers when using + with numbers. </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>ans or error: 1</p>
<p>why :
null → 0 (in numeric operations)
0 + 1 = 1
Important: null becomes 0 only in math, not in strings or comparisons. </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>ans or error: '1212'</p>
<p>why : + with a string = string concatenation
Number 12 → "12"
"12" + "12" = "1212"
Rule: If one side is a string, + joins strings.</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>ans or error: false</p>
<p>why : undefined is falsy
!undefined → true
!!undefined → false
Double !! is a classic trick to convert any value to a boolean.</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>ans or error: 11</p>
<p>why : does NOT support strings
JS forces "12" → 12
12 - 1 = 11
Only + does string concatenation.
Other operators (- * /) force numbers. </p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>ans or error: 'hello5'</p>
<p>why :- + sees a string → does concatenation
No numeric conversion happens </p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>ans or error: undefined
null</p>
<p>why :undefined	--> Variable declared but not assigned
null -->  Intentionally empty value </p>
</div>

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>ans or error: Both are greater than 5 </p>
<p>why : </p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>ans or error:  Acess granted</p>
<p>why : </p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>ans or error:  Pleasant day </p>
<p>why : </p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>ans or error: Falsy value </p>
<p>why : </p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>ans or error:  </p>
<p>why : </p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>ans or error: </p>
<p>why : </p>
</div>


<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>ans or error: Two</p>
<p>why : </p>
<div>



<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>ans or error:Three </p>
<p>why : </p>
<div>



<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>ans or error: rock wins</p>
<p>why : </p>
<div>


<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
<p>ans or error: </p>
<p>why : </p>
</div>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}</p>
</div>

<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i= 1;</p>
<p>while(i<=15){
    if(i%2 !==0){ // or (i%2 ===1)
    console.log(i);
    }
    i++;
}</p>
</div>

<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>
</div>

<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
</p>
</div>

<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>
let num = prompt("give a number");
for(let i=1; i <=numl i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
</p>
</div>

<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
</p>
</div>

<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
</div>





## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p>Ans and Why: Function declarations are hoisted, meaning they can be called before they are defined in the code. Function expressions, on the other hand, are not hoisted, so they cannot be called before they are defined.</p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and Why: The function will print "Hello!" to the console. This is because function declarations are hoisted, allowing them to be called before their definition in the code.
</p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Ans And How: let add1 = (a, b) => {
    return a + b;
}
console.log(add1(2,3));</p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why : name is param, user is arg
why : name is the parameter that the function expects, and "user" is the argument that is passed to the function when it is called.</p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why: 3 params, 2 args
 The function has 3 parameters (a, b, c) but is called with only 2 arguments (1, 2). Therefore, the output will be "1 2 undefined" because the third parameter 'c' is not provided an argument and defaults to undefined.
</p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why: The function will print "Hello Guest" to the console. This is because the default parameter value for 'name' is set to "Guest", and since no argument is provided when calling the function, it uses the default value.</p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why:output: [1, 2, 3, 4, 5]
 The '...' operator is called the rest parameter syntax. It allows the function to accept an indefinite number of arguments as an array. In this example, all the arguments passed to the function are collected into the 'numbers' array, which is then logged to the console.</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why: Ans: 150
why:
 The function will return 150 as the total score. The rest parameter '...scores' allows the function to accept any number of arguments, which are then summed up using a loop or forEach method.
</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans And how: The function will print "Access Granted" if the age is 18 or older, and "Too Young" if the age is less than 18.
</p>
</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why: The function will return undefined because there is no explicit return value.
</p>
</div>


<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>
<p>Ans and Why : It means that functions in JavaScript can be treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions. This allows for higher-order functions and functional programming techniques. 
</p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can You assign a function to a variable and then all it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
<p>ans and why : Yes, you can assign a function to a variable and then call it. In this case, the function is assigned to the variable 'a', and when 'a()' is called, it executes the function and prints "Hello" to the console.</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass A function into anthor funtion and excute it inside.</p>
<p>Ans and Why, How</p>
<p>function abcd(val){val()}</p>
<p>abcd(function(){ console.log("Hello")})</p>
<p>ans, err and why :The function 'abcd' takes a function as an argument and calls it. In this case, it will print "Hello" to the console.</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is higer order function?</p>
<p>Ans and Why: A higher-order function is a function that takes another function as an argument or returns a function as a result. This allows for more abstract and flexible code, enabling patterns like callbacks, function composition, and decorators.</p>
</div>

<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>
<p>let a = 5;</p>
<p>function num(num){
total += num;
}
<p>num(3);</p>
<p>Ans and Why: This is an impure function because it modifies the external variable 'total' which is outside its scope. A pure function would not have any side effects and would always produce the same output for the same input without modifying any external state.</p>
</div>

<div>
<h1> Example 17: </h1>
<p>convert example 16 function into pure function?</p>
<p>Ans and how:
function numPure(total, num){
    return total + num;
}
let result = numPure(a1, 3);
why : The function 'numPure' is a pure function because it does not modify any external state. Instead, it takes the current value of 'total' and 'num' as arguments and returns the new total without side effects.</p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans and Example:
A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. It is created when a nested function is defined within an outer function, allowing the inner function to access variables from the outer function even after the outer function has finished executing.
example: 
function outerFunction() {
    let outerVariable = 'I am from outer function';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
let closureFunction = outerFunction();
closureFunction(); // I am from outer function</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<p>function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}</p>
<p>const counter = outer();</p>
<p>counter();</p>
<p>counter();</p>
<p>Ans, Err and Why: The output will be 1 and then 2. This is because the inner function retains access to the 'count' variable from the outer function's scope, allowing it to increment and log the value each time it is called.</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<p>function init(){
    console.log("Initialized");
}</p>
<p>Ans and Why: The function 'init' is wrapped in parentheses and immediately invoked. This is an example of an IIFE (Immediately Invoked Function Expression), which allows for the creation of a new scope and the execution of the function without polluting the global scope.</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<p>let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()</p>
<p>Ans and Why: The IIFE is used here to create a private scope for the variable 'score'. This prevents external code from directly accessing or modifying 'score', allowing controlled access through the 'getScore' and 'setScore' methods. This pattern is useful for encapsulating state and behavior, promoting better organization and modularity in code.</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why: The output will be "Hello". This is because the function expression is hoisted, but not its assignment. When 'temp_var()' is called before the assignment, it refers to the variable 'temp_var', which is currently undefined, leading to a TypeError. After the assignment, calling 'temp_var()' will correctly log "Hello".</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why: The output will be "Hello". This is because the function declaration is hoisted, and the function is available in the scope before its definition. Therefore, calling 'temp_var()' before the function definition will correctly log "Hello".</p>
</div>
 