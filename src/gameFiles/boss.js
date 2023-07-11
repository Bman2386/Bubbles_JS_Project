

export default class Boss {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        
        this.width = 200
        this.height = 200

        this.bossHealth = 300
        this.x = 200
        this.y = 75
        
        this.imgSrc = "./images/spaceship.jpg"
        this.drawBoss = this.drawBoss.bind(this)
        this.direction = "right"
    }

    drawBoss(ctx) {
        const img = new Image()
        img.src = this.imgSrc
        ctx.drawImage(img, this.x, this.y, this.width, this.height)
        this.healthBar()
    }

    healthBar() {
        const pixelWidth = 300
        const pixelHeight = 20
        const aboveBossHead = this.y - 20
        const innerHealthBarColor = "#FF0000"
        const outerHealthBarColor = "#339933"
        this.ctx.beginPath()
        this.ctx.rect(this.x, aboveBossHead, pixelWidth, pixelHeight)
        this.ctx.fillStyle = innerHealthBarColor
        this.ctx.fill()

        this.ctx.beginPath(); 
        this.ctx.rect(this.x, aboveBossHead, this.bossHealth, pixelHeight)
        this.ctx.fillStyle = outerHealthBarColor
        this.ctx.fill()
    }


    bossMove() {
        if (this.direction === "right") {
            this.x += 10
        }
         if (this.direction === "left") {
            this.x -= 10
        }
        this.boundry()
    }

    boundry() {
        if (this.x > 700) {
            this.direction = "left"
        } else if (this.x < -20) {
            this.direction = "right"
        }
    }
}