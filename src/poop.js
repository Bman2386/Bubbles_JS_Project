

export default class Poop {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas');
            this.ctx = canvas.getContext("2d");
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
    
            this.poopHeight = 50;
            this.poopWidth = 50;
            this.poopX 
            this.poopY 
    
            this.poopSrc = '../images/poop.jpg';
            this.drawPoop = this.drawPoop.bind(this)
        }
        drawPoop(ctx) {
            const img = new Image();
            img.src = this.poopSrc;
            ctx.drawImage(img, this.poopX, this.poopY, this.poopHeight, this.poopWidth);
            this.fall()
        }

        start(tempX, tempY) {
            this.poopX = tempX;
            this.poopY = tempY;
        }
        fall(){
            this.poopY += 5
        }
}