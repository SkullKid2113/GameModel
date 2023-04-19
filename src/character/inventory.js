export class Inventory {
  weight = null;
  maxWeight = null;

  static AmmoInventory = class {
    /** @type Number */
    qty = 0;

    /** @type Ammunition */
    ammo = null;
  };

  /**
   * @type {Map<String, Inventory.AmmoInventory>}
   */
  ammunition = new Map();

  constructor(maxWeight) {
    this.maxWeight = maxWeight;
  }


  addAmmunition(ammoToAdd, numRounds) {
    if (this.ammunition.has(ammoToAdd.ammunitionType)) {
      this.ammunition.get(ammoToAdd.ammunitionType).qty += numRounds;

      return;
    }

    const amIn = new Inventory.AmmoInventory();

    amIn.ammo = ammoToAdd;
    amIn.qty = numRounds;
    this.ammunition.set(ammoToAdd.ammunitionType, amIn);
  }

  getWeight() {

    let weight = 0

    this.ammunition.forEach((mapValue) => {
      weight += (mapValue.ammo.weight)
    })

    return weight
  }
}
