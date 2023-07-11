
export default class Bubbles {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.height = 40
        this.width = 40

        this.x = 250
        this.y = 150

        this.drawBubbles = this.drawBubbles.bind(this)

        this.bubblesSrc = "./images/bubbles.jpg"
    }

    drawBubbles(ctx, deadX, deadY) {
        const img = new Image()
        img.src = this.bubblesSrc
        ctx.drawImage(img, this.x, this.y, this.height, this.width)
        this.move(deadX, deadY)
    }

    move(deadX, deadY) {
        this.x = deadX
        this.y = deadY
    }
}