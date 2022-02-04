class Point2D{
    protected _xPos: number; 
    protected _yPos: number;
    constructor(xPosIn: number, yPosIn:number){
        this._xPos = xPosIn;
        this._yPos = this.yPos = yPosIn;
    }
    public get xPos():number{
        return this._xPos;
    }
    public set xPos(xPosIn: number){
        this._xPos = xPosIn;
    }
    public get yPos():number{
        return this._yPos;
    }
    public set yPos(yPosIn: number){
        if(yPosIn<0) throw new Error("Must be positive number");
        this._yPos = yPosIn;
    }    
}

class Point3D extends Point2D{
    protected _zPos: number;
    public constructor(xPosIn: number, yPosIn:number, zPosIn: number){
        super(xPosIn, yPosIn)
        this._zPos = zPosIn;
    } 
    public get zPos():number{
        return this._zPos;
    }
    public set zPos(zPosIn: number){
        this._zPos = zPosIn;
    }         
} 


const p1:Point2D = new Point2D(99,100);
//console.log(p1.xPos);
//p1.xPos = -100; // exception
//p1.yPos = -100; - js
//p1.setxPos(100); // java, c#, php ....
//console.log(p1);

const p2: Point3D = new Point3D(22,33,44);
p2.xPos = 100;
p2.zPos = 100;
console.log(p2);



