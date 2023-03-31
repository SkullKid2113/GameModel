import {Ammunition} from "./ammunition.js";

export class inventory extends Ammunition {

    weight = null
    maxWeight = null
    ammunition = {}

    constructor(maxWeight){
      this.maxWeight = maxWeight
    }

    addAmmunition(ammo){
      const ammo = new ammo ();
      ammo.set("7.62mm", 1)
      ammo.set("5.56mm", 2)
      
     }
    }