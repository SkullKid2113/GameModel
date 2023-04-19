import {Inventory} from "../../src/character/inventory.js";
import {Ammo556} from "../../src/ammunition/556Ammo.js";
import {Ammo762} from "../../src/ammunition/762Ammo.js";

describe("character inventory", function () {

  it("calculates the weight as expected", function () {
    const i = new Inventory(1000)
    const ammo = new Ammo556()

    // Make sure our weight is 0 as the inventory is empty right now */
    expect(i.getWeight()).toEqual(0)

    // Add one round of ammo
    i.addAmmunition(ammo, 1)

    // Now we should get back the weight of the 1 round of ammo
    expect(i.getWeight()).toEqual(ammo.weight)

    // Now we'll add 4 more rounds (This will make 5 rounds total)
    i.addAmmunition(ammo, 4)

    // Now we expect the weight to be as much as 5 * (bullet weight)
    expect(i.getWeight()).toEqual(ammo.weight * 5)
  })

  it("does not allow adding ammunition if there is no weight capacity left", function () {
    const i = new Inventory(1000)
    const ammo = new Ammo556() // the weight is 40 for 556 right now

    // Make sure our weight is 0 as the inventory is empty right now
    expect(i.getWeight()).toEqual(0)
    expect(i.ammunition.size).toEqual(0) // no ammo

    // Add 2 rounds of ammo
    i.addAmmunition(ammo, 2)

    // Make sure our weight went up
    expect(i.getWeight()).toBeGreaterThan(0)
    // Make sure the 2 bullets are there
    expect(i.ammunition.get(ammo.ammunitionType).qty).toEqual(2)

    // Now let's try to add an ungodly amount of ammunition
    i.addAmmunition(ammo, 50000)


    // Regardless of how much ammo we try to add, we shouldn't exceed the weight limit
    expect(i.getWeight()).toBeLessThanOrEqual(i.maxWeight)

    // We should also expect that several rounds of ammunition -did- get
    // added into inventory, up to the point where weight capacity ran out.
    expect(i.ammunition.get(ammo.ammunitionType).qty).toBeGreaterThan(2)

  })

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