import P5 from "p5";

export function painting(p5: P5) {
  p5.setup = () => {
    setup(p5);
  };
}

const setup = (p5: P5) => {
  p5.createCanvas(800, 800); // canvas
  p5.angleMode(p5.DEGREES); // lets use degrees instead of radians
  p5.rectMode(p5.CENTER); // lets our rectangles starts from center
  const ctx = p5.drawingContext; // this one is for using native Js canvas features
  const x = p5.width / 2; // x coordinate of center of canvas
  const y = p5.height / 2; // y coordinate of center of canvas

  const squareSideDotsCount = 30;

  const squareVertices = [];
  let startAngle = 45;
  for (let i = 0; i < 4; i += 1) {
    squareVertices.push({
      x: 400 * p5.cos(startAngle),
      y: 400 * p5.sin(startAngle),
    });
    startAngle += 360 / 4;
  }

  const square = [];
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < squareSideDotsCount; j += 1) {
      const x = p5.lerp(
        squareVertices[i].x,
        squareVertices[(i + 1) % squareVertices.length].x,
        j / squareSideDotsCount
      );
      const y = p5.lerp(
        squareVertices[i].y,
        squareVertices[(i + 1) % squareVertices.length].y,
        j / squareSideDotsCount
      );
      square.push({ x, y });
    }
  }

  p5.push();
  p5.translate(x, y);
  for (let i = 0; i < square.length; i += 1) {
    p5.push();
    p5.noStroke();
    if (i % 2 === 0) {
      p5.fill(0);
    } else {
      p5.fill(255);
    }
    p5.beginShape();
    p5.vertex(square[i].x, square[i].y);
    p5.vertex(0, 0);
    p5.vertex(
      square[(i + 1) % square.length].x,
      square[(i + 1) % square.length].y
    );
    p5.endShape(p5.CLOSE);
    p5.pop();
  }
  p5.pop();
};
