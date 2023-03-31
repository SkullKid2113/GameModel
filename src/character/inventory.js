import {Ammunition} from "./ammunition.js";

export class Inventory extends Ammunition {

    weight = null
    maxWeight = null
    ammunition = new Map()

    constructor(maxWeight){
      this.maxWeight = maxWeight
    }

    addAmmunition(ammo){
      const ammo = new ammo ();
      ammo.set("7.62mm", 1)
      ammo.set("5.56mm", 2)
      
     }
    }