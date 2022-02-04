// import { Point2D, Point3D } from "./lib";
// const p1 = new Point2D(100,100);
// console.log(p1);

// const p2 = new Point3D(100,100, 200);
// console.log(p2);


// import * as lib from "./lib";

// const p1 = new lib.Point2D(100,100);
// const p2 = new lib.Point3D(100,100, 200);
// console.log(p1);
// console.log(p2);

import { myType } from "./interfaces";
import { Point2D as P2D, Point3D as P3D} from "./lib";
const p1 = new P2D(100,100);
console.log(p1);

const p2 = new P3D(100,100, 200);
console.log(p2);


const myTypeTest:myType = "string";
console.log(myTypeTest);