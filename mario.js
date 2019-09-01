class Mario {
    constructor(x,y) {
        this.position = createVector(x,y)
    }

    loadSprite(imgCode) {
        let imgSource = ['sprites/jump.bmp','sprites/lose.bmp','sprites/run.bmp','sprites/stand.bmp']
        this.currentImage = loadImage(imgSource[imgCode])
        image(this.currentImage, this.position.x,this.position.y)
    }



}