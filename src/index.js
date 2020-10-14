import Game from './game'

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const game = new Game(canvas)

    const button = document.getElementById('new-game');
    button.addEventListener('click', e => {
        game.restart();
    });
})

  