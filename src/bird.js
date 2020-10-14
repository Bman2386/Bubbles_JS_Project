

export default class Enemy {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas');
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.birdHeight = 50;
        this.birdWidth = 50;

        this.birdY = Math.floor(Math.random() * Math.floor(400));
        this.birdX = 0

        this.drawBird = this.drawBird.bind(this)

    }

    drawBird(ctx) {
        const img = new Image();
        img.src = "../images/bird.jpg";
        ctx.drawImage(img, this.birdX, this.birdY, this.birdWidth, this.birdHeight);
        this.birdX += 5
    }
}