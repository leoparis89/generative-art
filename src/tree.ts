import P5 from "p5";

var COLOR_01 = [178, 30, 93]; // pink
var COLOR_02 = [42, 178, 48]; // green
var COLOR_03 = [110, 255, 116]; // light green
var COLOR_04 = [0, 0, 40]; // gray

export function tree(p5: P5) {
  p5.setup = () => {
    var size = 800;
    p5.createCanvas(size, size);
    p5.background.apply(null, COLOR_04 as any);
    p5.noLoop();
    p5.stroke(255);
    p5.angleMode(p5.DEGREES);
  };

  p5.draw = () => {
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(45 / 2);
    branchComponent(100, 8, 60);
  };

  function branch(len: any, angle: any, gen: any) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    len *= 0.7;
    angle = p5.random(angle - 30, angle + 20);

    if (len > 2) {
      p5.push();
      p5.rotate(angle);
      branch(len, angle, gen);
      p5.pop();

      p5.push();
      p5.rotate(-angle);
      branch(len, angle, gen);
      p5.pop();
    }
  }

  function branchComponent(len: any, amount: any, angle: any) {
    p5.stroke.apply(null, COLOR_01 as any);
    var increment = 360 / amount;
    var rotAmount;

    for (var i = 0; i < amount; i++) {
      p5.push();
      rotAmount = -180 + increment * i;
      p5.rotate(p5.random(rotAmount - 60, rotAmount));
      branch(len, angle, 1);
      p5.pop();
    }
  }
}
