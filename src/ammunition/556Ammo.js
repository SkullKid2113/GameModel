import {Ammunition} from "./ammunition.js";

export class Ammo556 extends Ammunition {

  constructor() {
    super(weight, muzzleVelocity, friction, damagePerBullet, ammunitionType);
      this.weight = 3
      this.muzzleVelocity = 3
      this.friction = 1
      this.damagePerBullet = 5
      this.ammunitionType = "5.56mm"
    }
  }
