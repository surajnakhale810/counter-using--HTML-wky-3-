/*introduction
console.log("ok suraj");
let a = 67
console.log(a)
let b = "suraj";
b = 4
console.log(b)
let b = "suraj";
 b = 4
 const auther = "suraj";
 auther = 4
 console.log(auther)
{
    let b = "this";
    console.log(b)
}
console.log(b) */

/*primitive data types
let a = null
let b= 345
let c = Symbol("i am a suraj");
let d = "prakash";
let e = true
let f = BigInt("345") + BigInt("5")
let g = undefined

console.log(a,b,c,d,e,f,g)
console.log(typeof d) */

/* non- primitive data types
const item = {
    "hement" : true,
    "sumit" : 78,
    "suraj" : undefined
} 
console.log(item["sumit"])*/

/* concanitation of two varible

let a1 = "suraj";
let b1 = 6
console.log(a1 + b1)*/

/* add new key to const object
const a2 = {
    "rekha": 78,
    "namrata": true,
}
a2["amit"] = 589
a2["rekha"] = 56

console.log(a2)*/

/*introduction part of arithmatic operators
let a2 = 10
let b2 = 4
console.log("a2 + b2 =", a2 + b2)
console.log("a2 - b2=", a2 - b2)
console.log("a2 / b2 =", a2 / b2)
console.log("a2 * b2 =", a2 * b2)
console.log("a2 % b2=", a2 % b2)
console.log("a2 ** b2 =", a2 ** b2)
console.log(" ++a2 =", ++a2)
console.log(" ++a2 =", ++a2)
console.log(" a2++ =", a2++)
console.log(" a2++ =", a2++)
console.log(" a2 =", a2)
console.log(" a2 =", a2)
console.log(" --a2 =", --a2)
console.log(" a2-- =", a2--)
console.log(" a2++ =", a2++)
console.log(" --a2 =", --a2) 

let a3 = 5
console.log("a3++ =", a3++)
console.log("a3-- =", a3--)
console.log("--a3 =", --a3)  
let a4 = 7
let b4 = 5
let c4 = 4
console.log("y =", a4++ + --a4 + --b4 - --b4 + ++c4 - --c4)
notes : (a4++ & --a4)
 it means  std value of a4 is printed (i.e, 7) then increase ++ (i.e, increase by 1) & (7+1=8, compare to (--a4) then (8-1 = 7 is printed) 7 is moving to next comparision ) */

/*introduction  part of assignment operators
let a5 = 1
a5 += 5

console.log(a5)
{let a5 = 1
    a5 -= 5
console.log(a5)}  */

/*introduction  part of comparision operators
let comp1 = 6
let comp2 = "7"
console.log("comp1 == comp2", comp1 == comp2)
// it means (==) compare only value
console.log("comp1 != comp2", comp1 != comp2)
// it means (!=) compare only  not equal value
console.log("comp1 === comp2", comp1 === comp2)
// it means (===) compare only value & datatype
console.log("comp1 !== comp2", comp1 !== comp2)
// it means (!==) compare  not equal value & datatype */

/* introduction  part of logical  operators

let a6 = 8
let b6 = 9
console.log(a6 > b6 && a6 == 8)
console.log(a6 > b6 || a6 == 8)
console.log(a6 > b6 != a6 == 8) */

// introduction  part of conditional expression 
// 1) use of prompt
/*let a7 = promt ("what's your age?");
a7 = Number.parseInt(a7) // convert from string to number. 
console.log(typeof a7) */

/* how to write if-else statement 
let a8 = 10;
if(a8 > 0){
    console.log("this is a valid age");
}
else{
    console.log("this is not a valid age");
}  */

/* how to write if- else if - else statement 
a9 = 4;
if(a9 < 0){
    console.log("you are invalid age")
}
else if(a9 < 18 && a9 >= 0){
    console.log(" you are just thinking of driving")
}
else{
  console.log("now you are eligible for driving")
}  */

/*javascript ternary operator
a10 = 6;
console.log("you are", a10 < 18? "not eligible" : "eligible")

a10 = 30;
console.log("you are", a10 < 18? "not eligible" : "eligible") 

let a11 = 50
let a12 = a11 > 20? "you are safe":"you are not safe"
console.log(a12) */

/*  how to use switch statement

let age = 100
switch (age) {
    case 10:
        console.log("tuesday");
         break;
    case 20:
        console.log("monday");
        break;
    case 30:
        console.log("wednesday");
        break;
    case 40:
        console.log("thursday");
        break;
    case 50:
        console.log("friday");
        break;
    case 60:
        console.log("saturday");
        break;
    case 70:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");

} */

/* how to use for lops
for(let i=1;i<=10;i++){
    console.log(i);
} */

/* how to use for-in-loops ( specially work in array, string)
 let object= {
 "amit" : 78,
 "sumit" : 89,
 "manish" : 100,
 "suraj" : 105
 }   
for(let a in object){
    console.log("marks of " + a + " are " + object[a])
}
console.log(object["suraj"]) */

/* how to use for-of-loops ( specially work in array, string)
for(let b of "suraj"){
    console.log(b);
}  */

/* how to use while-loops

let i=0;
let n = 5;
while(i<n){
    console.log(i);
    i++; 
}   */

/* how to use do-while-loop
let i=0;
let n = 2;
do{
    console.log(i);
    i++
}
while(i<n)  */

/* how to use function
let a = 5;
let b = 4;
let c = 3;
function avgsum(x,y){
    return (x+y)/2;
}
console.log("Avg of a & b is " + avgsum(a,b))
console.log("Avg of a & b is " + avgsum(b,c))
console.log("Avg of a & b is " + avgsum(c,a))
// and another function method
const sum = (p,q)=>{
    return p + q
}
console.log(sum(9,8))

// how to use arrow function
const hello = () =>{
console.log("hey how are you, i am fine")
}
hello(); */

/* how to String
let spn = "suraj";
console.log(spn);

let obj = 'prakash';
console.log(obj);

// how to find length of String
let sok = "subharaju"
console.log(sok.length);
console.log(sok[1]);  */

// how to use dom manipulation

let  counterElement = document.getElementById('counterText');
let   incrementBtn = document.getElementById('increment');
let clearBtn = document.getElementById('clear');
let decrementBtn = document.getElementById('decrement');

let counter = counterElement.innerText;
function increment(){
    counter++;
    console.log(counter);
    counterElement.innerText = counter;
}
incrementBtn.onclick = increment;

function clear(){
    counter = 0;
    console.log(counter);
    counterElement.innerText = counter;
}
clearBtn.onclick = clear;

function decrement(){
    // counter--;
    if(counter > 0){
        console.log(counter); 
        counter--; 
    }
    // console.log(counter);
    counterElement.innerText = counter;
}
decrementBtn.onclick = decrement;


   /*let  counterElement = document.getElementById('counterText');
let   incrementBtn = document.getElementById('increment');
let clearBtn = document.getElementById('clear');
let decrementBtn = document.getElementById('decrement');

let counter = counterElement.innerText;

incrementBtn.addEventListener("click", ()=>{
    counter++;
    console.log(counter);
      counterElement.innerText = counter;
})

decrementBtn.addEventListener("click", ()=>{
    if(counter > 0){
        counter--;
        console.log(counter);
    }
      counterElement.innerText = counter;
})

clearBtn.addEventListener("click", ()=>{
    counter = 0;
    console.log(counter);
      counterElement.innerText = counter;
})   */

