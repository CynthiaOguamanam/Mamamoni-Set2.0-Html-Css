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

const { getToPathname } = require("@remix-run/router");

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
// 2+2
// 4-1 = 3
// 4-- = 3
// 3--
// ++
// 4++

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
let myName = "Cynthia" : right
"Cynthia" = let myName : wrong

2. Addition assignment(+=):Adds the value on the right to the variable on the left.
3. Subtraction assignment(-=): Subtracts the value on the right from the variable on the left.
4. Multiplication assignment: = : Multiplies the variable on the left by the value on the right.
5. Division assignment(/=) : Divides the variable on the left by the value on the right.6. Modulus assignment(%=): Assigns the remainder of the variable on the left divided by the value on the right to the variable on the left.

*/

// assignment
let xy = 5; // xy is assigned the value 5;
console.log(xy)

//Addition assignment
let yz = 3;
yz += 2; // This is the same as x = x + 2
// let rsvp = yz + 2
// xy is now 5
console.log(yz)

//subtraction assignment
let zy = 10;
zy -= 3; // This is the same as y = y - 3
// y is now 7
console.log(zy)

//Multiplication assignment
let xya = 10;
xya *= 2;
console.log(xya)

//Division assignment
let yes = 20
yes /= 5;
console.log(yes)

/*
Certainly! Logical operators in JavaScript are used to perform logical operations on boolean values (true or false). They allow you to make decisions based on multiple conditions and combine these conditions in various ways. 
In addition,
There are three main logical operators in JavaScript:

1. AND (&&): The && operator returns true if both operands are true; otherwise, it returns false.

2. OR (||): The || operator returns true if at least one of the operands is true; it returns false if both operands are false.

3. NOT (!): The ! operator is a unary operator that reverses the boolean value of its operand. If the operand is true, ! makes it false, and vice versa.

*/

//AND (&&) operator
let input = 5;
let input2 = 10;
let input3 = 15;

10 > 2 && 20 > 40

// logical and (&&)
// true && true = true
// true   && false = false
// false && true = false
// false && false = true

// logical OR (||)
// true || true = true;
// true || false = true
// false || true = true
// false || false = false
            
console.log("Logical And is",input < input2 && input2 < input3); // Output will be true

let Log = 20;
let log2 = 10;
let log3 = 7;

console.log("Second logical and is",Log < log2 && log3 > log2);

//Or(||)
let az = 20;

let bz = 10;
let cz = 5;
20 > 10 || 10 > 5
console.log("Logical true result is",az > bz || bz > cz); // Output will be true

//NOT(!)
let p = true;
let q = false;

console.log("the result of p is",!p); // Output will be false
console.log("the result of q is",!q); // Output will be true







