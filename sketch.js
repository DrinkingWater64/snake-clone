

let snake;
let rez = 10;
let food;
let w;
let h;
let score = 0;
let isOver = false;

function setup(){
    createCanvas(400, 400);

    w= floor(width/rez);
    h= floor(height/rez);


    frameRate(5);
    snake = new Snake();
    foodLocation();
}



function draw(){
    
    scale(rez);
    background(220, 220, 0);
    
    if(snake.eat(food)){
        foodLocation();
        score = score+1;
    }
    snake.update();
    snake.show();
    if(snake.gameOver()){
        gameOver();
        
    }

    noStroke();
    fill (255,0,0);
    rect(food.x, food.y, 1, 1);

    showScores();
}

function keyPressed(){
    if ( key == ' '){
        console.log('bark');
        if(isOver){
        console.log('chirp');
        resetGame();
        }
    }
    else if ( keyCode == LEFT_ARROW){
        snake.setDir(-1, 0);
    } else if(keyCode == DOWN_ARROW){
        
        snake.setDir(0, 1);
    } else if(keyCode == UP_ARROW){
        
        snake.setDir(0, -1);
    }else if(keyCode == RIGHT_ARROW){
             
        snake.setDir(1, 0);
    }
    
}

function resetGame(){
    
    isOver = false;
    score = 0;
    w= floor(width/rez);
    h= floor(height/rez);

    console.log('mew');
    frameRate(5);
    snake = new Snake();
    foodLocation();
    background(220);
    
    loop();
}

function gameOver(){
    isOver = true;
    textSize(3);
    textAlign(CENTER, CENTER);
    fill(0, 102, 153);
    text('GAMEOVER', w/2, h/2);
    //background(255, 0, 255);
    console.log('wtf');
    console.log(isOver);
    noLoop();
}
function showScores(){
  textSize(1);
  textAlign(TOP );
  text('score: ' + score, 15, 1, width);
  console.log('baal');
}
function foodLocation(){
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x,y);
}