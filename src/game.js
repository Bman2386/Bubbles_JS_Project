import Bubble from './bubble';
import Clip from './clip';
import Ups from './ups';
import Bird from './bird';
import Cloud from './cloud';
import Poop from './poop';
import Shield from './shield';
import Boss from "./boss"

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.bubble = new Bubble(this.canvasWidth, this.canvasHeight);
        this.boss = new Boss

        this.birds = [];
        this.clouds = [];
        this.ups = [];
        this.clips = [];
        this.poops = [];
        this.shield = [];

        this.deadX 
        this.deadY

        this.frameB = 0;
        this.frameC = 0;
        this.frameP = 0;
        this.frameS = 0;
        this.frameX = 0;

        this.protected = false;
        this.win = false;
        this.playing = false;
        // this.soundOn = true;

        this.gameOver = this.gameOver.bind(this);
        this.gameUpdate = this.gameUpdate.bind(this);
        this.restart = this.restart.bind(this);
        this.endGame = this.endGame.bind(this);

        this.scoreCount = document.getElementById("score");
        this.updateScore = this.updateScore.bind(this);
    }

    restart() {
        if (this.frameId) {
            cancelAnimationFrame(this.frameId)
        }

        this.playing = true;
        this.win = false;
        this.bubble.bubbleX = 200;
        this.bubble.bubbleY = 100;
        this.bubble.bubbleHealth = 2;
        this.boss.bossHealth = 20
        this.bubble.score = 0;
        this.clips = [];
        this.shields = [];
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
            if (this.protected === false) {
                this.bubble.bubbleHealth -= 1;
            }
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
            if (this.protected === false) {
                this.bubble.bubbleHealth -= 1;
            }
        }
       if (bird.birdX > 800) {
           this.birds.shift();
       }
    }

    detectBossCollision(boss) {
        const bossTop = ((boss.bossY))
        const bossBottom = ((boss.bossY + boss.bossHeight));
        const bossLeft = ((boss.bossX))
        const bossRight = ((boss.bossX + boss.bossWidth));

        const bubbleTop = ((this.bubble.bubbleY));
        const bubbleBottom = ((this.bubble.bubbleY + this.bubble.bubbleHeight));
        const bubbleLeft = ((this.bubble.bubbleX));
        const bubbleRight = ((this.bubble.bubbleX + this.bubble.bubbleWidth))

        if ((bossLeft < bubbleRight && bossRight > bubbleLeft) &&
        (bossTop < bubbleBottom && bossBottom > bubbleTop)) {
            if (this.protected === false) {
                this.bubble.bubbleHealth -= 1;
            }
            boss.bossHealth -= 1;
            if (boss.bossHealth < 0) {
                this.win = true
            }
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
            this.poops.shift();
            if (this.protected === false) {
                this.bubble.bubbleHealth -= 1;
            }
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
            this.bubble.bubbleHealth += 1;
            this.bubble.score += 5;
            this.ups.shift()
            
        }
    }

    detectShieldCollision(shield){
        const shieldTop = ((shield.shieldY))
        const shieldBottom = ((shield.shieldY + shield.shieldHeight));
        const shieldLeft = ((shield.shieldX))
        const shieldRight = ((shield.shieldX + shield.shieldWidth));
        
        const bubbleTop = ((this.bubble.bubbleY));
        const bubbleBottom = ((this.bubble.bubbleY + this.bubble.bubbleHeight));
        const bubbleLeft = ((this.bubble.bubbleX));
        const bubbleRight = ((this.bubble.bubbleX + this.bubble.bubbleWidth))

        if ((shieldLeft <= bubbleRight && shieldRight >= bubbleLeft) &&
         (shieldTop <= bubbleBottom && shieldBottom >= bubbleTop)) {
            this.bubble.bubbleHealth = 3;
            this.bubble.score += 50;
            this.shields.shift()
            this.protected = true;
            this.frameX = 0;
        }
        if (shield.shieldY > 500) {
            this.shields.shift();
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

            this.frameS += 1;
            this.frameB += 1;
            // if (this.bubble.score < 50) {
                
            // } else {
            //     this.frameX += 1
            //     this.frameB = 0
            // }
           if (this.protected) {
               this.frameX += 1
           }

            if (this.bubble.score > 500) {
                // this.boss.health = 50
                this.boss.bossMove()
                this.boss.drawBoss(this.ctx)
                this.detectBossCollision(this.boss);
            }

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

            this.shields.forEach(shield =>{
                shield.drawShield(this.ctx)
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

            if (this.frameS > 100) {
                this.shields.push(new Shield)
                this.frameS = 0;
            }
           
            if (this.frameX > 400) {
                this.protected = false;
                this.bubble.bubbleHealth = 2;
                this.frameX = 0
            }

            this.clips.forEach(clip => {
                this.detectClipCollision(clip);
            })
            this.birds.forEach(bird => {
                this.detectBirdCollision(bird);
            })
            this.ups.forEach(up => {
                this.detectBubblesCollision(up);
            })

            this.shields.forEach(shield => {
                this.detectShieldCollision(shield);
            })

            this.poops.forEach(poop => {
                this.detectPoopCollision(poop);
            })
            
            if (this.win) {
                this.winScreen(this.ctx)
            }
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

    winScreen(ctx){
        this.playing = false;
        const img = new Image();
        img.src = './images/youwin.png'
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 900, 500)
        }
    }

    gameOver() {
        // debugger
        if (this.bubble.bubbleHealth < 1) {
            // this.scoreCount.innerText = `You WIN!!! Score: ${this.bubble.score}`;
            return true;
        }
        return false;
    }

    endGame(ctx){
        this.playing = false;
        const img = new Image();
        img.src = './images/Game_Over.png'
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 900, 500)
        }
    }

    
}