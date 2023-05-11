
export default class Cloud {
    constructor(canvasWidth, canvasHeight) {
    const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.cloudHeight = 50
        this.cloudWidth = 50
        this.cloudX = 0
        this.cloudY = 0

        this.drawCloud = this.drawCloud.bind(this)
    }

    drawCloud(ctx, deadX, deadY){
        const img = new Image()
        img.src = './images/cloud.jpg'
        ctx.drawImage(img, this.cloudX, this.cloudY, this.cloudWidth, this.cloudHeight)
        this.move(deadX, deadY)
    }

    move(deadX, deadY){
        this.cloudX = deadX
        this.cloudY = deadY  
    }
}