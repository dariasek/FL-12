class Fighter{
    constructor(name, damage, hp, strength, agility){
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._strength = strength;
        this._agility = agility;
        this.winCount = 0;
        this.lossCount = 0;
        this.initialHP = hp;
    }

    getName(){
        return this._name;
    }
    getDamage(){
        return this._damage;
    }
    getHealth(){
        return this._hp;
    }
    getStrength(){
        return this._strength;
    }
    getAgility(){
        return this._agility;
    }
    dealDamage(hptoReduce){
        this._hp -= hptoReduce;
        if (this._hp < 0){
            this._hp = 0;
        } 
    }
    addWin(){
        this.winCount++;
    }
    addLoss(){
        this.lossCount++;
    }
    attack(defender){
        let successProb = 100 - defender.getHealth() - defender.getAgility();
        let successCompare = Math.round(Math.random()*100);
        let output;
        if (successProb > successCompare){
            output = this.getName() + ' makes ' + this._agility + ' damage to ' + defender.getName();
            defender.dealDamage(this._agility);
        } else{
            output = this.getName() + ' attack missed';
        }
        console.log(output);
    }
    logCombatHistory(){
        let output = 'Name: '+ this.getName() + ', Wins: ' + this.winCount + ', Losses: ' + this.lossCount;
        return output;
    }
    heal(addHP){
        let totalHP = this.getHealth() + addHP;
        if (totalHP > this.initialHP){
            totalHP = this.initialHP;
        } 
        this._hp = totalHP;
    }
  
}

const myFighter = new Fighter('Alice', 5,29,3,20);
const notMyFighter = new Fighter('Alex', 4,39,2,10);

console.log(myFighter);
console.log(notMyFighter);

function battle(f1,f2){
    let loserName;

    if (f1.getHealth()=== 0 || f2.getHealth() === 0){

        f1.getHealth() === 0 ? loserName = f1.getName() : loserName = f2.getName();
        console.log(loserName + ' is dead and can`t fight.');

    } else {

        let i = 1;
        while (f1.getHealth()!==0 && f2.getHealth()!==0){
        i%2 === 0 ? f1.attack(f2) : f2.attack(f1);
        i++;
        }

        let winnerName;
        if (f1.getHealth() === 0){
            winnerName = f2.getName();
            f1.addLoss();
            f2.addWin();         
        } else{
            winnerName = f1.getName();
            f2.addLoss();
            f1.addWin(); 
        }
        console.log(winnerName + ' has won!');
    }
}

battle(myFighter,notMyFighter);
myFighter.getHealth();
