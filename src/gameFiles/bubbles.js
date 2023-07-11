
export default class Bubbles {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.bubblesHeight = 40
        this.bubblesWidth = 40

        this.bubblesX = 250
        this.bubblesY = 150

        this.drawBubbles = this.drawBubbles.bind(this)

        this.bubblesSrc = "./images/bubbles.jpg"
    }

    drawBubbles(ctx, deadX, deadY) {
        const img = new Image()
        img.src = this.bubblesSrc
        ctx.drawImage(img, this.bubblesX, this.bubblesY, this.bubblesHeight, this.bubblesWidth)
        this.move(deadX, deadY)
    }

    move(deadX, deadY) {
        this.bubblesX = deadX
        this.bubblesY = deadY
    }
}