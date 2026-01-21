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