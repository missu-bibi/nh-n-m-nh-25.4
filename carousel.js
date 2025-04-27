let pic1
let pic2
let pic3
let pixcarousel = []
let index = 0

function preload() {

pic1 = loadImage("asset/img4.png");
pic2 = loadImage("asset/img1.png");
pic3 = loadImage("asset/img2.png");
}



function setup() {
    createCanvas(windowWidth,windowHeight)
    pixcarousel =[pic1,pic2,pic3]
    
}

function draw() {
    background(200,0);
    image(pixcarousel[index % pixcarousel.length],mouseX, mouseY);
    pic3.resize(200,mouseX)
}

function mouseClicked() {
    index = index + 1;
}

//nhấn arrow left đi ngược lại, arrow right đi tới