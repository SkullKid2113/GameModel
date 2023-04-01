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

  addAmmunition(ammo) {

    ammo = new ammo();
    ammo.set("7.62mm", 1)
    ammo.set("5.56mm", 2)

    AmmoInventory = new AmmoInventory();
    AmmoInventory.set(1, 24)
    AmmoInventory.set(2, 32)

    Map = {ammo, AmmoInventory}

    }

  }
