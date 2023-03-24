import {Ammunition} from "./ammunition.js";

export class Ammo556 extends Ammunition {

  constructor(damage, damagePer) {
    super(weight, damage, friction, damagePer, ammunitionType);
      this.weight = 3
      this.damage = 27
      this.friction = 1
      this.damagePer = 5
      this.ammunitionType = "5.56mm"
    }
  }
