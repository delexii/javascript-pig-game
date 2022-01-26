'use strict';

// Selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnOld = document.querySelector('.btn--old');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice
btnRoll.addEventListener('click', function () {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check if the number is 1. If true, switch to next player
    if (dice !== 1){
        // add dice to current score
        currentScore += dice;
        current0El.textContent = currentScore;
    } else {
        // switch to next player
    }

})