

export default class Shield {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.width = 50
        this.height = 50

        this.x = Math.floor(Math.random() * Math.floor(800))
        this.y = 0

        this.drawShield = this.drawShield.bind(this)

        this.imgSrc = "./images/shield.jpg"
    }

    drawShield(ctx) {
        const img = new Image()
        img.src = this.imgSrc
        ctx.drawImage(img, this.x, this.y, this.height, this.width)
        this.fall()
    }

    fall() {
        this.y += 3
    }
}