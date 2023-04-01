import { Ammunition } from "../ammunition/ammunition"

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
  addAmmunition(ammo) {

    const amIn = new Inventory.AmmoInventory()

      this.ammunition.set(ammo.ammunitionType, ammo.qty)

      this.amIn +=1


    

      
      

    


    
    

    
    


    
       

    



  }
}
