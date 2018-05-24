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

export default Point;
 export class Point3D extends Point{
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

