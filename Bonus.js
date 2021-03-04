class Bonus{
    constructor(){
        this.x = floor(random(w));
        this.y = floor(random(h));
        this.bonusPoint = 5;
        this.isBonus = true;
    }

    show(){
        noStroke();
        fill(0,0,225);
        rect(this.x,this.y,1,1);
        this.resetLocation();
    }

    resetLocation(){
        this.x = floor(random(w));
        this.y = floor(random(h));
    }

}