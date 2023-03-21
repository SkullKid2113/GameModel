export class player {

name = ('')
weaponSlots =[]
ammoSlots = []
xLocation = (null, defaultvalue = 0)
yLocation = (null, defaultvalue = 0)
moveSpeed = (null, defaultvalue = 0)
jumpHeight = (null, defaultvalue = 7)

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

