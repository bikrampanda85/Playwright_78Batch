class demo_class{
    met_1() : void{
        console.log ("Method_1 Executed");
    }
    met_2() : void{
        console.log ("Method_2 Executed");
    }
    static met_3() : void{    // Static Method met_3 declared
        console.log ("STATIC Method Executed");
    }
}

console.log ("****Calling Non-Static Methods using Object******");
let obj_demo = new demo_class ();
obj_demo.met_1();
obj_demo.met_2();

console.log ("****Calling STATC Methods using Class Name******");
demo_class.met_3();  // Static Method called using Class_ Name
