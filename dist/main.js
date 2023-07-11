!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=0)}([function(t,e,i){"use strict";function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}i.r(e);var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sound=document.createElement("audio"),this.sound.src=e,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none",document.body.appendChild(this.sound),this.play=this.play.bind(this),this.stop=this.stop.bind(this)}var e,i,n;return e=t,(i=[{key:"play",value:function(){this.sound.play()}},{key:"stop",value:function(){this.sound.pause()}}])&&s(e.prototype,i),n&&s(e,n),t}();function o(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var h=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.bubbleWidth=20,this.bubbleHeight=20,this.bubbleHealth=20,this.bubbleX=450,this.bubbleY=200,this.xDirection=0,this.yDirection=0,this.score=0,this.sound=new n("src/gameFiles/sounds/pop.mp3"),this.boostSound=new n("src/gameFiles/sounds/boost.mp3"),this.mute=!1,this.imgSrc="./images/bubble.png",this.drawBubble=this.drawBubble.bind(this),this.moveBubble=this.moveBubble.bind(this),this.keyDownHandler=this.keyDownHandler.bind(this),this.keyUpHandler=this.keyUpHandler.bind(this),this.stopBubble=this.stopBubble.bind(this),document.addEventListener("keydown",this.keyDownHandler,!1),document.addEventListener("keyup",this.keyUpHandler,!1)}var e,i,s;return e=t,(i=[{key:"drawBubble",value:function(t){var e=new Image;e.src=this.imgSrc,this.bubbleSize(this.bubbleHealth),t.drawImage(e,this.bubbleX,this.bubbleY,this.bubbleWidth,this.bubbleHeight)}},{key:"bubbleSize",value:function(t){2===t?(this.bubbleHeight=50,this.bubbleWidth=50,this.imgSrc="./images/bubble.png"):t<2?(this.bubbleHeight=20,this.bubbleWidth=20,this.imgSrc="./images/bubble.png"):t>30&&(this.bubbleHeight=50,this.bubbleWidth=50,this.imgSrc="./images/shield.jpg")}},{key:"newPos",value:function(){this.bubbleX+=this.xDirection,this.bubbleY+=this.yDirection,this.detectBorders()}},{key:"detectBorders",value:function(){this.bubbleX<3&&(this.bubbleX=4),this.bubbleX>884&&(this.bubbleX=882),this.bubbleY>480&&(this.bubbleY=478),this.bubbleY<3&&(this.bubbleY=4)}},{key:"moveBubble",value:function(t){switch(t){case"left":this.xDirection=-2;break;case"right":this.xDirection=2;break;case"up":this.yDirection=-2;break;case"down":this.yDirection=2;break;case"boost":!this.mute&&this.boostSound.play(),this.xDirection*=5,this.yDirection*=5}}},{key:"stopBubble",value:function(t){"horizontal"===t&&(this.xDirection=0),"vertical"===t&&(this.yDirection=0)}},{key:"keyDownHandler",value:function(t){t.preventDefault(),"a"==t.key||"KeyA"==t.key?this.moveBubble("left"):"d"==t.key||"KeyD"==t.key?this.moveBubble("right"):"w"==t.key||"KeyW"==t.key?this.moveBubble("up"):"s"==t.key||"KeyS"==t.key?this.moveBubble("down"):(" "==t.key||"SpaceBar"==t.key)&&this.bubbleHealth>30&&this.moveBubble("boost")}},{key:"keyUpHandler",value:function(t){t.preventDefault(),"a"==t.key||"KeyA"==t.key||"d"==t.key||"KeyD"==t.key?this.stopBubble("horizontal"):"w"!=t.key&&"KeyW"!=t.key&&"s"!=t.key&&"KeyS"!=t.key||this.stopBubble("vertical")}}])&&o(e.prototype,i),s&&o(e,s),t}();function l(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var a=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.clipHeight=25,this.clipWidth=25,this.clipX=Math.floor(Math.random()*Math.floor(900)),this.clipY=Math.floor(Math.random()*Math.floor(500)),this.drawClip=this.drawClip.bind(this),this.imgSrc="./images/paperclip.png"}var e,i,s;return e=t,(i=[{key:"drawClip",value:function(t){var e=new Image;e.src=this.imgSrc,t.drawImage(e,this.clipX,this.clipY,this.clipHeight,this.clipWidth)}}])&&l(e.prototype,i),s&&l(e,s),t}();function b(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var r=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.bubblesHeight=40,this.bubblesWidth=40,this.bubblesX=250,this.bubblesY=150,this.drawBubbles=this.drawBubbles.bind(this),this.bubblesSrc="./images/bubbles.jpg"}var e,i,s;return e=t,(i=[{key:"drawBubbles",value:function(t,e,i){var s=new Image;s.src=this.bubblesSrc,t.drawImage(s,this.bubblesX,this.bubblesY,this.bubblesHeight,this.bubblesWidth),this.move(e,i)}},{key:"move",value:function(t,e){this.bubblesX=t,this.bubblesY=e}}])&&b(e.prototype,i),s&&b(e,s),t}();function u(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var d=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.birdHeight=75,this.birdWidth=75,this.birdY=Math.floor(Math.random()*Math.floor(200)),this.birdX=0,this.drawBird=this.drawBird.bind(this)}var e,i,s;return e=t,(i=[{key:"drawBird",value:function(t){var e=new Image;e.src="images/bird.jpg",t.drawImage(e,this.birdX,this.birdY,this.birdWidth,this.birdHeight),this.birdX+=7}}])&&u(e.prototype,i),s&&u(e,s),t}();function c(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var p=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.cloudHeight=50,this.cloudWidth=50,this.cloudX=0,this.cloudY=0,this.drawCloud=this.drawCloud.bind(this)}var e,i,s;return e=t,(i=[{key:"drawCloud",value:function(t,e,i){var s=new Image;s.src="./images/cloud.jpg",t.drawImage(s,this.cloudX,this.cloudY,this.cloudWidth,this.cloudHeight),this.cloudPositionSetter(e,i)}},{key:"cloudPositionSetter",value:function(t,e){this.cloudX=t,this.cloudY=e}}])&&c(e.prototype,i),s&&c(e,s),t}();function y(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var f=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.poopHeight=50,this.poopWidth=50,this.poopX,this.poopY,this.poopSrc="./images/poop.jpg",this.drawPoop=this.drawPoop.bind(this)}var e,i,s;return e=t,(i=[{key:"drawPoop",value:function(t){var e=new Image;e.src=this.poopSrc,t.drawImage(e,this.poopX,this.poopY,this.poopHeight,this.poopWidth),this.fall()}},{key:"startPosition",value:function(t,e){this.poopX=t,this.poopY=e}},{key:"fall",value:function(){this.poopY+=5}}])&&y(e.prototype,i),s&&y(e,s),t}();function m(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var g=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.shieldWidth=50,this.shieldHeight=50,this.shieldX=Math.floor(Math.random()*Math.floor(800)),this.shieldY=0,this.drawShield=this.drawShield.bind(this),this.imgSrc="./images/shield.jpg"}var e,i,s;return e=t,(i=[{key:"drawShield",value:function(t){var e=new Image;e.src=this.imgSrc,t.drawImage(e,this.shieldX,this.shieldY,this.shieldHeight,this.shieldWidth),this.fall()}},{key:"fall",value:function(){this.shieldY+=3}}])&&m(e.prototype,i),s&&m(e,s),t}();function v(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var w=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.bossWidth=200,this.bossHeight=200,this.bossHealth=300,this.bossX=200,this.bossY=75,this.imgSrc="./images/spaceship.jpg",this.drawBoss=this.drawBoss.bind(this),this.direction="right"}var e,i,s;return e=t,(i=[{key:"drawBoss",value:function(t){var e=new Image;e.src=this.imgSrc,t.drawImage(e,this.bossX,this.bossY,this.bossWidth,this.bossHeight),this.healthBar()}},{key:"healthBar",value:function(){var t=this.bossY-20;this.ctx.beginPath(),this.ctx.rect(this.bossX,t,300,20),this.ctx.fillStyle="#FF0000",this.ctx.fill(),this.ctx.beginPath(),this.ctx.rect(this.bossX,t,this.bossHealth,20),this.ctx.fillStyle="#339933",this.ctx.fill()}},{key:"bossMove",value:function(){"right"===this.direction&&(this.bossX+=10),"left"===this.direction&&(this.bossX-=10),this.boundry()}},{key:"boundry",value:function(){this.bossX>700?this.direction="left":this.bossX<-20&&(this.direction="right")}}])&&v(e.prototype,i),s&&v(e,s),t}();function k(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.getContext("2d"),this.canvasWidth=e.width,this.canvasHeight=e.height,this.bubble=new h(this.canvasWidth,this.canvasHeight),this.boss=new w,this.birds=[],this.clouds=[],this.bubbles=[],this.clips=[],this.poops=[],this.shield=[],this.deadX,this.deadY,this.bossFrame=0,this.cloudFrame=0,this.poopFrame=0,this.shieldFrame=0,this.protectedFrame=0,this.playerIsProtected=!1,this.win=!1,this.playing=!1,this.soundOn=!1,this.winSound=new n("src/gameFiles/sounds/win.mp3"),this.loseSound=new n("src/gameFiles/sounds/lose.mp3"),this.fartSound=new n("src/gameFiles/sounds/fart.mp3"),this.bubblesSound=new n("src/gameFiles/sounds/bubbles.mp3"),this.birdSound=new n("src/gameFiles/sounds/bird.mp3"),this.deadSound=new n("src/gameFiles/sounds/dead.mp3"),this.gameMusic=new n("src/gameFiles/sounds/game.mp3"),this.bossMusic=new n("src/gameFiles/sounds/boss.mp3"),this.scoreCount=document.getElementById("score"),this.gameOver=this.gameOver.bind(this),this.gameUpdate=this.gameUpdate.bind(this),this.restart=this.restart.bind(this),this.endGame=this.endGame.bind(this),this.mute=this.mute.bind(this),this.updateScore=this.updateScore.bind(this),this.muteDisplay=this.muteDisplay.bind(this),this.deleteItem=this.deleteItem.bind(this),this.clipCollision=this.clipCollision.bind(this),this.birdCollision=this.birdCollision.bind(this),this.poopCollision=this.poopCollision.bind(this),this.bossCollision=this.bossCollision.bind(this),this.bubblesCollision=this.bubblesCollision.bind(this),this.shieldCollision=this.shieldCollision.bind(this),this.detectAnyCollision=this.detectAnyCollision.bind(this)}var e,i,s;return e=t,(i=[{key:"restart",value:function(){this.frameId&&cancelAnimationFrame(this.frameId),this.playing=!0,this.win=!1,this.bubble.bubbleX=450,this.bubble.bubbleY=200,this.bubble.bubbleHealth=2,this.boss.bossHealth=300,this.bubble.score=0,this.clips=[],this.shields=[],this.birds=[],this.poops=[],this.bubbles=[],this.bubble.drawBubble(this.bubble.ctx),this.gameUpdate(),this.soundOn=!0}},{key:"mute",value:function(){this.soundOn?(this.soundOn=!1,this.bubble.mute=!0,this.gameMusic.stop()):(this.soundOn=!0,this.bubble.mute=!1,this.gameMusic.play())}},{key:"deleteItem",value:function(t,e){switch(t){case"Bird":this.birds.splice(e,1),this.clips.push(new a);break;case"Poop":this.poops.splice(e,1),this.clips.push(new a);break;case"Shield":this.shields.splice(e,1)}}},{key:"clipCollision",value:function(t){this.clips.splice(t,1),this.bubble.score+=1,!1===this.playerIsProtected?(this.bubble.bubbleHealth-=1,this.soundOn&&this.bubble.sound.play()):this.soundOn&&this.deadSound.play()}},{key:"birdCollision",value:function(t,e,i){this.birds.splice(t,1),this.deadX=e,this.deadY=i,this.bubble.score+=2,this.clouds.push(new p),!1===this.playerIsProtected?(this.bubble.bubbleHealth-=1,this.soundOn&&this.bubble.sound.play()):this.soundOn&&this.deadSound.play()}},{key:"bossCollision",value:function(){this.soundOn&&this.fartSound.play(),!1===this.playerIsProtected&&(this.bubble.bubbleHealth-=1),this.boss.bossHealth--,this.boss.bossHealth<=0&&(this.bubble.score+=100,this.win=!0)}},{key:"poopCollision",value:function(t,e,i){this.poops.splice(t,1),this.deadX=e,this.deadY=i,this.clouds.push(new p),this.bubble.score+=2,!1===this.playerIsProtected?(this.bubble.bubbleHealth-=1,this.soundOn&&this.bubble.sound.play()):this.soundOn&&this.deadSound.play()}},{key:"bubblesCollision",value:function(t){this.bubbles.splice(t,1),this.bubble.score+=5,!1===this.playerIsProtected&&(this.bubble.bubbleHealth=2,this.soundOn&&this.bubblesSound.play())}},{key:"shieldCollision",value:function(t){this.shields.splice(t,1),this.bubble.bubbleHealth=50,this.bubble.score+=50,this.playerIsProtected=!0,this.protectedFrame=0,this.soundOn&&this.bubblesSound.play()}},{key:"pooping",value:function(t){this.poopFrame>15&&(this.poops.push(new f),this.poops[this.poops.length-1].startPosition(t.birdX,t.birdY),this.poopFrame=0)}},{key:"detectAnyCollision",value:function(t,e,i,s){var n=e,o=e+i,h=t,l=t+s,a=this.bubble.bubbleY,b=this.bubble.bubbleY+this.bubble.bubbleHeight,r=this.bubble.bubbleX;return h<=this.bubble.bubbleX+this.bubble.bubbleWidth&&l>=r&&n<=b&&o>=a}},{key:"gameUpdate",value:function(){var t=this;!0===this.playing&&(this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.bubble.newPos(),this.bubble.drawBubble(this.ctx),this.shieldFrame+=1,this.bossFrame+=1,this.soundOn?this.gameMusic.play():this.gameMusic.stop(),this.playerIsProtected&&(this.protectedFrame+=1),this.bubble.score>500&&(this.boss.bossMove(),this.boss.drawBoss(this.ctx),this.gameMusic.stop(),this.soundOn&&this.bossMusic.play(),this.detectAnyCollision(this.boss.bossX,this.boss.bossY,this.boss.bossHeight,this.boss.bossWidth)&&this.bossCollision()),this.clips.forEach((function(e){e.drawClip(t.ctx)})),this.birds.forEach((function(e){e.drawBird(t.ctx),t.pooping(e)})),this.clouds.forEach((function(e){e.drawCloud(t.ctx,t.deadX,t.deadY)})),this.bubbles.forEach((function(e){e.drawBubbles(t.ctx,t.deadX,t.deadY)})),this.shields.forEach((function(e){e.drawShield(t.ctx)})),this.poops.forEach((function(e){e.drawPoop(t.ctx)})),this.bossFrame>75&&(this.birds.push(new d),this.soundOn&&this.birdSound.play(),this.bossFrame=0),this.birds.length>0&&(this.poopFrame+=1),this.clouds.length>0&&(this.cloudFrame+=1),this.cloudFrame>25&&(this.clouds.shift(),this.bubbles.push(new r),this.cloudFrame=0),this.shieldFrame>100&&(this.shields.push(new g),this.shieldFrame=0),this.protectedFrame>300&&(this.playerIsProtected=!1,this.bubble.bubbleHealth=2,this.protectedFrame=0),this.clips.forEach((function(e,i){t.detectAnyCollision(e.clipX,e.clipY,e.clipHeight,e.clipWidth)&&t.clipCollision(i)})),this.birds.forEach((function(e,i){e.birdX>875&&t.deleteItem("Bird",i),t.detectAnyCollision(e.birdX,e.birdY,e.birdHeight,e.birdWidth)&&t.birdCollision(i,e.birdX,e.birdY)})),this.bubbles.forEach((function(e,i){t.detectAnyCollision(e.bubblesX,e.bubblesY,e.bubblesHeight,e.bubblesWidth)&&t.bubblesCollision(i)})),this.shields.forEach((function(e,i){e.shieldY>500&&t.deleteItem("Shield",i),t.detectAnyCollision(e.shieldX,e.shieldY,e.shieldHeight,e.shieldWidth)&&(console.log("collision"),t.shieldCollision(i))})),this.poops.forEach((function(e,i){e.poopY>500&&t.deleteItem("Poop",i),t.detectAnyCollision(e.poopX,e.poopY,e.poopHeight,e.poopWidth)&&t.poopCollision(i,e.poopX,e.poopY)})),this.win&&(this.winScreen(this.ctx),this.gameMusic.stop(),this.bossMusic.stop()),this.gameOver()&&(this.endGame(this.ctx),this.gameMusic.stop(),this.bossMusic.stop()),this.updateScore(),this.frameId=requestAnimationFrame(this.gameUpdate))}},{key:"updateScore",value:function(){this.bubble.score+=.01558;var t=Math.round(this.bubble.score);this.scoreCount.innerText="Score: ".concat(t)}},{key:"winScreen",value:function(t){this.playing=!1;var e=new Image;e.src="./images/youwin.png",e.onload=function(){t.drawImage(e,0,0,900,500)},this.soundOn&&this.winSound.play(),this.muteDisplay()}},{key:"gameOver",value:function(){return this.bubble.bubbleHealth<1}},{key:"endGame",value:function(t){this.playing=!1;var e=new Image;e.src="./images/Game_Over.png",e.onload=function(){t.drawImage(e,0,0,900,500)},this.soundOn&&this.loseSound.play(),this.muteDisplay()}},{key:"muteDisplay",value:function(){this.playing||(document.getElementById("muteButton").style.display="none")}}])&&k(e.prototype,i),s&&k(e,s),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("myCanvas"),e=new C(t);document.getElementById("new-game").addEventListener("click",(function(t){t.preventDefault(),e.restart(),s()}));var i=document.getElementById("muteButton");i.addEventListener("click",(function(t){t.preventDefault(),s(),e.playing&&(e.mute(),i.classList.toggle("muted"))}));var s=function(){e.playing||(i.style.display="none"),e.playing&&(i.style.display="flex")};s();var n=document.getElementById("modal"),o=document.getElementById("modal2"),h=document.getElementById("modal-trigger"),l=document.getElementById("modal-trigger-2");h.addEventListener("click",(function(t){t.preventDefault(),n.style.display="flex"})),l.addEventListener("click",(function(t){t.preventDefault(),o.style.display="flex"})),window.onclick=function(t){t.target==n&&(n.style.display="none"),t.target==o&&(o.style.display="none")}}))}]);
//# sourceMappingURL=main.js.map