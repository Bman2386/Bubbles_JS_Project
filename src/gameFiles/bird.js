import birdImg from "./images/bird.jpg"

export default class Bird {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        
        this.birdHeight = 75
        this.birdWidth = 75
        
        this.birdY = Math.floor(Math.random() * Math.floor(200))
        this.birdX = 0
        
        this.drawBird = this.drawBird.bind(this)
       
    }

    
    drawBird(ctx) {
        const img = new Image()
        const moveBirdAccrossScreen = 7
        img.src = birdImg
        ctx.drawImage(img, this.birdX, this.birdY, this.birdWidth, this.birdHeight)
        this.birdX += moveBirdAccrossScreen
    }
}