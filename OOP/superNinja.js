class Ninja{
    constructor(name, health, speed=3, strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    }

    drinkSake(){
        (this.health+=10);
        console.log(this.health);
    }
}

class Sensei extends Ninja {
    constructor(wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom=wisdom
    }

    speakWisdom(){
        super.drinkSake();
    }
}


const ninja1=new Ninja("Hyabusa", 25);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const superSenei = new Sensei("Master Splinter");
superSenei.speakWisdom();
superSenei.drinkSake();
superSenei.showStats();