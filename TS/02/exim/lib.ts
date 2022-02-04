export class Point2D{
    protected _xPos: number; 
    protected _yPos: number;
    constructor(xPosIn: number, yPosIn:number){
        this._xPos = xPosIn*2;
        this._yPos = this.yPos = yPosIn*2;
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

export class Point3D extends Point2D{
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
