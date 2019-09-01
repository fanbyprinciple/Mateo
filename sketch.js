var screenWidth = 512
var screenHeight = 432

function setup() {
    createCanvas(screenWidth, screenHeight)
    mario = new Mario(width/2,height/2)
    background(0)

}

var mario

function setMarioLevel() {
    strokeWeight (10)
    noFill ()
    rect (0,0, width, height)
    
}

function checkBoundary() {
    
}

function draw() {

    
   // checkBoundary()
    setMarioLevel()
    mario.loadSprite(0)

    
    
}

