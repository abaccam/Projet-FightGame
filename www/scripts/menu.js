"use strict";


 
let start = document.querySelector('#start');
let choiseMenu = document.querySelector('#choiseMenu');
let fightArea = document.querySelector('#fightArea');
let playAgain = document.querySelector('#playAgainBtn');
let backMenu = document.querySelector('#backMenuBtn');
let showMenu = true;

let menuPage = document.querySelector('#menuPage');

let smallAttackBtn = document.querySelector('#smallAttackButton');
let bigAttackBtn = document.querySelector('#bigAttackButton');
let defenseBtn = document.querySelector("#defenseButton");

let vegetaFly = document.querySelector('#vegeta');
let gokuFly = document.querySelector('#sangoku');
let gokuSmallAtt = document.querySelector('.gokuSmallAtt');
let gokuSmAttPic = document.querySelector('.gokuSmAttPic');
let gokuBigAtt = document.querySelector('.gokuBigAtt');
let gokuBigAttPic = document.querySelector('.gokuBigAttPic');
let gokuDefense = document.querySelector('#gokuDefense');


//Changement vers zone combat au clic sur start game;

start.addEventListener('click', function () {
    //Au click sur start game, on change la valeur de showMenu pour lui
    //assigner l'inverse de sa valeur actuelle
    showMenu = !showMenu;
    //on relance le display
    display();
});

function display() {
    //si showMenu est true, on affiche le menu start,
    //sinon, on le cache
    if (showMenu) {
        menuPage.style.display = 'block';
    } else {
        menuPage.style.display = 'none';
        fightArea.style.display = 'block';
    }
}

// Fonction pour retourner au menu start
backMenu.addEventListener('click', function () {
    menuPage.style.display = 'block';
    fightArea.style.display = 'none';
});

// ANIMATIONS

smallAttackBtn.addEventListener('click', function () {
    gokuSmallAtt.style.display = 'block';
    gokuSmAttPic.style.display = 'block';
    gokuFly.style.display = 'none';
    gokuBigAtt.style.display = 'none';
    gokuBigAttPic.style.display = 'none';
    gokuDefense.style.display = 'none';
    
    gokuSmAttPic.addEventListener('animationend', function() {
        gokuSmallAtt.style.display = 'none';
        gokuSmAttPic.style.display = 'none';
        gokuFly.style.display = 'block';
    })
       
});

bigAttackBtn.addEventListener('click', function () {
    gokuBigAtt.style.display = 'block';
    gokuBigAttPic.style.display = 'block';
    gokuFly.style.display = 'none';
    gokuDefense.style.display = 'none';
    
    console.log(`block test : ${gokuBigAtt.style.display}`)
    
    gokuBigAtt.addEventListener('animationend', function() {
        gokuBigAtt.style.display = 'none';
        gokuBigAttPic.style.display = 'none';
        gokuFly.style.display = 'block';
        
        console.log(`none test : ${gokuBigAtt.style.display}`)
        
    })
});      

defenseBtn.addEventListener('click', function () {
    gokuDefense.style.display = 'block';
    gokuSmallAtt.style.display = 'none';
    gokuSmAttPic.style.display = 'none';
    gokuFly.style.display = 'none';
    gokuBigAtt.style.display = 'none';
    gokuBigAttPic.style.display = 'none';
    vegetaFly.style.display = 'none'; 
    
    gokuDefense.addEventListener('animationend', function() {
        gokuFly.style.display = 'block';
        gokuDefense.style.display = 'none';
        vegetaFly.style.display = 'block';
    })
       
});





// fonction pour afficher K.O

// let win = document.querySelector('#hpPlayer1');
// let gameOver = document.querySelector('#hpIa');

// function replay() {
//     if (win.value <= 0) {
//         document.querySelector('#ko');

//     } else if (gameOver.value <= 0) {
//         document.querySelector('#ko');
//     }
// }





















