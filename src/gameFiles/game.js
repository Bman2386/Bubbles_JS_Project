import Bubble from './bubble';
import Clip from './clip';
import Ups from './ups';
import Bird from './bird';
import Cloud from './cloud';
import Poop from './poop';
import Shield from './shield';
import Boss from "./boss";
import Sound from "./sound"

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
        this.soundOn = false;

        this.winSound = new Sound("src/gameFiles/sounds/win.mp3");
        this.loseSound = new Sound("src/gameFiles/sounds/lose.mp3");
        this.fartSound = new Sound("src/gameFiles/sounds/fart.mp3");
        this.upsSound = new Sound("src/gameFiles/sounds/ups.mp3");
        this.birdSound = new Sound("src/gameFiles/sounds/bird.mp3");
        this.deadSound = new Sound("src/gameFiles/sounds/dead.mp3");

        this.gameMusic = new Sound("src/gameFiles/sounds/game.mp3")
        this.bossMusic = new Sound("src/gameFiles/sounds/boss.mp3")

        this.gameOver = this.gameOver.bind(this);
        this.gameUpdate = this.gameUpdate.bind(this);
        this.restart = this.restart.bind(this);
        this.endGame = this.endGame.bind(this);
        this.mute = this.mute.bind(this);
        this.scoreCount = document.getElementById("score");
        this.updateScore = this.updateScore.bind(this);
        this.muteDisplay = this.muteDisplay.bind(this);
    }

    

    restart() {
        if (this.frameId) {
            cancelAnimationFrame(this.frameId)
        }

        this.playing = true;
        this.win = false;
        this.bubble.bubbleX = 450;
        this.bubble.bubbleY = 200;
        this.bubble.bubbleHealth = 2;
        this.boss.bossHealth = 300
        this.bubble.score = 0;
        this.clips = [];
        this.shields = [];
        this.birds = [];
        this.poops = [];
        this.ups = [];
        this.bubble.drawBubble(this.bubble.ctx);
        this.gameUpdate();
        this.soundOn = true;
    }

    mute() {
        if (this.soundOn){
            this.soundOn = false;
            this.bubble.mute = true;
            this.gameMusic.stop();
        } else {
            this.soundOn = true;
            this.bubble.mute = false;
            this.gameMusic.play();
        }
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
        const idx = this.clips.indexOf(clip)

        if ((clipLeft < bubbleRight && clipRight > bubbleLeft) &&
        (clipTop < bubbleBottom && clipBottom > bubbleTop)) {
            this.clips.splice(idx, 1);
            this.bubble.score += 1;
            if (this.protected === false) {
                this.bubble.bubbleHealth -= 1;
                this.soundOn ? this.bubble.sound.play() : null;
            } else {
                this.soundOn ? this.deadSound.play(): null;
            }
        }
    }

    detectBirdCollision(bird) {
        const birdTop = ((bird.birdY))
        const birdBottom = ((bird.birdY + bird.birdHeight));
        const birdLeft = ((bird.birdX))
        const birdRight = ((bird.birdX + bird.birdWidth));

      
        const bubbleTop = ((this.bubble.bubbleY + 20));
        const bubbleBottom = ((this.bubble.bubbleY + this.bubble.bubbleHeight - 20));
        const bubbleLeft = ((this.bubble.bubbleX + 20));
        const bubbleRight = ((this.bubble.bubbleX + this.bubble.bubbleWidth - 20))
        const idx = this.birds.indexOf(bird)

        if ((birdLeft < bubbleRight && birdRight > bubbleLeft) &&
        (birdTop < bubbleBottom && birdBottom > bubbleTop)) {
            this.birds.splice(idx, 1);
            this.deadX = bird.birdX
            this.deadY = bird.birdY
            this.bubble.score += 2;
            this.clouds.push(new Cloud);
            if (this.protected === false) {
                this.bubble.bubbleHealth -= 1;
                this.soundOn ? this.bubble.sound.play() : null;
            } else {
                this.soundOn ? this.deadSound.play(): null;
            }
        }
       if (bird.birdX > 875) {
        this.birds.splice(idx, 1);
       }
    }

    detectBossCollision(boss) {
        const bossTop = ((boss.bossY))
        const bossBottom = ((boss.bossY + boss.bossHeight));
        const bossLeft = ((boss.bossX))
        const bossRight = ((boss.bossX + boss.bossWidth));

        
        const bubbleTop = ((this.bubble.bubbleY + 20));
        const bubbleBottom = ((this.bubble.bubbleY + this.bubble.bubbleHeight - 20));
        const bubbleLeft = ((this.bubble.bubbleX + 20));
        const bubbleRight = ((this.bubble.bubbleX + this.bubble.bubbleWidth - 20))

        if ((bossLeft < bubbleRight && bossRight > bubbleLeft) &&
        (bossTop < bubbleBottom && bossBottom > bubbleTop)) {
            this.soundOn ? this.fartSound.play() : null;
            if (this.protected === false) {
                this.bubble.bubbleHealth -= 1;
            }
            boss.bossHealth -= 1;
            if (boss.bossHealth < 0) {
                this.bubble.score += 100;
                this.win = true
            }
        }
    }

    detectPoopCollision(poop) {
        const poopTop = ((poop.poopY))
        const poopBottom = ((poop.poopY + poop.poopHeight));
        const poopLeft = ((poop.poopX))
        const poopRight = ((poop.poopX + poop.poopWidth));

        const bubbleTop = ((this.bubble.bubbleY + 20));
        const bubbleBottom = ((this.bubble.bubbleY + this.bubble.bubbleHeight - 20));
        const bubbleLeft = ((this.bubble.bubbleX + 20));
        const bubbleRight = ((this.bubble.bubbleX + this.bubble.bubbleWidth - 20))
        const idx = this.poops.indexOf(poop)
        
        if ((poopLeft < bubbleRight && poopRight > bubbleLeft) &&
        (poopTop < bubbleBottom && poopBottom > bubbleTop)) {
            this.poops.splice(idx, 1);
            this.deadX = poop.poopX;
            this.deadY = poop.poopY;
            this.clouds.push(new Cloud);
            this.bubble.score += 2;

            if (this.protected === false) {
                this.bubble.bubbleHealth -= 1;
                this.soundOn ? this.bubble.sound.play(): null;
            } else {
               this.soundOn ?  this.deadSound.play(): null;
            }
        }
       if (poop.poopY > 500) {
        this.poops.splice(idx, 1);
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

            this.bubble.score += 5;
            this.ups.shift()
            if(this.protected === false)
            this.bubble.bubbleHealth = 2;
            this.soundOn ? this.upsSound.play(): null;
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
            this.bubble.bubbleHealth = 50;
            this.bubble.score += 50;
            this.shields.shift()
            this.protected = true;
            this.frameX = 0;
            this.soundOn ? this.upsSound.play(): null;
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
                this.poops.push(new Poop);
                this.poops[this.poops.length - 1].start(tempX, tempY);
                this.frameP = 0;
            }
    }

    gameUpdate() {
    
        if (this.playing === true) {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            this.bubble.newPos();
            this.bubble.drawBubble(this.ctx);

            this.frameS += 1;
            this.frameB += 1;

            if (this.soundOn) {
                this.gameMusic.play();
            } else {
                this.gameMusic.stop()
            }
            
            
           if (this.protected) {
               this.frameX += 1
           }

            if (this.bubble.score > 500) {
                this.boss.bossMove();
                this.boss.drawBoss(this.ctx)
                this.detectBossCollision(this.boss);
                this.gameMusic.stop();
                this.soundOn ? this.bossMusic.play() : null;
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
                this.soundOn ? this.birdSound.play(): null;
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
           
            if (this.frameX > 300) {
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
                this.gameMusic.stop();
                this.bossMusic.stop();
            }
            if (this.gameOver()) {
                this.endGame(this.ctx);
                this.gameMusic.stop();
                this.bossMusic.stop();
            }
            
            this.updateScore()
            this.frameId = requestAnimationFrame(this.gameUpdate);
        }
    }

    updateScore() {
        this.bubble.score += 0.01558;
        const score = Math.round(this.bubble.score)
        this.scoreCount.innerText = `Score: ${score}`;
    }
    
    winScreen(ctx){
        this.playing = false;
        const img = new Image();
        img.src = './images/youwin.png'
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 900, 500)
        }
        this.soundOn ? this.winSound.play() : null
        this.muteDisplay();
    }

    gameOver() {
        if (this.bubble.bubbleHealth < 1) {
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
        this.soundOn ? this.loseSound.play() : null
        this.muteDisplay();
    }

    muteDisplay() {
        if (!this.playing) {
            const muteButton = document.getElementById('muteButton');
            muteButton.style.display = 'none'
        }
    }
    
}
