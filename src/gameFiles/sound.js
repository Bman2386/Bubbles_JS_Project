export default class Sound {
  
    constructor(src) {
      this.sound = document.createElement("audio")
      this.sound.src = src
      this.sound.setAttribute("preload", "auto")
      this.sound.setAttribute("controls", "none")
      this.sound.style.display = "none"
      document.body.appendChild(this.sound)
  
      this.play = this.play.bind(this)
      this.stop = this.stop.bind(this)
    }
  
    play() {
        this.sound.play()
      }

     stop(){
       this.sound.pause()
     } 
  };