import Game from './game';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const game = new Game(canvas)

    const button = document.getElementById('new-game');
    button.addEventListener('click', e => {
        e.preventDefault();
        game.restart();
        buttonDisplay();
    });

    const muteButton = document.getElementById('muteButton');
    muteButton.addEventListener('click', e=> {
        e.preventDefault();
        buttonDisplay();
        if (game.playing){
            game.mute();
            muteButton.classList.toggle('muted') 
        }  
    })
    const buttonDisplay = () => {
    if (!game.playing) muteButton.style.display = 'none';
    if (game.playing) muteButton.style.display = 'flex';
    }
    buttonDisplay();

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

   window.onclick = e => {
       if (e.target == modal) modal.style.display = 'none';
       if (e.target == modal2) modal2.style.display = 'none';
   }
})