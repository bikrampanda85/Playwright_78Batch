/* Exploring various Variable Key words  i.e const, let and var
   const- it can not be redefined and can not be re-ssigned values further
   let- it can not be redefined how ever it can accomodate re-assigning the values further
   var- It can be redefined and re-assigned with values further. this variable keyword is never or rarely used  
*/

//**********Explore const variable keyword  
console.log ("\n------ Explore const variable keyword --------");
const c =10;
console.log(c)  // Prints the initial value of a which is 10

// re-assigning values for let varibale key word
//c= 20  // values can not be re-assigned because "const" variable key word does not accept re-assignment of values.

// re-defining the let variaable keyword
//const c = 20; // It gives error because const variable keywords can not be re-defined again.



//*************Explore let variable keyword  
console.log ("------ Explore let variable keyword --------");
let l =10;
console.log(l)  // Prints the initial value of l which is 10

// re-assigning values for let varibale key word
l= 20  // value re-assigned . It will work because "let" key word accepts re-assignment of values.
console.log(l)  // prints the new value of l

// re-defining the let variable keyword
//let l; // It gives error because Let variable keywords can not be re-defined again.

//*************Explore var variable keyword  
console.log ("------ Explore var variable keyword --------");
var v =10;
console.log(v)  // Prints the initial value of v which is 10

// re-assigning values for var varibale key word
v= 20  // value re-assigned . It will work because "var" key word accepts re-assignment of values.
console.log(v)  // prints the new value of v

// re-defining the let variable keyword
var v=30; // value re-assigned . It will work because "var" key word accepts re-definition of variable keywords
console.log(v)  // prints the new value of v 
