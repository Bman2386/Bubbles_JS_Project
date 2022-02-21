import Sound from "./sound";

export default class Bubble {
    constructor(canvasWidth, canvasHeight) {
        const canvas = document.getElementById('myCanvas');
        this.ctx = canvas.getContext("2d");

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.bubbleWidth = 20;
        this.bubbleHeight = 20;

        this.bubbleHealth = 20;

        this.bubbleX = 450;
        this.bubbleY = 200;
        this.dirX = 0;
        this.dirY = 0;

        this.score = 0;
        this.sound = new Sound("src/game/sounds/pop.mp3");
        this.boostSound = new Sound("src/game/sounds/boost.mp3");
        this.mute = false;
        this.imgSrc = "./images/bubble.png";

        this.drawBubble = this.drawBubble.bind(this);
        this.moveBubble = this.moveBubble.bind(this)

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.stopBubble = this.stopBubble.bind(this);

        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    drawBubble(ctx){
        const img = new Image();
        img.src = this.imgSrc   
        this.bubbleSize(this.bubbleHealth)   
        ctx.drawImage(img, this.bubbleX, this.bubbleY, this.bubbleWidth, this.bubbleHeight)
    }

    bubbleSize(bubbleHealth) {
        if (bubbleHealth === 2) {
            this.bubbleHeight = 50;
            this.bubbleWidth = 50;
            this.imgSrc = "./images/bubble.png";
        } else if (bubbleHealth < 2) {
            this.bubbleHeight = 20;
            this.bubbleWidth = 20;
            this.imgSrc = "./images/bubble.png";
        } else if (bubbleHealth > 30) {
            this.bubbleHeight = 50;
            this.bubbleWidth = 50;
            this.imgSrc = "./images/shield.jpg"
        }

    }

    newPos() {
        this.bubbleX += this.dirX;
        this.bubbleY += this.dirY;
        
        this.detectBorders();
    };

    detectBorders() {
        if (this.bubbleX < 3){
            this.bubbleX = 4
        } 

        if (this.bubbleX > 884) {
            this.bubbleX = 882
        }
        if (this.bubbleY > 480) {
            this.bubbleY = 478
        } 
        if (this.bubbleY < 3) {
            this.bubbleY = 4
        }
    }
    moveBubble(direction) {
        switch (direction) {
            case "left":
                this.dirX = -2;
                break;
            case "right":
                this.dirX = 2;
                break;
            case "up":
                this.dirY = -2;
                break
            case "down":
                this.dirY = 2;
                break;
            case "boost":
                this.mute ? null : this.boostSound.play()
                this.dirX *= 5;
                this.dirY *= 5;
                break
        }
    };

    stopBubble(direction){
        if (direction === 'horizontal'){
            this.dirX = 0;
        }
        if (direction === 'vertical'){
            this.dirY = 0;
        }
    }
    keyDownHandler(e) {
        e.preventDefault();
        if (e.key == "a" || e.key == "KeyA") {
            this.moveBubble("left");
        } else if (e.key == "d" || e.key == "KeyD") {
            this.moveBubble("right");
        } else if (e.key == "w" || e.key == "KeyW") {
            this.moveBubble("up");
        } else if (e.key == "s" || e.key == "KeyS"){
            this.moveBubble("down")
        } else if ((e.key == " " || e.key =="SpaceBar") && this.bubbleHealth > 30){
            this.moveBubble("boost")
        } 

    };

    keyUpHandler(e) {
        e.preventDefault();
        if (e.key == "a" || e.key == "KeyA" || e.key == "d" || e.key == "KeyD") {
            this.stopBubble("horizontal");
        } else if (e.key == "w" || e.key == "KeyW" || e.key == "s" || e.key == "KeyS") {
            this.stopBubble("vertical");
        } 
    };
}