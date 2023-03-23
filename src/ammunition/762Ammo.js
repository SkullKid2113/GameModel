import {Ammunition} from "./ammunition.js";

export class ammo762 extends Ammunition {

  constructor() {
    super("weight", "damage", "friction", "damagePerBullet", "ammunitionType");
      this.weight = 2
      this.damage = 4
      this.friction = 2
      this.damagePerBullet = 7
      this.ammunitionType = "7.62mm"
    }
}