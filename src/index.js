import Game from './game';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const game = new Game(canvas)

    const button = document.getElementById('new-game');
    button.addEventListener('click', e => {
        e.preventDefault();
        game.restart();
    });

    const muteButton = document.getElementById('muteButton');
    muteButton.addEventListener('click', e=> {
        e.preventDefault();
        if (game.playing){
            game.mute();
            muteButton.classList.toggle('muted') 
        }  
    })
    const modal = document.getElementById('modal');
    const modal2 = document.getElementById('modal2');

    const trigger = document.getElementById('modal-trigger');
    const trigger2 = document.getElementById('modal-trigger-2');

    trigger.addEventListener('click', e=> {
        e.preventDefault();
        modal.style.display = "flex";
    });

    trigger2.addEventListener('click', e=> {
        e.preventDefault();
        modal2.style.display = "flex";
    });

    const closeButton = document.getElementById('close-button');
    const closeButton2 = document.getElementById('close-button2');

    closeButton.addEventListener('click', e => {
        e.preventDefault();
        modal.style.display = "none";
    });

    closeButton2.addEventListener('click', e=> {
        e.preventDefault();
        modal2.style.display = "none";
    })
    

})