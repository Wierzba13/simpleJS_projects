const pencilColor = document.querySelector('#pencilColor');
const bgcColor = document.querySelector('#bgcColor');
const pencilSize = document.querySelector('#pencilSize');
const clearBtn = document.querySelector('#clear');
const saveBtn = document.querySelector('#save');
const currPath = [];
const paths = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bgcColor.value);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    if(mouseIsPressed) {
        let point = {
            x: mouseX,
            y: mouseY,
            color: pencilColor.value,
            size: pencilSize.value,
        };
        currPath.push(point);
    }

    paths.forEach((path) => {
        beginShape();
        path.forEach(({x, y, color, size}) => {
          vertex(x, y);
          strokeWeight(size);
          stroke(color);
        });
        endShape();
    });
    
    noFill();
}

function mousePressed() {
    currPath.length = 0;
    paths.push(currPath);
}

bgcColor.addEventListener('change', () => background(bgcColor.value));
clearBtn.addEventListener('click', () => {
    clear();
    background(bgcColor.value);
});
saveBtn.addEventListener('click', () => save('canvas.png'));