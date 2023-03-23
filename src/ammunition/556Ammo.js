import {Ammunition} from "./ammunition.js";

export class ammo556 extends Ammunition {

  constructor() {
    super("weight", "damage", "friction", "damagePerBullet", "ammunitionType");
      this.weight = 3
      this.damage = 3
      this.friction = 1
      this.damagePerBullet = 5
      this.ammunitionType = "5.56mm"
    }
}