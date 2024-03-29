

export default class Boss {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        
        this.bossWidth = 200
        this.bossHeight = 200

        this.bossHealth = 300
        this.bossX = 200
        this.bossY = 75
        
        this.imgSrc = "./images/spaceship.jpg"
        this.drawBoss = this.drawBoss.bind(this)
        this.direction = "right"
    }

    drawBoss(ctx) {
        const img = new Image()
        img.src = this.imgSrc
        ctx.drawImage(img, this.bossX, this.bossY, this.bossWidth, this.bossHeight)
        this.healthBar()
    }

    healthBar() {
        const pixelWidth = 300
        const pixelHeight = 20
        const aboveBossHead = this.bossY - 20
        const innerHealthBarColor = "#FF0000"
        const outerHealthBarColor = "#339933"
        this.ctx.beginPath()
        this.ctx.rect(this.bossX, aboveBossHead, pixelWidth, pixelHeight)
        this.ctx.fillStyle = innerHealthBarColor
        this.ctx.fill()

        this.ctx.beginPath(); 
        this.ctx.rect(this.bossX, aboveBossHead, this.bossHealth, pixelHeight)
        this.ctx.fillStyle = outerHealthBarColor
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