
export default class Cloud {
    constructor(canvasWidth, canvasHeight) {
    const canvas = document.getElementById('myCanvas')
        this.ctx = canvas.getContext("2d")
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.height = 50
        this.width = 50
        this.x = 0
        this.y = 0

        this.drawCloud = this.drawCloud.bind(this)
    }

    drawCloud(ctx, deadX, deadY){
        const img = new Image()
        img.src = './images/cloud.jpg'
        ctx.drawImage(img, this.x, this.y, this.width, this.height)
        this.cloudPositionSetter(deadX, deadY)
    }

    cloudPositionSetter(deadX, deadY){
        this.x = deadX
        this.y = deadY  
    }
}