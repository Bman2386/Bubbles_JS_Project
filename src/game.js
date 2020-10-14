import Bubble from './bubble';
import Clip from './clip';
import Ups from './ups';
import Bird from './bird';
import Cloud from './cloud';
import Poop from './poop'

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.bubble = new Bubble(this.canvasWidth, this.canvasHeight);

        this.birds = [];
        let bird = new Bird;
        this.birds.push(bird)

        this.clouds = [];

        this.ups = [];

        this.clips = [];
        this.poops = [];

        this.deadX 
        this.deadY

        this.frameB = 0;
        this.frameC = 0;
        this.frameP = 0;

        this.playing = false;
        // this.soundOn = true;

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
        this.clips = [];
        this.bubble.drawBubble(this.bubble.ctx);
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
            this.clips.shift()
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

    detectPoopCollision(poop) {
        const poopTop = ((poop.poopY))
        const poopBottom = ((poop.poopY + poop.poopHeight));
        const poopLeft = ((poop.poopX))
        const poopRight = ((poop.poopX + poop.poopWidth));

        const bubbleTop = ((this.bubble.bubbleY));
        const bubbleBottom = ((this.bubble.bubbleY + this.bubble.bubbleHeight));
        const bubbleLeft = ((this.bubble.bubbleX));
        const bubbleRight = ((this.bubble.bubbleX + this.bubble.bubbleWidth))
        
        if ((poopLeft < bubbleRight && poopRight > bubbleLeft) &&
        (poopTop < bubbleBottom && poopBottom > bubbleTop)) {
            this.deadX = poop.poopX
            this.deadY = poop.poopY
            this.clouds.push(new Cloud);
            this.poops.shift();
            this.bubble.bubbleHealth -= 1;
        }
       if (poop.poopY > 500) {
           this.poops.shift();
           this.clips.push(new Clip)
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

    pooping(bird) {
        let tempX;
        let tempY;
        if (this.frameP > 15) {
                tempX = bird.birdX;
                tempY = bird.birdY;
                this.poops.push(new Poop)
                this.poops[this.poops.length - 1].start(tempX, tempY)
                this.frameP = 0
            }
    }

    gameUpdate() {
        if (this.playing === true) {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            this.bubble.newPos();
            this.bubble.drawBubble(this.ctx);
            

            this.frameB += 1;

            this.clips.forEach(clip => {
                clip.drawClip(this.ctx)
            })
            this.birds.forEach(bird => {
                bird.drawBird(this.ctx)
                this.pooping(bird);
            })

            this.clouds.forEach(cloud => {
                cloud.drawCloud(this.ctx, this.deadX, this.deadY)
            })

            this.ups.forEach(up =>{
                up.drawBubbles(this.ctx, this.deadX, this.deadY)
            })

            this.poops.forEach(poop => {
                poop.drawPoop(this.ctx)
            })

            if (this.frameB > 75) {
                this.birds.push(new Bird);
                this.frameB = 0;
            }
            if (this.birds.length > 0) {
                this.frameP += 1;
            }

           

            if (this.clouds.length > 0) {
                this.frameC += 1;
            }

            if (this.frameC > 25) {
                this.clouds.shift()
                this.ups.push(new Ups)
                this.frameC = 0
            }
            // this.frameH += 1;
            // this.frameC += 1;
            this.clips.forEach(clip => {
                this.detectClipCollision(clip)
            })
            this.birds.forEach(bird => {
                this.detectBirdCollision(bird)
            })
            this.ups.forEach(up => {
                this.detectBubblesCollision(up)
            })

            this.poops.forEach(poop => {
                this.detectPoopCollision(poop)
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
        this.bubble.score += 0.01558;
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