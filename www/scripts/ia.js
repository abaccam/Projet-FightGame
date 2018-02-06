"use strict";

class Ia extends Perso {
  constructor(name, hp, ki) {
    super(name, hp, ki);
  }
  
  iaAction(cible) {
    let rand =Math.round(Math.random() * 3)
    switch (rand) {
        case 0 : this.smallAttack(cible);
            break;
        case 1 : this.bigAttack(cible);
            break;
        case 2 : this.defense(cible);
            break;

       default:
            break;
    } 
  }

  iaBar(){
    let hpIa = document.querySelector("#hpIa");
    let kiIa = document.querySelector("#kiIa");
    hpIa.style.width=`${this.hp}%`;
    kiIa.style.width=`${this.ki}%`;
    }
    iaEndMenu(cible){
        let endMenu = document.querySelector('#endMenu');
        let iaEndMenu = document.querySelector('#win');
        // let player1Win = document.querySelector('#player1Win');
        let win =  document.querySelector('#win');
        let lost = document.querySelector('#lost');
        
        if (cible.hp <= 0) {
          endMenu.style.display = 'block';
          // iaEndMenu.style.display = 'flex';
          lost.style.display = 'block';
          // player1Win.style.display = 'none';
          win.style.display = 'none';
        }  
      }
};






