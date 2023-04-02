export class Inventory {

  weight = null
  maxWeight = null

  static AmmoInventory = class {
    /** @type Number */
    qty = 0

    /** @type Ammunition */
    ammo = null
  }

  /**
   * @type {Map<String, Inventory.AmmoInventory>}
   */
  ammunition = new Map();

  constructor(maxWeight) {
    this.maxWeight = maxWeight
  }

  /**
   *
   * @param ammo Ammunition
   */
  addAmmunition(ammo, numRounds) {

    const amIn = new Inventory.AmmoInventory()
    this.ammunition.set(ammo.ammunitionType, amIn)

    amIn.ammo = ammo
    amIn.qty += 1

  }
}
