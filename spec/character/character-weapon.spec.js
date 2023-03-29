import {Player} from "../../src/character/player.js";
import {Ak47} from "../../src/weapon/ak47.js";

describe("character weapons", function () {

    function makeJimbo() {
        let c = new Player("Jimbo")
        expect(c.weaponSlots.length).toEqual(0)
        return c
    }

    it("can be equipped", function () {

        let jimbo = makeJimbo()
        let weapon = new Ak47()
        jimbo.equipWeapon(weapon)

        expect(jimbo.weaponSlots.length).toEqual(1)

        expect(jimbo.weaponSlots[0]).toEqual(weapon)

    })

    it("can not equip more than one of the same type of weapon", function () {

        let jimbo = makeJimbo()
        let weapon = new Ak47()
        jimbo.equipWeapon(weapon)
        jimbo.equipWeapon(weapon)

        expect(jimbo.weaponSlots.length).toEqual(1)

        expect(jimbo.weaponSlots[0]).toEqual(weapon)
    })
})
