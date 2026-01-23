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


