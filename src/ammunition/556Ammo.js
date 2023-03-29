import {Ammunition} from "./ammunition.js";

export class Ammo556 extends Ammunition {

    constructor() {
        super("5.56mm", 5, 1400, 0.05, 40);
    }
}
