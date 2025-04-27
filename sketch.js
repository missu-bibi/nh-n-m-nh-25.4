let animals = ["llama","capybara","deer"]
let index = 0
function setup() {
    createCanvas(400,400);
}

function draw() {
    background(200)

    rect(50,50,100,100)
    text(animals[index % animals.length],200,200)
}

function mouseClicked() {
    index = index+1
   // if (index > animals.length -1) {
     //   index = 0
    }


