import {Ak47} from "../src/weapon/ak47.js";

describe("ak47", function() {

    it("has its name set as expected", function () {

        const ak = new Ak47()
        expect(ak.name).toEqual("AK-47")

    })

    it("has single and burst mode", function() {

        const ak = new Ak47()
        expect(ak.fireModes).toEqual(["single", "burst"])

    })

    it("changes to burst mode and back to single", function () {
        const ak = new Ak47()
        expect(ak.fireMode).toEqual("single")
        ak.changeFireMode("burst")
        expect(ak.fireMode).toEqual("burst")
        ak.changeFireMode("single")
        expect(ak.fireMode).toEqual("single")
    })

    it("should change only to modes that the weapon supports", function() {
        const ak = new Ak47()
        expect(
            function() { ak.changeFireMode("banana") }
        ).toThrow({error: "Invalid fire mode"})
    })

    it ("should fire 3 rounds in burst mode", function() {
        const ak = new Ak47()

        ak.changeFireMode("burst")
        ak.shoot()

        expect(ak.numRounds).toEqual((32-3))

    })
})