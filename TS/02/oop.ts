interface Point2D{
    xPos: number; 
    yPos: number;
    readonly name?: string;
}

const p1:Point2D = {xPos:0, yPos:0, name:"MyPOI"}
console.log(p1);
p1.xPos = 100;
//p1.name="MyPOI" - cannot assign
console.log(p1);

const p2:Point2D = {xPos:100, yPos:50}
console.log(p2);