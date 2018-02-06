"use strict";

class Player1 extends Perso {
  constructor(name, hp, ki) {
    super(name, hp, ki);
  }
  p1Bar(){
  let hpPlayer1 = document.querySelector("#hpPlayer1");
  let kiPlayer1 = document.querySelector("#kiPlayer1");
  hpPlayer1.style.width=`${this.hp}%`;
  kiPlayer1.style.width=`${this.ki}%`;
  }
  p1EndMenu(cible){
    let endMenu = document.querySelector('#endMenu');
    
    let p1EndMenu = document.querySelector('#win');
    let lost = document.querySelector('#lost');
    
    if (cible.hp <= 0) {
      endMenu.style.display = 'block';
      p1EndMenu.style.display = 'flex';
      lost.style.display = 'none';
    }  
  }
}