
export default class Clip {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas');
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.clipHeight = 25;
        this.clipWidth = 25;

        this.clipX = 400;
        this.clipY = 150;

        this.drawClip = this.drawClip.bind(this);

        this.imgSrc = "../images/paperclip.png";
    }

    drawClip(ctx) {
        const img = new Image();
        img.src = this.imgSrc
        ctx.drawImage(img, this.clipX, this.clipY, this.clipHeight, this.clipWidth)
    }
}