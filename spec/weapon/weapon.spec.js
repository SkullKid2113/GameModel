import {Weapon} from "../../src/weapon/weapon.js";

describe("weapon", function() {

    it("reduces ammo when shot", function() {
        const o = new Weapon("AK-47", "7.62MM")
        expect(o.numRounds).toEqual(32);
        o.shoot();
        expect(o.numRounds).toEqual(31)
    })

    it("will not reduce ammo when shot and ammo is at 0", function() {

        const o = new Weapon("AK-47", "7.62MM")

        for (let i = 0; i <= 99; i++) {
            o.shoot()
        }
        expect(o.numRounds).toEqual(0)
    })

    it("reloads back to 32 rounds", function () {
        const o = new Weapon("AK-47", "7.62MM")
        o.shoot()
        expect(o.numRounds).toEqual(31)
        o.reload()
        expect(o.numRounds).toEqual(32)
    })

})