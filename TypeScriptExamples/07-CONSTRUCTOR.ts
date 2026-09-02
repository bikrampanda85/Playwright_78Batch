class constru {
    m1 ():void{
        console.log("M1 Executed");
    }
            // Defining the Constructor - It will be called automatically when an Object Reference is created
    constructor(){    
        console.log("Constructor Executed");
    }
     
}

let obj = new constru();
obj.m1();

