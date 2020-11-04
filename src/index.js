import Game from './game'

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const game = new Game(canvas)

    const button = document.getElementById('new-game');
    button.addEventListener('click', e => {
        game.restart();
    });

    const modal = document.getElementById('modal');
    const trigger = document.getElementById('modal-trigger');
    trigger.addEventListener('click', e=> {
        e.preventDefault();
        modal.classList.add('show');
    });

    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', e => {
        e.preventDefault();
        modal.classList.remove('show');
    });

    window.addEventListener('click', e => {
        if (e.target.classList.contains('show')) {
            modal.classList.remove('show');
        }
    })

})