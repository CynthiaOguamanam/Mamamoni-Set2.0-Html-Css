/*
--Javascript Arithmetic Operators
1. Addition(+)
2. Subtraction(-)
3. Multiplication: (*)
4. Division: (/)
5. Modulus operator : The modulus operator in JavaScript, represented by the % symbol, calculates the remainder when one number is divided by another. 
6. Increment: The increment operator in JavaScript is represented by ++, and it's used to increase the value of a variable by 1. It's a shortcut for adding 1 to the variable.
7. Decrement: The decrement operator in JavaScript is represented by --, and it's used to decrease the value of a variable by 1. It's a shortcut for subtracting 1 from the variable.
*/

let xyz = 10;
let zxy = 20;
console.log(xyz + zxy)

let div1 = 20;
let div2 = 2;
let total = div1 / div2;
console.log( "Division operation", total);

// Calculating the remainder
let a = 10;
let b = 5;
let result = a % b; 
console.log("Modulus operator even number",result);

let aa = 13;
let bb = 5;
console.log("modulus odd number", aa % bb)
// result will be 3 (13 divided by 5 equals 2 with a remainder of 3)


//Increment
let x = 5;
x++; // This is the same as writing x = x + 1;
console.log(x); // Output will be 6

//Decrement 
let y = 8;
y--; // This is the same as writing y = y - 1;
console.log(y); // Output will be 7



let aaa = 10;
let bbb = 5;
let ccc = 3;
let ddd = 8;
 let output = (aaa + bbb) * ccc / 5 - ddd;
 console.log("result result",output);


17 % 4
// Assign both values to a variable and find the result of the expression

let test = 17;
let test2 = 4;
let testresult = test % test2;
console.log("This is the test result",testresult);




/*
Javascript Assignment Operator: Assignment operators in JavaScript are used to assign values to variables. They combine an arithmetic operation with an assignment.
1.Assignment(=):Assigns the value on the right to the variable on the left.
2. Addition assignment(+=):Adds the value on the right to the variable on the left.
3. Subtraction assignment(-=): Subtracts the value on the right from the variable on the left.
4. Multiplication assignment: = : Multiplies the variable on the left by the value on the right.
5. Division assignment(/=) : Divides the variable on the left by the value on the right.6. Modulus assignment(%=): Assigns the remainder of the variable on the left divided by the value on the right to the variable on the left.

*/

//Assignment
let xy = 5; // x is assigned the value 5;
console.log(xy)

//Addition assignment
let yz = 3;
yz += 2; // This is the same as x = x + 2
// x is now 5
console.log(yz)

//subtraction assignment
let zy = 10;
zy -= 3; // This is the same as y = y - 3
// y is now 7
console.log(zy)
