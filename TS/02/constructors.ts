class Point2D{
    xPos: number; 
    yPos: number;
    constructor(xPosIn: number, yPosIn:number){
        this.xPos = xPosIn;
        this.yPos = yPosIn;
    }
}

class Point3D extends Point2D{
    zPos: number;
    constructor(xPosIn: number, yPosIn:number, zPosIn: number){
        //this.zPos = zPosIn; - cannot access this before super()
        super(xPosIn, yPosIn)
        this.zPos = zPosIn;
    }    
}

const p1:Point2D = new Point2D(50, 100);
console.log(p1);

const p2:Point3D = new Point3D(50, 100, 200);
console.log(p2);