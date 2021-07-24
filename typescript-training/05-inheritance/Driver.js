"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Cicrcle_1 = require("./Cicrcle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
console.log(myShape.getInfo());
var myCircle = new Cicrcle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(3, 6, 10, 12);
console.log(myRectangle.getInfo());
var shapes = [];
shapes.push(myRectangle);
shapes.push(myShape);
shapes.push(myCircle);
console.log("same using loop");
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var temp = shapes_1[_i];
    console.log(temp.getInfo());
}
