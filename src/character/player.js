export class Player {

    name = null
    weaponSlots = []
    ammoSlots = []
    xLocation = 0
    yLocation = 0
    moveSpeed = 0
    jumpHeight = 7
    inventoryWeightLimit = 40

    constructor(name) {
        this.name = name
    }

    setRunning() {
        this.moveSpeed = 30
    }

    setWalking() {
        this.moveSpeed = 10
    }

    setStopped() {
        this.moveSpeed = 0
    }

    equipWeapon(weapon) {

        const hasThisWeaponAlready = this.weaponSlots.filter(
            weaponAlreadyEquipped => weaponAlreadyEquipped.name === weapon.name
        )

        if (hasThisWeaponAlready.length === 0) {
            this.weaponSlots.push(weapon)
        }
    }
}