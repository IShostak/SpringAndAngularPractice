import { Shape } from "./Shape";
import {Circle} from "./Cicrcle";
import {Rectangle} from "./Rectangle";


let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(3,6,10,12);

let shapes: Shape[] =  [];

shapes.push(myRectangle);
shapes.push(myCircle);

for (let temp of shapes) {
    console.log(temp.getInfo());
    console.log(temp.calculateArea());
    console.log;
}