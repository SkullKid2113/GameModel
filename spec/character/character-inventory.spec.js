import {Inventory} from "../../src/character/inventory.js";
import {Ammo556} from "../../src/ammunition/556Ammo.js";

describe("character inventory", function () {

  it("allows the adding of ammunition", function () {

    const i = new Inventory(1)
    expect(i.ammunition.size).toEqual(0)

    const ammo = new Ammo556()
    i.addAmmunition(ammo)

    expect(i.ammunition.size).toEqual(1)

    // Let's get our ammunition entry out of the map using the key (ammunition type)
    const mapEntry = i.ammunition.get(ammo.ammunitionType)

    // Our map entry should have the ammo object, and a count of how many rounds there are
    expect(mapEntry.ammo).toEqual(ammo)
    expect(mapEntry.qty).toEqual(1)

  })
})