export class player {

name = ('')
weaponSlots =[]
ammoSlots = []
xLocation = (null, 0)
yLocation = (null,0)
moveSpeed = (null,0)
jumpHeight = (null,7)

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

