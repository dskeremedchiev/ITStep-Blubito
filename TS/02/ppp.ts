class Point2D{
    public xPos: number; 
    public yPos: number;
    constructor(xPosIn: number, yPosIn:number){
        this.xPos = xPosIn;
        this.yPos = yPosIn;
    }
}

class Point3D extends Point2D{
    protected zPos: number;
    public constructor(xPosIn: number, yPosIn:number, zPosIn: number){
        //this.zPos = zPosIn; - cannot access this before super()
        super(xPosIn, yPosIn)
        this.zPos = zPosIn;
    }    
} 
const p1:Point2D = new Point2D(100,100);
p1.xPos = 200;
console.log(p1);

const p2: Point3D = new Point3D(50,50,50);
//p2.zPos = 100;  - Property 'zPos' is protected and only accessible within class 'Point3D' and its subclasses.
console.log(p2);

