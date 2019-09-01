class Mario {
    constructor(x,y) {
        this.position = createVector(x,y)
    }

    loadSprite(imgCode) {
        let imgSource = ['sprites/jump.bmp','sprites/lose.bmp','sprites/run.bmp','sprites/stand.bmp']
        let path = str(imgSource[imgCode])
        console.log(path)
        console.log(typeof(path))
        loadImage("sprites/jump.bmp", img=> {
            image(img, img,this.position.y)
            console.log("image")
          });

        
    }



}