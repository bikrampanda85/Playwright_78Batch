//Data Types -- Type Script

// Primitives : number, string, boolean, null, undefined
let num1: number = 10;
const str1: string = "Hello";
let isActive: boolean = true;
let value: null = null;
let data: undefined = undefined;

//Prinitng the variables and their Data Types
console.log("Number : " + num1);
console.log("String : " + str1);
console.log("Boolean : " + isActive);
console.log("Null : " + value);
console.log("Undefined : " + data);

console.log("===================================")
// Non-Primitives : Array, Tuple
let arr1: number[] = [10, 20, 30, 40];
let tuple1: [number, string, boolean] = [10, "Hello", true];

//Prinitng the variables and their Data Types
console.log("Array : " + arr1);
console.log("Tuple : " + tuple1);

console.log("====================================")
//special data types : any
let randomValue: any = 10;
console.log("Random Value : " + randomValue);
