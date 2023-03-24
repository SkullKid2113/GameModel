import {Ammunition} from "./ammunition.js";

export class Ammo762 extends Ammunition {

  constructor(damage, damagePer) {
    super(weight, damage, friction, damagePer, ammunitionType);
      this.weight = 2
      this.damage = 32
      this.friction = 2
      this.damagePer = 8
      this.ammunitionType = "7.62mm"
    }
}