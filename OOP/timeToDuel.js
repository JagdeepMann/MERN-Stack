class Card{
    constructor(name, cost){
        this.name=name;
        this.cost = cost;

    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power=power;
        this.res=res;

    }

    attack(target){
        if(target instanceof Unit){
            target.res-=this.power;
        }else{
            throw new Error("Target must be a Unit")
        }      
    }
}

class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost)
        this.stat=stat;
        this.magnitude=magnitude;
        magnitude>0?
            this.text=`Increase target's ${this.stat} by ${this.magnitude}`:
            this.text=`Reduce target's ${this.stat} by ${this.magnitude}`

    }
    play(target){
        if(target instanceof Unit){
            if(this.stat.toLowerCase() =="resilience"){
                target.res +=this.magnitude;
            }else{
                target.power +=this.magnitude;
            }
        }else{
            throw new Error("Target must be a Unit")
        }      

    }
}


const u1=new Unit("RedBelt Ninja", 3, 3, 4);
const u2=new Unit("BlackBelt Ninja", 4 ,5 ,4);
u1.attack(u2)
console.log(u1);
console.log(u2);

const e1= new Effect("Hard Algo", 2, "resilience", 3);
const e2 = new Effect("Unhandled Promise Rejection", 1, "resilience", -2)
const e3 = new Effect("Pair Programming", 3, "pwr", 2)

console.log(e1);
e1.play(u1);
e2.play(u1);
e3.play(u1);
console.log(u1);
