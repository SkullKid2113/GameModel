import {Weapon} from "./weapon.js";

export class Ak47 extends Weapon {

    constructor() {
        super("AK-47", "7.62MM");
        this.fireModes.push("burst")
    }
}