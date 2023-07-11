
export default class Clip {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.height = 25
        this.width = 25

        this.x = Math.floor(Math.random() * Math.floor(900) )
        this.y = Math.floor(Math.random() * Math.floor(500) )

        this.drawClip = this.drawClip.bind(this)

        this.imgSrc = "./images/paperclip.png"
    }

    drawClip(ctx) {
        const img = new Image()
        img.src = this.imgSrc
        ctx.drawImage(img, this.x, this.y, this.height, this.width)
    }
}