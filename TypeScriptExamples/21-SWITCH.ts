let a = 5;
let b = 4;
let choice = 1;

switch (choice){
    case 1:
        console.log (a+b);
        break;  // When we comment break the case statement moves takes a break and executes the next case till a break arrives
    case 2:
        console.log (a-b);
        break;
    case 3:
        console.log (a*b);
        break;
    case 4:
        console.log(a/b);
        break;
    default:
        console.log("Invalid Choice");

}