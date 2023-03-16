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
        if (this.numRounds > 0) {
            this.numRounds--
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
