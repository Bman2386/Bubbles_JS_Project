import birdImg from "./images/bird.jpg"

export default class Bird {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        
        this.height = 75
        this.width = 75
        
        this.y = Math.floor(Math.random() * Math.floor(200))
        this.x = 0
        
        this.drawBird = this.drawBird.bind(this)
       
    }

    
    drawBird(ctx) {
        const img = new Image()
        const moveBirdAccrossScreen = 7
        img.src = birdImg
        ctx.drawImage(img, this.x, this.y, this.width, this.height)
        this.x += moveBirdAccrossScreen
    }
}