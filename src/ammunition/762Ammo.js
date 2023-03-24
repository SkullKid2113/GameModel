import {Ammunition} from "./ammunition.js";

export class Ammo762 extends Ammunition {

  constructor() {
    super(weight, muzzleVelocity, friction, damagePerBullet, ammunitionType);
      this.weight = 2
      this.muzzleVelocity = 4
      this.friction = 2
      this.damagePerBullet = 8
      this.ammunitionType = "7.62mm"
    }
}