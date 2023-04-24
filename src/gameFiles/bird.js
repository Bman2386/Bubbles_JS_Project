import birdImg from "./images/bird.jpg"

export default class Enemy {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        // size of bird
        this.birdHeight = 75
        this.birdWidth = 75
        // use Math.rndom to generate birds in random positions
        // with a min floor of 200
        this.birdY = Math.floor(Math.random() * Math.floor(200))
        this.birdX = 0
        // drawBird is defined below, it's the function that actually draws the bird
        // we need to bind "this" to it so we don't lose it upon creation
        this.drawBird = this.drawBird.bind(this)
    }

    drawBird(ctx) {
        const img = new Image()
        img.src = birdImg
        ctx.drawImage(img, this.birdX, this.birdY, this.birdWidth, this.birdHeight)
        // adding 7 to the birdX makes it move accross screen
        this.birdX += 7
    }
}