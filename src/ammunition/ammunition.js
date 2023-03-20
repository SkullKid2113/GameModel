export class Ammunition {

 ammunitionType = ["7.62mm", "9mm"]
 damagePerBullet = null
 muzzleVelocity = null
 friction = null
 weight = null
 
    constructor(damagePerBullet, muzzleVelocity, friction, weight){
        this.damagePerBullet = damagePerBullet
        this.muzzleVelocity = muzzleVelocity
        this.friction = friction
        this.weight = weight
    }
    
    Bullet(){
        
        if (this.ammunitionType === "7.62mm")
        this.damagePerBullet = 43
        this.muzzleVelocity = 23
        this.friction = 10
        this.weight = 300

        if (this.ammunitionType === "9mm")
        this.damagePerBullet = 30
        this.muzzleVelocity = 15
        this.friction = 5
        this.weight = 148
    }
}
