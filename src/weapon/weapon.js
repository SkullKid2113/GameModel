export class Weapon {

    name = null
    ammunitionType = null
    numRounds = 32

    attachments = []

    fireModes = ["single"]
    fireMode = "single"

    constructor(name, ammunitionType) {
        this.ammunitionType = ammunitionType
        this.name = name
    }

    shoot() {
        if (this.fireMode === "single" && this.numRounds > 0) {
            this.numRounds--
        }
        else if (this.fireMode === "burst" && this.numRounds > 0) {
           this.numRounds-=3

        }
    }
    reload() {
        this.numRounds = 32
    }

    changeFireMode(mode) {
        if (this.fireModes.indexOf(mode) === -1) {
            throw {error: "Invalid fire mode"}
        }
        this.fireMode = mode
    }
}
