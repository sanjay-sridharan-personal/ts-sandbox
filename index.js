"use strict";

main();

function NewPoint() {
    return {
        x: 0,
        y: 0
    };
}

function main() {
    const canvas = document.getElementById('drawsomething');
    const pencil = canvas.getContext('2d');

    // Properties
    
    let position = NewPoint();
    let color = "black";
    let pointWidth = 2;
    let lineWidth = 2;

    // Functions

    function drawPoint(x, y) {
        pencil.fillStyle = color;
        pencil.fillRect(position.x + x, position.y + y, pointWidth, pointWidth);
    }

    function drawLineSegment(x1, y1, x2, y2) {
        pencil.lineWidth = lineWidth;
        pencil.strokeStyle = color;
        pencil.beginPath();
        pencil.moveTo(x1, y1);
        // Move the position to where this line ends so that the next drawLine starts from the end of this one
        position.x = x2;
        position.y = y2;
        pencil.lineTo(position.x, position.y);
        pencil.stroke();
    }

    function drawLine(dx, dy) {
        drawLineSegment(position.x, position.y, position.x + dx, position.y + dy);
    }

    // Draw a triangle
    position.x = 200;
    position.y = 150;
    color = "cyan";
    lineWidth = 2;
    drawLine(-50, 100);
    drawLine(100, 0);
    drawLine(-50, -100);

    // Draw a few points
    color = "orange";
    position.x = 200;
    position.y = 200;
    pointWidth = 3;
    drawPoint(0, 0);
    drawPoint(100, 0);
    drawPoint(-100, 0);
    drawPoint(0, -100);
    drawPoint(0, 100);
    
    // Draw a sine curve
    color = "red";
    position.x = 400;
    position.y = 500;
    for (let x = -180; x <= 180; x++) {
        let y = 100 * Math.sin(x * Math.PI / 180);
        drawPoint(x, y);
    }
    
    // Draw the axes of the sine curve
    color = "black";
    lineWidth = 1;
    drawLineSegment(200, 500, 600, 500);
    drawLineSegment(400, 380, 400, 620);

    // js-sandbox
    let myStringArray = [];
    myStringArray.push("Sanjay");
    myStringArray.push("Seth");
    myStringArray.push("Sanjay");
    myStringArray.push("Seth");
    myStringArray.push("Sanjay");
    let mySet = new Set(myStringArray);
    console.log(mySet);
    console.log(myStringArray);
    let myMap = new Map([[ 1, 'one' ],[ 2, 'two' ]]);
    let myJson = JSON.stringify(myMap);
    console.log(myJson);
}
