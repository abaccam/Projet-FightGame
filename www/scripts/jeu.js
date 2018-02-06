"use strict";

let player1 = new Player1("Sangoku", 100, 100);
let ia = new Ia("Vegeta", 100, 100);

let smallAttackButton = document.querySelector('#smallAttackButton');
let bigAttackButton = document.querySelector('#bigAttackButton');
let defenseButton = document.querySelector("#defenseButton");

smallAttackButton.addEventListener('click', function () {
  player1.smallAttack(ia);
  player1.p1Bar();
  ia.iaAction(player1);
  ia.iaBar();
  player1.p1EndMenu(ia);
  ia.iaEndMenu(player1);
});

bigAttackButton.addEventListener('click', function () {
  player1.bigAttack(ia);
  player1.p1Bar();
  ia.iaAction(player1);
  ia.iaBar()
  player1.p1EndMenu(ia);
  ia.iaEndMenu(player1);
});

defenseButton.addEventListener('click', function () {
  player1.defense();
  player1.p1Bar();
  ia.iaAction(player1);
  ia.iaBar();
  player1.p1EndMenu(ia);
  ia.iaEndMenu(player1);  
});







