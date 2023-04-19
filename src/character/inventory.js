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

      // We need to pull the value object out so we can increment it
      let ammoInventoryItem = this.ammunition.get(ammoToAdd.ammunitionType)
      ammoInventoryItem.qty += numRounds;

      // Now that we incremented the quantity of rounds, we need to update the map with the updated value object.
      // NOTE: In other languages (e.g. java, c#), the object would be a reference and you wouldn't have to do this.
      this.ammunition.set(ammoToAdd.ammunitionType, ammoInventoryItem)

      return;
    }

    const amIn = new Inventory.AmmoInventory();

    amIn.ammo = ammoToAdd;
    amIn.qty = numRounds;
    this.ammunition.set(ammoToAdd.ammunitionType, amIn);
  }

  getWeight() {

    let weightCalc = 0

    this.ammunition.forEach((mapValue) => {
      weightCalc += (mapValue.ammo.weight)
    })

    return weightCalc
  }
}
