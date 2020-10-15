

export default class Shield {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas');
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.shieldWidth = 50;
        this.shieldHeight = 50;

        this.shieldX = Math.floor(Math.random() * Math.floor(800));
        this.shieldY = 0;

        this.drawShield = this.drawShield.bind(this);

        this.imgSrc = "../images/shield.jpg"
    }

    drawShield(ctx) {
        const img = new Image();
        img.src = this.imgSrc
        ctx.drawImage(img, this.shieldX, this.shieldY, this.shieldHeight, this.shieldWidth)
        this.fall()
    }

    fall() {
        this.shieldY += 3;
    }
}