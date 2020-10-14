
export default class Ups {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas');
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.bubblesHeight = 40;
        this.bubblesWidth = 40;

        this.bubblesX = 250;
        this.bubblesY = 150;

        this.drawBubbles = this.drawBubbles.bind(this)

        this.bubblesSrc = "../images/bubbles.jpg";
    }

    drawBubbles(ctx) {
        const img = new Image();
        img.src = this.bubblesSrc;
        ctx.drawImage(img, this.bubblesX, this.bubblesY, this.bubblesHeight, this.bubblesWidth)
    }

}