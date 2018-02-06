"use strict";

class Perso {
  constructor(name, hp, ki) {
    this.name = name;
    this.hp = hp;
    this.ki = ki;
  }

  smallAttack(cible) {
    this.ki = this.ki - 2;
    cible.hp = cible.hp - 10;
    cible.ki = cible.ki - 5;

    if (this.hp >= 100) {
      this.hp = 100;
    } else if (this.hp <= 0) {
      this.hp = 0;
    }
    console.log(`${this.name},${this.hp} hp`)
    console.log(`${this.name} fait 10 hp de dégat`)
  }

  bigAttack(cible) {
    this.ki = this.ki - 5;
    cible.hp = cible.hp - 20;
    cible.ki = cible.ki - 10;

    if (this.hp >= 100) {
      this.hp = 100;
    } else if (this.hp <= 0) {
      this.hp = 0;

    }
    console.log(`${this.name},${this.hp} hp`)
    console.log(`${this.name} fait 20 hp de dégat`)
  }

  defense() {
    this.hp = this.hp + 10;
    this.ki = this.ki;

    if (this.hp >= 100) {
      this.hp = 100;
    } else if (this.hp <= 0) {
      this.hp = 0;
    }
    console.log(`${this.name} se défend et a ${this.hp} hp`)
  }
}

