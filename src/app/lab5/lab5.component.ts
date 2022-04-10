import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-lab5',
  templateUrl: './lab5.component.html',
  styleUrls: ['./lab5.component.css'],
})
export class Lab5Component implements OnInit {
  maxr = 200;

  public sketch: p5 | null;
  public p5f = (p: p5) => {
    p.setup = () => {
      //p.createCanvas(p.windowWidth, p.windowHeight);
      p.createCanvas(1000, 700);
      p.loadImage('../../../assets/lab5.png', (img) => {
        p.image(img, 20, 40, 200, 200);
      });
    };
    p.draw = () => {
      // colors
      let yellow = p.color(252, 247, 135);
      let white = p.color(255);
      let black = p.color(0);
      let gray = p.color(192, 192, 192);
      let red = p.color(255, 0, 0);

      // background
      // p.background(white);

      // face
      p.fill(yellow);
      p.ellipse(500, 250, 450);

      // eyes
      // big left eye
      p.fill(white);
      p.ellipse(400, 200, 100);
      // small left eye
      p.fill(black);
      p.ellipse(400, 200, 50);
      // big right eye
      p.fill(white);
      p.ellipse(600, 200, 100);
      // small right eye
      p.fill(black);
      p.ellipse(600, 200, 50);

      // nose
      p.fill(gray);
      p.rect(500, 200, 30, 90);

      //  mouth
      p.fill(red);
      p.rect(450, 340, 150, 50);

      // tooth
      p.fill(white);
      p.rect(470, 340, 30, 30);
      p.rect(500, 340, 30, 30);

      // text
      p.fill(red);
      p.textSize(60);
      p.textFont('Georgia');
      let s = 'Hello! I am Mr. Happy Face.';
      p.text(s, 100, 600, 1000, 700); // Text wraps within text box
    };
  };
  constructor() {
    this.sketch = null;
  }

  ngOnInit(): void {
    const canvasElm = document.getElementById('mainCanvas') || undefined;
    this.sketch = new p5(this.p5f, canvasElm);
  }

  code = `import { Component, OnInit } from '@angular/core';
  import * as p5 from 'p5';

  @Component({
    selector: 'app-lab5',
    templateUrl: './lab5.component.html',
    styleUrls: ['./lab5.component.css'],
  })
  export class Lab5Component implements OnInit {
    maxr = 200;

    public sketch: p5 | null;
    public p5f = (p: p5) => {
      p.setup = () => {
        //p.createCanvas(p.windowWidth, p.windowHeight);
        p.createCanvas(1000, 700);
        p.loadImage('../../../assets/lab5.png', (img) => {
          p.image(img, 20, 40, 200, 200);
        });
      };
      p.draw = () => {
        // colors
        let yellow = p.color(252, 247, 135);
        let white = p.color(255);
        let black = p.color(0);
        let gray = p.color(192, 192, 192);
        let red = p.color(255, 0, 0);

        // background
        // p.background(white);

        // face
        p.fill(yellow);
        p.ellipse(500, 250, 450);

        // eyes
        // big left eye
        p.fill(white);
        p.ellipse(400, 200, 100);
        // small left eye
        p.fill(black);
        p.ellipse(400, 200, 50);
        // big right eye
        p.fill(white);
        p.ellipse(600, 200, 100);
        // small right eye
        p.fill(black);
        p.ellipse(600, 200, 50);

        // nose
        p.fill(gray);
        p.rect(500, 200, 30, 90);

        //  mouth
        p.fill(red);
        p.rect(450, 340, 150, 50);

        // tooth
        p.fill(white);
        p.rect(470, 340, 30, 30);
        p.rect(500, 340, 30, 30);

        // text
        p.fill(red);
        p.textSize(60);
        p.textFont('Georgia');
        let s = 'Hello! I am Mr. Happy Face.';
        p.text(s, 100, 600, 1000, 700); // Text wraps within text box
      };
    };
    constructor() {
      this.sketch = null;
    }

    ngOnInit(): void {
      const canvasElm = document.getElementById('mainCanvas') || undefined;
      this.sketch = new p5(this.p5f, canvasElm);
    }
  }`;
}
