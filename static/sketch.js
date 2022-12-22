let orbitals;
let thetaM = 1;
let thetaInterval;
const bg = 10;

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight, WEBGL);
    canvas.parent("sketch");
    translate(-width/2, -height/2);
    noStroke();
    fill(204);
    orbitals=new Array();
    let numO = int(random(5, 16));
    for(let i = 0;i < numO;i++) {
        orbitals.push(new Orbital());
    }

    if (window.innerWidth < 600) noLoop();
}

function mouseWheel(event) {
    // console.log(event);
    // bg += event.delta/50;
    // bg = Math.abs(bg % 100);
    thetaM = 10;
    clearInterval(thetaInterval);
    thetaInterval = setInterval(() => {
        if (thetaM <= 1) {
            clearInterval(thetaInterval);
        } else {
            thetaM-=0.5;
        }
    }, 125);
}

function draw(){
    translate(-width/2, -height/2);
    background(bg);
    translate(width / 2, height / 2);
    pointLight(255, 183, 77, 0, 0, -100);
    pointLight(100, 100, 100, width / 2, height / 2, 100);
    for (let P2JSi = 0; P2JSi < orbitals.length; P2JSi++){
        let o = orbitals[P2JSi];
        o.draw();
    }
}

class Orbital{
    constructor(){
        this.posY = 0;
        this.minSize = random(5, 16);
        this.maxSize=random(50, 250);
        this.posX=this.posY=0;
        this.rad=this.maxSize;
        this.dRad=random(0.01, 0.15);
        this.radiusX=random((width / 2) - (2 * this.maxSize));
        this.radiusY=random((height / 2) - (2 * this.maxSize));
        this.theta=random(360);
        this.dTheta=random(0.001, 0.002);
    }

    draw(){
        this.theta+=this.dTheta*thetaM;
        this.posX=this.radiusX * cos(this.theta);
        this.posY=this.radiusY * sin(this.theta);
        translate(this.posX, this.posY);
        // this.rad+=this.dRad;
        // if(this.rad <= this.minSize || this.rad > this.maxSize) {
        //     this.dRad*=-1;
        // }
        sphere(this.rad);
    }

}