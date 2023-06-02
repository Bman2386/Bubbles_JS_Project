

export default class Boss {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        // canvas size
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        // Boss size
        this.bossWidth = 200
        this.bossHeight = 200

        this.bossHealth = 300
        // Boss starting position
        this.bossX = 200
        this.bossY = 75
        
        this.imgSrc = "./images/spaceship.jpg"
        // Binding "this" to the drawBoss function so that we don't lose on instantiation
        this.drawBoss = this.drawBoss.bind(this)
        // starting direction of boss
        this.direction = "right"
    }

    drawBoss(ctx) {
        // draws the boss on screen when score threshold is reached
        const img = new Image()
        img.src = this.imgSrc
        ctx.drawImage(img, this.bossX, this.bossY, this.bossWidth, this.bossHeight)
        this.healthBar()
    }

    healthBar() {
        // health bar for the boss
        this.ctx.beginPath()
        this.ctx.rect(this.bossX, (this.bossY-20), 300, 20)
        this.ctx.fillStyle = "#FF0000"
        this.ctx.fill()

        this.ctx.beginPath(); 
        this.ctx.rect(this.bossX, (this.bossY-20), this.bossHealth, 20)
        this.ctx.fillStyle = "#339933"
        this.ctx.fill()
    }


    bossMove() {
        if (this.direction === "right") {
            this.bossX += 10
        }
         if (this.direction === "left") {
            this.bossX -= 10
        }
        this.boundry()
    }

    boundry() {
        if (this.bossX > 700) {
            this.direction = "left"
        } else if (this.bossX < -20) {
            this.direction = "right"
        }
    }
}