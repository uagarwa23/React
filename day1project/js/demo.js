var a = 10;
var b = 30;
document.write(a+b)
console.log(a+b)

//print first 5 nos to console
var i;
for(i=0; i<5; i++){
    console.log(i)
}
console.log("after for loop:",i)


for(let x=1;x<5;x++){
    console.log(x)
}
//console.log("after for loop:",x) -> this will gv err as scope of x is only till for loop block
const c=100
console.log(c)
//c=600;-> will gv err as you cannot reassign const


//Annonymous function
let f = function(){
    return "WF";
}
console.log(f)//will print entire content of f

//execute the function
console.log(f()) //will run the function


//Arrow function: ignore 'function' & 'return' keyword instead of return you can use => arrow
let m = () =>"WF Bangalore"
console.log(m())
 

let p=(msg) => msg //if you are using only one param, you can use without paranthesis as below
//let p=msg => msg
console.log(p("test"))
console.log(p(30))
console.log(p(30+10))

//class sample w inheritance
//class Point w 2 data members x & y
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    display(){
        console.log("X:", this.x, " Y:",this.y)
    }
    
}//Instance of point class
let pt1 = new Point(3,5);
pt1.display();

 class Point3D extends Point{
    constructor(x,y,z){
        super(x,y)
        this.z = z;
    }
    display(){
        super.display();
        console.log( " Z:",this.z)
    }
}

let pt3d = new Point3D(3,2,5);
pt3d.display();

