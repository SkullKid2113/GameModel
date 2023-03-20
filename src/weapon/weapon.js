export class Weapon {

    name = null
    numRounds = 32
    ammunitionTypes = ["7.62mm", "9mm"]
    attachments = []
    fireModes = ["single"]
    fireMode = "single"

    constructor(name){
        this.name = name
    }

    shoot() {

        if (this.numRounds < 1) {
            return
        }

        let roundsToFire = 1

        if (this.fireMode === "burst") {
            roundsToFire = 3
        }

        while (roundsToFire > 0 && this.numRounds > 0) {
            this.numRounds -= 1
            roundsToFire -= 1
        }

    }

    reload() {
        this.numRounds = 32
    }

    Ammunition(){

        if (this.ammo = "7.62mm")
            damagePerBullet = 20.8
            muzzleVelocity = 2.5
            friction = 3.2
            weight = .5

         if (this.ammo = "9mm")  
         damagePerBullet = 15.6
         muzzleVelocity = 1.8
         friction = 2.3
         weight = .2
    }

    changeFireMode(mode) {
        if (this.fireModes.indexOf(mode) === -1) {
            throw {error: "Invalid fire mode"}
        }
        this.fireMode = mode
    }
    changeAmmunitionType(ammo) {
        if (this.ammunitionTypes.index(ammo) === -1) {
            throw {error: "Ammunition Type Invalid"}
        }
        this.ammunitionTypes = ammo
    }
}
