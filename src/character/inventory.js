import {Ammunition} from "../ammunition/ammunition.js";

export class Inventory extends Ammunition {

  weight = null
  maxWeight = null

  /**
   @typedef {Object} AmmoInventory
   @property {Ammunition} ammo
   @property {Number} qty
   */
  /**
   * @type {Map<String, AmmoInventory>}
   */
  ammunition = new Map()

  constructor(maxWeight) {
    this.maxWeight = maxWeight
  }

  addAmmunition(ammo) {

    ammo = new ammo();
    ammo.set("7.62mm", 1)
    ammo.set("5.56mm", 2)

  }
}