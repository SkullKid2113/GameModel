export class player {

name = ('')
weaponSlots =[]
ammoSlots = []
xLocation = 0
yLocation = 0
moveSpeed = 0
jumpHeight = 7

    constructor (name, moveSpeed)  {
        this.name = name 
        this.moveSpeed = moveSpeed 

        if (setName("")){
            this.name === "required"
        }

        if (setRunning()){
            this.moveSpeed = 30
        }

        if (setWalking()){
            this.moveSpeed = 10
        }

        if (setStopped()){
            this.moveSpeed = 0
        }

    }

    
}

