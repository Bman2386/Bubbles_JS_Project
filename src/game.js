import Bubble from './bubble';
import Clip from './clip';
import Ups from './ups';
import Bird from './bird'
import Cloud from './cloud'

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.bubble = new Bubble(this.canvasWidth, this.canvasHeight);
        this.clip = new Clip(this.canvasWidth, this.canvasHeight);
        // this.ups = new Ups(this.canvasWidth, this.canvasHeight)

        this.birds = [];
        let bird = new Bird;
        this.birds.push(bird)

        this.clouds = [];
        let cloud = new Cloud;

        this.ups = [];
        let up = new Ups
        
        this.deadX 
        this.deadY

        this.frameB = 0;
        this.frameC = 0;

        this.playing = false;
        // this.soundOn = true;
        this.score = 0;

        this.gameOver = this.gameOver.bind(this);
        this.gameUpdate = this.gameUpdate.bind(this);
        this.restart = this.restart.bind(this);
        this.endGame = this.endGame.bind(this);

        this.scoreCount = document.getElementById("score");
        this.updateScore = this.updateScore.bind(this);
        // this.updateFrameNav = this.updateFrameNav.bind(this);
    }

    restart() {
        if (this.frameId) {
            cancelAnimationFrame(this.frameId)
        }

        this.playing = true

        this.bubble.bubbleX = 200;
        this.bubble.bubbleY = 100;
        this.bubble.bubbleHealth = 2;
        this.bubble.score = 0;
        this.bubble.drawBubble(this.bubble.ctx);
        // this.clip.drawClip(this.clip.ctx)
        // this.ups.drawBubbles(this.ups.ctx)
        this.gameUpdate();
    }


    detectClipCollision(clip) {
        const clipTop = ((clip.clipY))
        const clipBottom = ((clip.clipY + clip.clipHeight));
        const clipLeft = ((clip.clipX))
        const clipRight = ((clip.clipX + clip.clipWidth));

        const bubbleTop = ((this.bubble.bubbleY));
        const bubbleBottom = ((this.bubble.bubbleY + this.bubble.bubbleHeight));
        const bubbleLeft = ((this.bubble.bubbleX));
        const bubbleRight = ((this.bubble.bubbleX + this.bubble.bubbleWidth))

        if ((clipLeft < bubbleRight && clipRight > bubbleLeft) &&
        (clipTop < bubbleBottom && clipBottom > bubbleTop)) {
            this.bubble.bubbleHealth -= 1;
        }
    }

    detectBirdCollision(bird) {
        const birdTop = ((bird.birdY))
        const birdBottom = ((bird.birdY + bird.birdHeight));
        const birdLeft = ((bird.birdX))
        const birdRight = ((bird.birdX + bird.birdWidth));

        const bubbleTop = ((this.bubble.bubbleY));
        const bubbleBottom = ((this.bubble.bubbleY + this.bubble.bubbleHeight));
        const bubbleLeft = ((this.bubble.bubbleX));
        const bubbleRight = ((this.bubble.bubbleX + this.bubble.bubbleWidth))
        
        if ((birdLeft < bubbleRight && birdRight > bubbleLeft) &&
        (birdTop < bubbleBottom && birdBottom > bubbleTop)) {
            this.deadX = bird.birdX
            this.deadY = bird.birdY
            this.clouds.push(new Cloud);
            this.birds.shift();
            this.bubble.bubbleHealth -= 1;
        }
       if (bird.birdX > 800) {
           this.birds.shift();
       }
    }

    detectBubblesCollision(bubbles){
        const bubblesTop = ((bubbles.bubblesY))
        const bubblesBottom = ((bubbles.bubblesY + bubbles.bubblesHeight));
        const bubblesLeft = ((bubbles.bubblesX))
        const bubblesRight = ((bubbles.bubblesX + bubbles.bubblesWidth));
        
        const bubbleTop = ((this.bubble.bubbleY));
        const bubbleBottom = ((this.bubble.bubbleY + this.bubble.bubbleHeight));
        const bubbleLeft = ((this.bubble.bubbleX));
        const bubbleRight = ((this.bubble.bubbleX + this.bubble.bubbleWidth))

        if ((bubblesLeft <= bubbleRight && bubblesRight >= bubbleLeft) &&
         (bubblesTop <= bubbleBottom && bubblesBottom >= bubbleTop)) {
            this.bubble.bubbleHealth = 2;
            this.ups.shift()
        }
    }

    gameUpdate() {
        if (this.playing === true) {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            this.bubble.newPos();
            this.bubble.drawBubble(this.ctx);
            
            this.clip.drawClip(this.ctx)

            this.frameB += 1;

            this.birds.forEach(bird => {
                bird.drawBird(this.ctx)
            })

            this.clouds.forEach(cloud => {
                cloud.drawCloud(this.ctx, this.deadX, this.deadY)
            })

            this.ups.forEach(up =>{
                up.drawBubbles(this.ctx, this.deadX, this.deadY)
            })

            if (this.frameB > 100) {
                this.birds.push(new Bird);
                this.frameB = 0;
            }

            if (this.clouds.length > 0) {
                this.frameC += 1
            }

            if (this.frameC > 25) {
                this.clouds.shift()
                this.ups.push(new Ups)
                this.frameC = 0
            }
            // this.frameH += 1;
            // this.frameC += 1;
            this.detectClipCollision(this.clip)
            this.birds.forEach(bird => {
                this.detectBirdCollision(bird)
            })
            this.ups.forEach(up => {
                this.detectBubblesCollision(up)
            })
            
            if (this.gameOver()) {
                this.endGame(this.ctx);
            }
            
            this.updateScore()
            this.frameId = requestAnimationFrame(this.gameUpdate);
        }
    }

    updateScore() {
        // document.getElementById('score')
        this.bubble.score += 1;
        this.scoreCount.innerText = `Score: ${this.bubble.score}`;
    }

    gameOver() {
        if (this.bubble.bubbleHealth < 1) {
            // this.scoreCount.innerText = `Score: 0`;
            return true;
        }
        return false;
    }

    endGame(ctx){
        this.playing = false;
        const img = new Image();
        img.src = '../images/Game_Over.png'
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 900, 500)
        }
    }

    
}