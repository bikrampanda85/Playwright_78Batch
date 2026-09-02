/*  ==Variables : 3 types  
        --Local Variable : Defined with in a method & access with in a method; local variables access directly;  
        --Instance Variable : Defined outside of the method & inside of the class; instance variables are access by using this keyword;  
        --Static / Class Variable : Using the keyword of static; static variables are access by using class name   */

class example1_class{
        
    b = 20; // instance variable. Note- Instance variable wont carry any variable type . if you provide it will give erroor i.e you should not have let b = 20 or const b = 20 or var b =20
    static c = 30;  // statsic variable defined in class level  
   m_1():void{
    let a = 10; // local variable declared in m1 method
      console.log ("m_1 method Executed");
      console.log (a +'is a local variable defined and accced in m_1 method'); //10
      console.log(example1_class.c,'Static variable accessed in m_1 method')  // calling static variable using the CLASS Name. it will return 30.
   }
   m_2():void{
      console.log ("m_2 method executed");
      //console.log (a);  // will give error because variable 'a' is a local variable for method m1()
      console.log(this.b,'is an instance variable called in m_2 method');  // calling instance varibale using this keyword
   }
   m_3():void{
      console.log("m_3 method executed");
      console.log(this.b,'is an instance variable called in m_3 method');  // calling instance varibale using this keyword
      console.log(example1_class.c,'Static variable accessed in m_3 method')  // calling static variable using the CLASS Name. it will return 30.
   }
}

let obj1 = new example1_class();
obj1.m_1();
obj1.m_2();
obj1.m_3();
//console.log(this.b,'is an instance variable called outside of class');  /// this will give error because Instance Variables should not be called outisde of Class.