

export default class Poop {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
            this.ctx = canvas.getContext("2d")
            this.canvasWidth = canvasWidth
            this.canvasHeight = canvasHeight
    
            this.height = 50
            this.width = 50
            this.x 
            this.y 
    
            this.poopSrc = './images/poop.jpg'
            this.drawPoop = this.drawPoop.bind(this)
        }
        drawPoop(ctx) {
            const img = new Image()
            img.src = this.poopSrc
            ctx.drawImage(img, this.x, this.y, this.height, this.width)
            this.fall()
        }
 
        startPosition(birdXPosition, birdYPosition) {
            this.poopX = birdXPosition
            this.y = birdYPosition
        }
        fall(){
            this.y += 5
        }
}