!function(t){var e={};function i(s){if(e[s])return e[s].exports;var b=e[s]={i:s,l:!1,exports:{}};return t[s].call(b.exports,b,b.exports,i),b.l=!0,b.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var b in t)i.d(s,b,function(e){return t[e]}.bind(null,b));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=0)}([function(t,e,i){"use strict";function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}i.r(e);var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sound=document.createElement("audio"),this.sound.src=e,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none",document.body.appendChild(this.sound),this.play=this.play.bind(this),this.stop=this.stop.bind(this)}var e,i,b;return e=t,(i=[{key:"play",value:function(){this.sound.play()}},{key:"stop",value:function(){this.sound.pause()}}])&&s(e.prototype,i),b&&s(e,b),t}();function n(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var h=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.bubbleWidth=20,this.bubbleHeight=20,this.bubbleHealth=20,this.bubbleX=450,this.bubbleY=200,this.dirX=0,this.dirY=0,this.score=0,this.sound=new b("src/sounds/pop.mp3"),this.boostSound=new b("src/sounds/boost.mp3"),this.imgSrc="./images/bubble.png",this.drawBubble=this.drawBubble.bind(this),this.moveBubble=this.moveBubble.bind(this),this.keyDownHandler=this.keyDownHandler.bind(this),this.keyUpHandler=this.keyUpHandler.bind(this),document.addEventListener("keydown",this.keyDownHandler,!1),document.addEventListener("keyup",this.keyUpHandler,!1)}var e,i,s;return e=t,(i=[{key:"drawBubble",value:function(t){var e=new Image;e.src=this.imgSrc,this.bubbleSize(this.bubbleHealth),t.drawImage(e,this.bubbleX,this.bubbleY,this.bubbleWidth,this.bubbleHeight)}},{key:"bubbleSize",value:function(t){2===t?(this.bubbleHeight=50,this.bubbleWidth=50,this.imgSrc="./images/bubble.png"):t<2?(this.bubbleHeight=20,this.bubbleWidth=20,this.imgSrc="./images/bubble.png"):t>30&&(this.bubbleHeight=50,this.bubbleWidth=50,this.imgSrc="./images/shield.jpg")}},{key:"newPos",value:function(){this.bubbleX+=this.dirX,this.bubbleY+=this.dirY,this.detectBorders()}},{key:"detectBorders",value:function(){this.bubbleX<3&&(this.bubbleX=4),this.bubbleX>884&&(this.bubbleX=882),this.bubbleY>480&&(this.bubbleY=478),this.bubbleY<3&&(this.bubbleY=4)}},{key:"moveBubble",value:function(t){switch(t){case"none":this.dirX=0,this.dirY=0;break;case"left":this.dirX=-2;break;case"right":this.dirX=2;break;case"up":this.dirY=-2;break;case"down":this.dirY=2;break;case"boost":this.boostSound.play(),this.dirX*=5,this.dirY*=5}}},{key:"keyDownHandler",value:function(t){t.preventDefault(),"a"==t.key||"KeyA"==t.key?this.moveBubble("left"):"d"==t.key||"KeyD"==t.key?this.moveBubble("right"):"w"==t.key||"KeyW"==t.key?this.moveBubble("up"):"s"==t.key||"KeyS"==t.key?this.moveBubble("down"):(" "==t.key||"SpaceBar"==t.key)&&this.bubbleHealth>30&&this.moveBubble("boost")}},{key:"keyUpHandler",value:function(t){t.preventDefault(),"a"==t.key||"KeyA"==t.key||"d"==t.key||"KeyD"==t.key||"w"==t.key||"KeyW"==t.key?this.moveBubble("none"):"s"!=t.key&&"KeyS"!=t.key||this.moveBubble("none")}}])&&n(e.prototype,i),s&&n(e,s),t}();function o(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var a=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.clipHeight=25,this.clipWidth=25,this.clipX=Math.floor(Math.random()*Math.floor(900)),this.clipY=Math.floor(Math.random()*Math.floor(500)),this.drawClip=this.drawClip.bind(this),this.imgSrc="./images/paperclip.png"}var e,i,s;return e=t,(i=[{key:"drawClip",value:function(t){var e=new Image;e.src=this.imgSrc,t.drawImage(e,this.clipX,this.clipY,this.clipHeight,this.clipWidth)}}])&&o(e.prototype,i),s&&o(e,s),t}();function l(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var r=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.bubblesHeight=40,this.bubblesWidth=40,this.bubblesX=250,this.bubblesY=150,this.drawBubbles=this.drawBubbles.bind(this),this.bubblesSrc="./images/bubbles.jpg"}var e,i,s;return e=t,(i=[{key:"drawBubbles",value:function(t,e,i){var s=new Image;s.src=this.bubblesSrc,t.drawImage(s,this.bubblesX,this.bubblesY,this.bubblesHeight,this.bubblesWidth),this.move(e,i)}},{key:"move",value:function(t,e){this.bubblesX=t,this.bubblesY=e}}])&&l(e.prototype,i),s&&l(e,s),t}();function u(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var d=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.birdHeight=75,this.birdWidth=75,this.birdY=Math.floor(Math.random()*Math.floor(200)),this.birdX=0,this.drawBird=this.drawBird.bind(this)}var e,i,s;return e=t,(i=[{key:"drawBird",value:function(t){var e=new Image;e.src="images/bird.jpg",t.drawImage(e,this.birdX,this.birdY,this.birdWidth,this.birdHeight),this.birdX+=7}}])&&u(e.prototype,i),s&&u(e,s),t}();function c(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var p=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.cloudHeight=50,this.cloudWidth=50,this.cloudX=0,this.cloudY=0,this.drawCloud=this.drawCloud.bind(this)}var e,i,s;return e=t,(i=[{key:"drawCloud",value:function(t,e,i){var s=new Image;s.src="./images/cloud.jpg",t.drawImage(s,this.cloudX,this.cloudY,this.cloudWidth,this.cloudHeight),this.move(e,i)}},{key:"move",value:function(t,e){this.cloudX=t,this.cloudY=e}}])&&c(e.prototype,i),s&&c(e,s),t}();function f(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var m=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.poopHeight=50,this.poopWidth=50,this.poopX,this.poopY,this.poopSrc="./images/poop.jpg",this.drawPoop=this.drawPoop.bind(this)}var e,i,s;return e=t,(i=[{key:"drawPoop",value:function(t){var e=new Image;e.src=this.poopSrc,t.drawImage(e,this.poopX,this.poopY,this.poopHeight,this.poopWidth),this.fall()}},{key:"start",value:function(t,e){this.poopX=t,this.poopY=e}},{key:"fall",value:function(){this.poopY+=5}}])&&f(e.prototype,i),s&&f(e,s),t}();function v(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var g=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.shieldWidth=50,this.shieldHeight=50,this.shieldX=Math.floor(Math.random()*Math.floor(800)),this.shieldY=0,this.drawShield=this.drawShield.bind(this),this.imgSrc="./images/shield.jpg"}var e,i,s;return e=t,(i=[{key:"drawShield",value:function(t){var e=new Image;e.src=this.imgSrc,t.drawImage(e,this.shieldX,this.shieldY,this.shieldHeight,this.shieldWidth),this.fall()}},{key:"fall",value:function(){this.shieldY+=3}}])&&v(e.prototype,i),s&&v(e,s),t}();function y(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var w=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=document.getElementById("myCanvas");this.ctx=s.getContext("2d"),this.canvasWidth=e,this.canvasHeight=i,this.bossWidth=200,this.bossHeight=200,this.bossHealth=20,this.bossX=200,this.bossY=75,this.imgSrc="./images/spaceship.jpg",this.drawBoss=this.drawBoss.bind(this),this.direction="right"}var e,i,s;return e=t,(i=[{key:"drawBoss",value:function(t){var e=new Image;e.src=this.imgSrc,t.drawImage(e,this.bossX,this.bossY,this.bossWidth,this.bossHeight),console.log("draw",this.bossX)}},{key:"bossMove",value:function(){"right"===this.direction?this.bossX+=10:"left"===this.direction&&(this.bossX-=10),this.boundry()}},{key:"boundry",value:function(){console.log("boundry",this.bossX),this.bossX>700?this.direction="left":this.bossX<-20&&(this.direction="right")}}])&&y(e.prototype,i),s&&y(e,s),t}();function k(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var X=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.getContext("2d"),this.canvasWidth=e.width,this.canvasHeight=e.height,this.bubble=new h(this.canvasWidth,this.canvasHeight),this.boss=new w,this.birds=[],this.clouds=[],this.ups=[],this.clips=[],this.poops=[],this.shield=[],this.deadX,this.deadY,this.frameB=0,this.frameC=0,this.frameP=0,this.frameS=0,this.frameX=0,this.protected=!1,this.win=!1,this.playing=!1,this.soundOn=!1,this.winSound=new b("src/sounds/win.mp3"),this.loseSound=new b("src/sounds/lose.mp3"),this.fartSound=new b("src/sounds/fart.mp3"),this.upsSound=new b("src/sounds/ups.mp3"),this.birdSound=new b("src/sounds/bird.mp3"),this.deadSound=new b("src/sounds/dead.mp3"),this.gameMusic=new b("src/sounds/game.mp3"),this.bossMusic=new b("src/sounds/boss.mp3"),this.gameOver=this.gameOver.bind(this),this.gameUpdate=this.gameUpdate.bind(this),this.restart=this.restart.bind(this),this.endGame=this.endGame.bind(this),this.scoreCount=document.getElementById("score"),this.updateScore=this.updateScore.bind(this)}var e,i,s;return e=t,(i=[{key:"restart",value:function(){this.frameId&&cancelAnimationFrame(this.frameId),this.playing=!0,this.win=!1,this.bubble.bubbleX=450,this.bubble.bubbleY=200,this.bubble.bubbleHealth=2,this.boss.bossHealth=300,this.bubble.score=0,this.clips=[],this.shields=[],this.birds=[],this.poops=[],this.ups=[],this.bubble.drawBubble(this.bubble.ctx),this.gameUpdate(),this.soundOn=!0}},{key:"detectClipCollision",value:function(t){var e=t.clipY,i=t.clipY+t.clipHeight,s=t.clipX,b=t.clipX+t.clipWidth,n=this.bubble.bubbleY,h=this.bubble.bubbleY+this.bubble.bubbleHeight,o=this.bubble.bubbleX,a=this.bubble.bubbleX+this.bubble.bubbleWidth,l=this.clips.indexOf(t);s<a&&b>o&&e<h&&i>n&&(this.clips.splice(l,1),!1===this.protected?(this.bubble.bubbleHealth-=1,this.bubble.sound.play()):this.deadSound.play())}},{key:"detectBirdCollision",value:function(t){var e=t.birdY,i=t.birdY+t.birdHeight,s=t.birdX,b=t.birdX+t.birdWidth,n=this.bubble.bubbleY+20,h=this.bubble.bubbleY+this.bubble.bubbleHeight-20,o=this.bubble.bubbleX+20,a=this.bubble.bubbleX+this.bubble.bubbleWidth-20,l=this.birds.indexOf(t);s<a&&b>o&&e<h&&i>n&&(this.birds.splice(l,1),this.deadX=t.birdX,this.deadY=t.birdY,this.clouds.push(new p),!1===this.protected?(this.bubble.bubbleHealth-=1,this.bubble.sound.play()):this.deadSound.play()),t.birdX>875&&this.birds.splice(l,1)}},{key:"detectBossCollision",value:function(t){var e=t.bossY,i=t.bossY+t.bossHeight,s=t.bossX,b=t.bossX+t.bossWidth,n=this.bubble.bubbleY+20,h=this.bubble.bubbleY+this.bubble.bubbleHeight-20,o=this.bubble.bubbleX+20;s<this.bubble.bubbleX+this.bubble.bubbleWidth-20&&b>o&&e<h&&i>n&&(this.fartSound.play(),!1===this.protected&&(this.bubble.bubbleHealth-=1),t.bossHealth-=1,t.bossHealth<0&&(this.win=!0))}},{key:"detectPoopCollision",value:function(t){var e=t.poopY,i=t.poopY+t.poopHeight,s=t.poopX,b=t.poopX+t.poopWidth,n=this.bubble.bubbleY+20,h=this.bubble.bubbleY+this.bubble.bubbleHeight-20,o=this.bubble.bubbleX+20,l=this.bubble.bubbleX+this.bubble.bubbleWidth-20,r=this.poops.indexOf(t);s<l&&b>o&&e<h&&i>n&&(this.poops.splice(r,1),this.deadX=t.poopX,this.deadY=t.poopY,this.clouds.push(new p),!1===this.protected?(this.bubble.bubbleHealth-=1,this.bubble.sound.play()):this.deadSound.play()),t.poopY>500&&(this.poops.splice(r,1),this.clips.push(new a))}},{key:"detectBubblesCollision",value:function(t){var e=t.bubblesY,i=t.bubblesY+t.bubblesHeight,s=t.bubblesX,b=t.bubblesX+t.bubblesWidth,n=this.bubble.bubbleY,h=this.bubble.bubbleY+this.bubble.bubbleHeight,o=this.bubble.bubbleX;s<=this.bubble.bubbleX+this.bubble.bubbleWidth&&b>=o&&e<=h&&i>=n&&(this.bubble.score+=5,this.ups.shift(),!1===this.protected&&(this.bubble.bubbleHealth=2),this.upsSound.play())}},{key:"detectShieldCollision",value:function(t){var e=t.shieldY,i=t.shieldY+t.shieldHeight,s=t.shieldX,b=t.shieldX+t.shieldWidth,n=this.bubble.bubbleY,h=this.bubble.bubbleY+this.bubble.bubbleHeight,o=this.bubble.bubbleX;s<=this.bubble.bubbleX+this.bubble.bubbleWidth&&b>=o&&e<=h&&i>=n&&(this.bubble.bubbleHealth=50,this.bubble.score+=50,this.shields.shift(),this.protected=!0,this.frameX=0,this.upsSound.play()),t.shieldY>500&&this.shields.shift()}},{key:"pooping",value:function(t){var e,i;this.frameP>15&&(e=t.birdX,i=t.birdY,this.poops.push(new m),this.poops[this.poops.length-1].start(e,i),this.frameP=0)}},{key:"gameUpdate",value:function(){var t=this;!0===this.playing&&(this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.bubble.newPos(),this.bubble.drawBubble(this.ctx),this.frameS+=1,this.frameB+=1,this.soundOn&&this.gameMusic.play(),this.protected&&(this.frameX+=1),this.bubble.score>500&&(this.boss.bossMove(),this.boss.drawBoss(this.ctx),this.detectBossCollision(this.boss),this.gameMusic.stop(),this.bossMusic.play()),this.clips.forEach((function(e){e.drawClip(t.ctx)})),this.birds.forEach((function(e){e.drawBird(t.ctx),t.pooping(e)})),this.clouds.forEach((function(e){e.drawCloud(t.ctx,t.deadX,t.deadY)})),this.ups.forEach((function(e){e.drawBubbles(t.ctx,t.deadX,t.deadY)})),this.shields.forEach((function(e){e.drawShield(t.ctx)})),this.poops.forEach((function(e){e.drawPoop(t.ctx)})),this.frameB>75&&(this.birds.push(new d),this.birdSound.play(),this.frameB=0),this.birds.length>0&&(this.frameP+=1),this.clouds.length>0&&(this.frameC+=1),this.frameC>25&&(this.clouds.shift(),this.ups.push(new r),this.frameC=0),this.frameS>100&&(this.shields.push(new g),this.frameS=0),this.frameX>300&&(this.protected=!1,this.bubble.bubbleHealth=2,this.frameX=0),this.clips.forEach((function(e){t.detectClipCollision(e)})),this.birds.forEach((function(e){t.detectBirdCollision(e)})),this.ups.forEach((function(e){t.detectBubblesCollision(e)})),this.shields.forEach((function(e){t.detectShieldCollision(e)})),this.poops.forEach((function(e){t.detectPoopCollision(e)})),this.win&&(this.winScreen(this.ctx),this.gameMusic.stop(),this.bossMusic.stop()),this.gameOver()&&(this.endGame(this.ctx),this.gameMusic.stop(),this.bossMusic.stop()),this.updateScore(),this.frameId=requestAnimationFrame(this.gameUpdate))}},{key:"updateScore",value:function(){this.bubble.score+=.01558,this.scoreCount.innerText="Score: ".concat(this.bubble.score)}},{key:"winScreen",value:function(t){this.playing=!1;var e=new Image;e.src="./images/youwin.png",e.onload=function(){t.drawImage(e,0,0,900,500)},this.winSound.play()}},{key:"gameOver",value:function(){return this.bubble.bubbleHealth<1}},{key:"endGame",value:function(t){this.playing=!1;var e=new Image;e.src="./images/Game_Over.png",e.onload=function(){t.drawImage(e,0,0,900,500)},this.loseSound.play()}}])&&k(e.prototype,i),s&&k(e,s),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("myCanvas"),e=new X(t);document.getElementById("new-game").addEventListener("click",(function(t){t.preventDefault(),e.restart()}));var i=document.getElementById("modal");document.getElementById("modal-trigger").addEventListener("click",(function(t){t.preventDefault(),i.classList.add("show")})),document.getElementById("close-button").addEventListener("click",(function(t){t.preventDefault(),i.classList.remove("show")})),window.addEventListener("click",(function(t){t.target.classList.contains("show")&&i.classList.remove("show")}))}))}]);
//# sourceMappingURL=main.js.map