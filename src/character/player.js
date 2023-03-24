import { Ak47 } from "../weapon/ak47.js";
import {Weapon} from "../weapon/weapon.js";

export class Player {

  name = null 
  weaponSlots =[]
  ammoSlots = []
  xLocation = 0 
  yLocation = 0 
  moveSpeed = 0 
  jumpHeight = 7 

  constructor (name)  {
    this.name = name
  }

  setRunning() {
      this.moveSpeed = 30 
  }

  setWalking() {
      this.moveSpeed = 10
  }

  setStopped() {
      this.moveSpeed = 0
  }

  equipWeapon(weapon) {

    //this shish has my mind kerbobbled my guy
      
    if (this.weaponSlots === 0){
      this.equipWeapon +=1
      
    }
  }

}

