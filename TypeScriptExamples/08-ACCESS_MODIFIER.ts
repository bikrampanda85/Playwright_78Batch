class Exp_AM{
    public institutename: string = "Corporate to Calmness";
    private location : string = "Eelectronic City Ph-1";
    protected city : string = "Bangalore";

    owner():void{
        console.log("Owner is Bikram Panda");
    }
}

let obj = new Exp_AM();
obj.owner()
console.log("Institute name is :"+ obj.institutename);
//console.log ("Location is:" + obj.location); // This will cause error because location is a private variable and can not be acccessed with in class 
//console.log("City is:"+ obj.city); // This will cause error because city is a protected variable and can be defined inside class and subclass

