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
  addAmmunition(ammoToAdd, numRounds) {

    if(this.ammunition.has(ammoToAdd.ammunitionType)){
       const banana = this.ammunition.get(ammoToAdd.ammunitionType)
       banana.qty+=numRounds
       return
    }

    const amIn = new Inventory.AmmoInventory()

    amIn.ammo = ammoToAdd
    amIn.qty = numRounds

    this.ammunition.set(ammoToAdd.ammunitionType, amIn)


  }
}
