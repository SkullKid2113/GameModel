import {Ammunition} from "./ammunition.js";

export class Ammo556 extends Ammunition {

    constructor() {
        super("5.56", 5, 1400, 0.05, 40);
    }
}
