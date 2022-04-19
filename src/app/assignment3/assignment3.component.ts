import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component implements OnInit {
  maxr = 200;
  x = 0;
  y = 0;
  bg!: p5.Image;
  public sketch: p5 | null;
  public p5f = (p: p5) => {
    // Setup
    p.setup = () => {
      //p.createCanvas(p.windowWidth, p.windowHeight);
      p.createCanvas(600, 400);
      // image for background
      this.bg = p.loadImage('../../../assets/a3.png');
    };

    // Draw
    p.draw = () => {
      // set image for background
      p.background(this.bg);

      // text
      p.fill(128 + p.sin(p.frameCount * 0.1) * 128);
      p.textSize(40);
      p.textFont('Georgia');
      let s = 'Live Weather!';
      p.text(s, 300, 350); // Text wraps within text box

      // sun
      makeSun();

      // clouds
      p.fill(p.color(0, 0, 205));
      makeCloud(this.x, this.y + 20);
      p.fill(p.color(30, 144, 255));
      makeCloud(this.x + 100, this.y + 100);
      p.fill(p.color(0, 0, 205));
      makeCloud(this.x + 50, this.y + 200);
      p.fill(p.color(30, 144, 255));
      makeCloud(this.x - 300, this.y + 200);
      p.fill(p.color(0, 0, 205));
      makeCloud(this.x - 200, this.y + 50);
      this.x += 0.1;
    };

    // method to create cloud
    function makeCloud(x: number, y: number) {
      p.noStroke();
      p.ellipse(x, y, 70, 50);
      p.ellipse(x + 10, y + 10, 70, 50);
      p.ellipse(x - 20, y + 10, 70, 50);
    }

    // method to create sun
    function makeSun() {
      // color yellow
      p.fill(245, 187, 87);
      p.stroke(245, 187, 87);
      p.push();
      p.translate(100, 80);
      p.rotate(p.radians(p.frameCount / 2));
      p.ellipse(0, 0, 60, 60);
      p.line(0, -60, 0, -40);
      p.line(0, 40, 0, 60);
      p.line(-45, -45, -30, -30);
      p.line(45, -45, 30, -30);
      p.line(-60, 0, -40, 0);
      p.line(40, 0, 60, 0);
      p.line(-45, 45, -30, 30);
      p.line(45, 45, 30, 30);
      p.pop();
      p.noFill();
    }
  };
  constructor() {
    this.sketch = null;
  }

  ngOnInit(): void {
    const canvasElm = document.getElementById('mainCanvas') || undefined;
    this.sketch = new p5(this.p5f, canvasElm);
  }

  code = `maxr = 200;
  x = 0;
  y = 0;
  bg!: p5.Image;
  public sketch: p5 | null;
  public p5f = (p: p5) => {
    // Setup
    p.setup = () => {
      //p.createCanvas(p.windowWidth, p.windowHeight);
      p.createCanvas(600, 400);
      // image for background
      this.bg = p.loadImage('../../../assets/a3.png');
    };

    // Draw
    p.draw = () => {
      // set image for background
      p.background(this.bg);

      // text
      p.fill(128 + p.sin(p.frameCount * 0.1) * 128);
      p.textSize(40);
      p.textFont('Georgia');
      let s = 'Live Weather!';
      p.text(s, 300, 350); // Text wraps within text box

      // sun
      makeSun();

      // clouds
      p.fill(p.color(0, 0, 205));
      makeCloud(this.x, this.y + 20);
      p.fill(p.color(30, 144, 255));
      makeCloud(this.x + 100, this.y + 100);
      p.fill(p.color(0, 0, 205));
      makeCloud(this.x + 50, this.y + 200);
      p.fill(p.color(30, 144, 255));
      makeCloud(this.x - 300, this.y + 200);
      p.fill(p.color(0, 0, 205));
      makeCloud(this.x - 200, this.y + 50);
      this.x += 0.1;
    };

    // method to create cloud
    function makeCloud(x: number, y: number) {
      p.noStroke();
      p.ellipse(x, y, 70, 50);
      p.ellipse(x + 10, y + 10, 70, 50);
      p.ellipse(x - 20, y + 10, 70, 50);
    }

    // method to create sun
    function makeSun() {
      // color yellow
      p.fill(245, 187, 87);
      p.stroke(245, 187, 87);
      p.push();
      p.translate(100, 80);
      p.rotate(p.radians(p.frameCount / 2));
      p.ellipse(0, 0, 60, 60);
      p.line(0, -60, 0, -40);
      p.line(0, 40, 0, 60);
      p.line(-45, -45, -30, -30);
      p.line(45, -45, 30, -30);
      p.line(-60, 0, -40, 0);
      p.line(40, 0, 60, 0);
      p.line(-45, 45, -30, 30);
      p.line(45, 45, 30, 30);
      p.pop();
      p.noFill();
    }
  };
  constructor() {
    this.sketch = null;
  }

  ngOnInit(): void {
    const canvasElm = document.getElementById('mainCanvas') || undefined;
    this.sketch = new p5(this.p5f, canvasElm);
  }`;
}
