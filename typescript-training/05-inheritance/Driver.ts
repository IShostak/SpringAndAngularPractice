import { Shape } from "./Shape";
import {Circle} from "./Cicrcle";
import {Rectangle} from "./Rectangle";

let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(3,6,10,12);
console.log(myRectangle.getInfo());

let shapes: Shape[] =  [];

shapes.push(myRectangle);
shapes.push(myShape);
shapes.push(myCircle);

console.log("same using loop")

for (let temp of shapes) {
    console.log(temp.getInfo());
}