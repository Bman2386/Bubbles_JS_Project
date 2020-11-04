

export default class Boss {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas');
        this.ctx = canvas.getContext("2d");

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.bossWidth = 200;
        this.bossHeight = 200;

        this.bossHealth = 20;

        this.bossX = 200;
        this.bossY = 75;
        
        this.imgSrc = "./images/spaceship.jpg"

        this.drawBoss = this.drawBoss.bind(this)

        this.direction = "right"
    }

    drawBoss(ctx) {
        const img = new Image();
        img.src = this.imgSrc
        ctx.drawImage(img, this.bossX, this.bossY, this.bossWidth, this.bossHeight)
    }

    bossMove() {
        if (this.direction === "right") {
            this.bossX += 10;
        } else if (this.direction === "left") {
            this.bossX -= 10;
        }
        this.boundry()
       
    }

    boundry() {
        console.log("boundry", this.bossX)
        if (this.bossX > 700) {
            this.direction = "left"
        } else if (this.bossX < -20) {
            this.direction = "right"
        }
    }
}