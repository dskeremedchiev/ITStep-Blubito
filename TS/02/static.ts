class Point2D{
    protected _xPos: number; 
    protected _yPos: number;
    public static NUMBER_OF_DIMENTIONS = 2;
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
    public static override NUMBER_OF_DIMENTIONS = 3;    
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


const p1:Point2D = new Point2D(1,2);
//console.log(p1.NUMBER_OF_DIMENTIONS); // error
console.log(Point3D.NUMBER_OF_DIMENTIONS); 

let numb = new Number(5);
console.log(Number.POSITIVE_INFINITY);
//console.log(numb.POSITIVE_INFINITY);
console.log(numb);


/* compare primitive type with object */
let bool1 = false;
let bool2 = new Boolean(false);

if(bool1){
    console.log("bool1 is true");
}

if(bool2){
    console.log("bool2 is true");
}


