import Bubble from './bubble'
import Clip from './clip'
import Bubbles from './bubbles'
import Bird from './bird'
import Cloud from './cloud'
import Poop from './poop'
import Shield from './shield'
import Boss from "./boss"
import Sound from "./sound"

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvas.width
        this.canvasHeight = canvas.height
        this.bubble = new Bubble(this.canvasWidth, this.canvasHeight)
        this.boss = new Boss

        this.birds = []
        this.clouds = []
        this.bubbles = []
        this.clips = []
        this.poops = []
        this.shield = []

        this.deadX 
        this.deadY

        this.bossFrame = 0
        this.cloudFrame = 0
        this.poopFrame = 0
        this.shieldFrame = 0
        this.protectedFrame = 0

        this.playerIsProtected = false
        this.win = false
        this.playing = false
        this.soundOn = false

        this.winSound = new Sound("src/gameFiles/sounds/win.mp3")
        this.loseSound = new Sound("src/gameFiles/sounds/lose.mp3")
        this.fartSound = new Sound("src/gameFiles/sounds/fart.mp3")
        this.bubblesSound = new Sound("src/gameFiles/sounds/bubbles.mp3")
        this.birdSound = new Sound("src/gameFiles/sounds/bird.mp3")
        this.deadSound = new Sound("src/gameFiles/sounds/dead.mp3")

        this.gameMusic = new Sound("src/gameFiles/sounds/game.mp3")
        this.bossMusic = new Sound("src/gameFiles/sounds/boss.mp3")
        
        this.scoreCount = document.getElementById("score")

        this.gameOver = this.gameOver.bind(this)
        this.gameUpdate = this.gameUpdate.bind(this)
        this.restart = this.restart.bind(this)
        this.endGame = this.endGame.bind(this)
        this.mute = this.mute.bind(this)
        this.updateScore = this.updateScore.bind(this)
        this.muteDisplay = this.muteDisplay.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.clipCollision = this.clipCollision.bind(this)
        this.birdCollision = this.birdCollision.bind(this)
        this.poopCollision = this.poopCollision.bind(this)
        this.bossCollision = this.bossCollision.bind(this)
        this.bubblesCollision = this.bubblesCollision.bind(this)
        this.shieldCollision = this.shieldCollision.bind(this)
        this.detectAnyCollision = this.detectAnyCollision.bind(this)
    }

    

    restart() {
        if (this.frameId) {
            cancelAnimationFrame(this.frameId)
        }

        this.playing = true
        this.win = false
        this.bubble.bubbleX = 450
        this.bubble.bubbleY = 200
        this.bubble.bubbleHealth = 2
        this.boss.bossHealth = 300
        this.bubble.score = 0
        this.clips = []
        this.shields = []
        this.birds = []
        this.poops = []
        this.bubbles = []
        this.bubble.drawBubble(this.bubble.ctx)
        this.gameUpdate()
        this.soundOn = true
    }

    mute() {
        if (this.soundOn){
            this.soundOn = false
            this.bubble.mute = true
            this.gameMusic.stop()
        } else {
            this.soundOn = true
            this.bubble.mute = false
            this.gameMusic.play()
        }
    }

    deleteItem(item, idx){
        switch (item) {
            case 'Bird':
                this.birds.splice(idx, 1)
                this.clips.push(new Clip)
                break
            case 'Poop':
                this.poops.splice(idx, 1)
                this.clips.push(new Clip)
                break
            case 'Shield':
                this.shields.splice(idx, 1)
                break
            default:
                break;
        }
    }

    clipCollision(idx) {
        this.clips.splice(idx, 1)
        this.bubble.score += 1
        if (this.playerIsProtected === false) {
            this.bubble.bubbleHealth -= 1
            this.soundOn ? this.bubble.sound.play() : null
            } else {
                this.soundOn ? this.deadSound.play(): null
            }
    }

    birdCollision(idx, birdX, birdY) {
        this.birds.splice(idx, 1)
        this.deadX = birdX
        this.deadY = birdY
        this.bubble.score += 2
        this.clouds.push(new Cloud)
        if (this.playerIsProtected === false) {
            this.bubble.bubbleHealth -= 1
            this.soundOn ? this.bubble.sound.play() : null
            } else {
                this.soundOn ? this.deadSound.play(): null
            }
    }

    bossCollision() {
        this.soundOn ? this.fartSound.play() : null
        if (this.playerIsProtected === false) {
            this.bubble.bubbleHealth -= 1
            }
        this.boss.bossHealth--
        if (this.boss.bossHealth <= 0) {
            this.bubble.score += 100
            this.win = true
            }
    }

    poopCollision(idx, poopX, poopY) {
        this.poops.splice(idx, 1)
        this.deadX = poopX
        this.deadY = poopY
        this.clouds.push(new Cloud)
        this.bubble.score += 2

        if (this.playerIsProtected === false) {
            this.bubble.bubbleHealth -= 1
            this.soundOn ? this.bubble.sound.play(): null
            } else {
               this.soundOn ?  this.deadSound.play(): null
            }
    }

    bubblesCollision(idx){
        this.bubbles.splice(idx, 1)
        this.bubble.score += 5
        if(this.playerIsProtected === false){
            this.bubble.bubbleHealth = 2
            this.soundOn ? this.bubblesSound.play(): null
        }
    }

    
    shieldCollision(idx){
        this.shields.splice(idx, 1)
        this.bubble.bubbleHealth = 50
        this.bubble.score += 50
        this.playerIsProtected = true
        this.protectedFrame = 0
        this.soundOn ? this.bubblesSound.play(): null
        }

    pooping(bird) {
        if (this.poopFrame > 15) {
                this.poops.push(new Poop)
                this.poops[this.poops.length - 1].startPosition(bird.birdX, bird.birdY)
                this.poopFrame = 0
            }
    }

    detectAnyCollision(itemX, itemY, itemHeight, itemWidth){
        const itemTop = itemY
        const itemBottom = itemY + itemHeight
        const itemLeft = itemX
        const itemRight = itemX + itemWidth

        const bubbleTop = this.bubble.bubbleY
        const bubbleBottom = this.bubble.bubbleY + this.bubble.bubbleHeight
        const bubbleLeft = this.bubble.bubbleX
        const bubbleRight = this.bubble.bubbleX + this.bubble.bubbleWidth

        if ((itemLeft <= bubbleRight && itemRight >= bubbleLeft) &&
            (itemTop <= bubbleBottom && itemBottom >= bubbleTop)){
                return true
            }
        return false
    }

    gameUpdate() {
    
        if (this.playing === true) {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

            this.bubble.newPos()
            this.bubble.drawBubble(this.ctx)

            this.shieldFrame += 1
            this.bossFrame += 1

            if (this.soundOn) {
                this.gameMusic.play()
            } else {
                this.gameMusic.stop()
            }
            
            
           if (this.playerIsProtected) {
               this.protectedFrame += 1
           }

            if (this.bubble.score > 500) {
                this.boss.bossMove()
                this.boss.drawBoss(this.ctx)
                this.gameMusic.stop()
                this.soundOn ? this.bossMusic.play() : null
                if (this.detectAnyCollision(this.boss.bossX, this.boss.bossY, this.boss.bossHeight, this.boss.bossWidth)){
                    this.bossCollision()
                }
            }

            this.clips.forEach(clip => {
                clip.drawClip(this.ctx)
            })
            this.birds.forEach(bird => {
                bird.drawBird(this.ctx)
                this.pooping(bird)
            })

            this.clouds.forEach(cloud => {
                cloud.drawCloud(this.ctx, this.deadX, this.deadY)
            })

            this.bubbles.forEach(bubble =>{
                bubble.drawBubbles(this.ctx, this.deadX, this.deadY)
            })

            this.shields.forEach(shield =>{
                shield.drawShield(this.ctx)
            })

            this.poops.forEach(poop => {
                poop.drawPoop(this.ctx)
            })


            if (this.bossFrame > 75) {
                this.birds.push(new Bird)
                this.soundOn ? this.birdSound.play(): null
                this.bossFrame = 0
            }
            if (this.birds.length > 0) {
                this.poopFrame += 1
            }

            if (this.clouds.length > 0) {
                this.cloudFrame += 1
            }

            if (this.cloudFrame > 25) {
                this.clouds.shift()
                this.bubbles.push(new Bubbles)
                this.cloudFrame = 0
            }

            if (this.shieldFrame > 100) {
                this.shields.push(new Shield)
                this.shieldFrame = 0
            }
           
            if (this.protectedFrame > 300) {
                this.playerIsProtected = false
                this.bubble.bubbleHealth = 2
                this.protectedFrame = 0
            }

            this.clips.forEach((clip, idx) => {
                if (this.detectAnyCollision(clip.clipX, clip.clipY, clip.clipHeight, clip.clipWidth)){
                    this.clipCollision(idx)
                }
            })
            this.birds.forEach((bird, idx) => {
                if (bird.birdX > 875){
                    this.deleteItem('Bird', idx)
                } 
                if (this.detectAnyCollision( bird.birdX, bird.birdY, bird.birdHeight, bird.birdWidth)){
                this.birdCollision(idx, bird.birdX, bird.birdY)
              }
            })
            this.bubbles.forEach((bubble, idx) => {
              if (this.detectAnyCollision( bubble.bubblesX, bubble.bubblesY, bubble.bubblesHeight, bubble.bubblesWidth)){
                this.bubblesCollision(idx)
              }
            })

            this.shields.forEach((shield, idx) => {
                if (shield.shieldY > 500){
                    this.deleteItem('Shield', idx)
                } 
               if (this.detectAnyCollision(shield.shieldX, shield.shieldY, shield.shieldHeight, shield.shieldWidth)){
                console.log('collision')
                this.shieldCollision(idx)
               }
            })

            this.poops.forEach((poop, idx) => {
                if (poop.poopY > 500){
                    this.deleteItem('Poop', idx)
                }
              if (this.detectAnyCollision( poop.poopX, poop.poopY, poop.poopHeight, poop.poopWidth)){
                this.poopCollision(idx, poop.poopX, poop.poopY)
              }
            })
            
            if (this.win) {
                this.winScreen(this.ctx)
                this.gameMusic.stop()
                this.bossMusic.stop()
            }
            if (this.gameOver()) {
                this.endGame(this.ctx)
                this.gameMusic.stop()
                this.bossMusic.stop()
            }
            
            this.updateScore()
            this.frameId = requestAnimationFrame(this.gameUpdate)
        }
    }

    updateScore() {
        this.bubble.score += 0.01558
        const score = Math.round(this.bubble.score)
        this.scoreCount.innerText = `Score: ${score}`
    }
    
    winScreen(ctx){
        this.playing = false
        const img = new Image()
        img.src = './images/youwin.png'
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 900, 500)
        }
        this.soundOn ? this.winSound.play() : null
        this.muteDisplay()
    }

    gameOver() {
        if (this.bubble.bubbleHealth < 1) {
            return true
        }
        return false
    }

    endGame(ctx){
        this.playing = false
        const img = new Image()
        img.src = './images/Game_Over.png'
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 900, 500)
        }
        this.soundOn ? this.loseSound.play() : null
        this.muteDisplay()
    }

    muteDisplay() {
        if (!this.playing) {
            const muteButton = document.getElementById('muteButton')
            muteButton.style.display = 'none'
        }
    }
    
}
