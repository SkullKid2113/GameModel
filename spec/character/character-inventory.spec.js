import {Inventory} from "../../src/character/inventory.js";
import {Ammo556} from "../../src/ammunition/556Ammo.js";
import {Ammo762} from "../../src/ammunition/762Ammo.js";

describe("character inventory", function () {

  it("allows the adding of ammunition", function () {

    const i = new Inventory(1)
    expect(i.ammunition.size).toEqual(0)

    const ammo = new Ammo556()
    i.addAmmunition(ammo, 1)

    expect(i.ammunition.size).toEqual(1)

    // Let's get our ammunition entry out of the map using the key (ammunition type)
    const mapEntry = i.ammunition.get(ammo.ammunitionType)

    // Our map entry should have the ammo object, and a count of how many rounds there are
    expect(mapEntry.ammo).toEqual(ammo)
    expect(mapEntry.qty).toEqual(1)

  })

  it("does not end up with duplicate ammunition types", function () {

    const i = new Inventory(1)
    const a556 = new Ammo556()
    const a762 = new Ammo762()

    i.addAmmunition(a556, 1)
    i.addAmmunition(a762, 1)

    expect(i.ammunition.size).toEqual(2)
    expect(i.ammunition.has(a556.ammunitionType)).toEqual(true)
    expect(i.ammunition.has(a762.ammunitionType)).toEqual(true)

  })

  it("Increments ammunition on subsequent addAmmunition calls for the same type of ammunition", function () {

    const i = new Inventory(1)
    const ammo = new Ammo556()

    i.addAmmunition(ammo, 30)
    expect(
      i.ammunition.get(ammo.ammunitionType).qty
    ).toEqual(30)

    i.addAmmunition(ammo, 29)

    expect(
      i.ammunition.get(ammo.ammunitionType).qty
    ).toEqual(59)

  })

})