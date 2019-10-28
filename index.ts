main();

interface Point {
    x: number;
    y: number;
}

function NewPoint(): Point {
    return {
        x: 0,
        y: 0
    };
}

function main(): void {
    const canvas : HTMLCanvasElement = document.getElementById('drawsomething')! as HTMLCanvasElement;
    const pencil : CanvasRenderingContext2D = canvas.getContext('2d')!;

    let position: Point = NewPoint();

    let color: string = "black";

    let pointWidth: number = 2;

    let lineWidth: number = 2;

    function drawPoint(x: number, y: number)
    {
        pencil.fillStyle = color;
        pencil.fillRect(position.x + x, position.y + y, pointWidth, pointWidth);
    }

    function drawLineSegment(x1: number, y1: number, x2: number, y2: number)
    {
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

    function drawLine(dx: number, dy: number)
    {
        drawLineSegment(position.x, position.y, position.x + dx, position.y + dy);
    }

    // Draw a triangle
    position.x = 200;
    position.y = 150;
    color = "purple";
    lineWidth = 2;
    drawLine(-50, 100);
    drawLine(100, 0);
    drawLine(-50, -100);

    // Draw a few points
    color = "orange";
    position.x = 200;
    position.y = 200;
    pointWidth = 3;
    // drawPoint(0, 0);
    drawPoint(100, 0);
    drawPoint(-100, 0);
    drawPoint(0, -100);
    drawPoint(0, 100);

    // Draw a sine curve
    color = "red";
    position.x = 400;
    position.y = 500;
    for (let x = -180; x <= 180; x++)
    {
        let y = 100 * Math.sin(x * Math.PI / 180);
        drawPoint(x, y);
    }

    // Draw the axes of the sine curve
    color = "black";
    lineWidth = 1;
    drawLineSegment(200, 500, 600, 500);
    drawLineSegment(400, 380, 400, 620);
}
