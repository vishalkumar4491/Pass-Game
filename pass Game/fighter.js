function load_image(){
    enemy_image = new Image;
    enemy_image.src = 'images/v1.png';
    
    hero_image = new Image;
    hero_image.src = 'images/superhero.png';
    
    gem_image = new Image;
    gem_image.src = 'images/gemm.png'
}

function initial(){
    canvas = document.getElementById('myCanvas');
    W = 700;
    H = 400;
    canvas.width = W;
    canvas.height = H;
    pen = canvas.getContext('2d');
    score = 0;
    
    
    hero = {
        x : 20,
        y : 180,
        w : 60,
        h : 60,
        speed : 20,
        moving : false,
        health : 100,
    }
    
    
    enemy1 = {
        x : 150,
        y : 50,
        w : 60,
        h : 60,
        speed : 20,
    };
    
    enemy2 = {
        x : 300,
        y : 160,
        w : 60,
        h : 60,
        speed : 30,
    };
    
    enemy3 = {
        x : 450,
        y : 100,
        w : 60,
        h : 60,
        speed : 40,
    };
    
    enemy = [enemy1, enemy2, enemy3];
    
    gem = {
        x : 610,
        y : 180,
        w : 70,
        h : 70,
    };
    
    
    canvas.addEventListener('mousedown', function(){
        hero.moving = true;
    });
    
    canvas.addEventListener('mouseup', function(){
        hero.moving = false;
    });
    
    
    
    
}


function isColide(rect1, rect2){
    if(rect1.x < rect2.x + rect2.w && rect1.x + rect1.w > rect2.x && rect1.y < rect2.y + rect2.h && rect1.y + rect1.h > rect2.y){
        return true;
    }
    return false;
}


function draw(){
    pen.clearRect(0, 0, W, H);
    //pen.fillStyle = Image;
  //  pen.drawImage(enemy_image, box1.x1, box1.y1, box1.w, box1.h);
    //pen.drawImage(enemy_image, box2.x2, box2.y2, box2.w, box2.h);
   // pen.drawImage(enemy_image, box3.x3, box3.y3, box3.w, box3.h);
    
    for(let i=0; i<enemy.length; i++){
        pen.drawImage(enemy_image, enemy[i].x, enemy[i].y, enemy[i].w, enemy[i].h);   
    }
    
    pen.drawImage(hero_image, hero.x, hero.y, hero.w, hero.h);
    pen.drawImage(gem_image, gem.x, gem.y, gem.w, gem.h);
    
    pen.fillStyle = 'white';
    pen.font = '18px Roboto';
    pen.fillText('Score : '+ hero.health, 10, 20);
    
}


function update(){  
    for(let i = 0; i < enemy.length; i++){
        enemy[i].y += enemy[i].speed;
        
        if((enemy[i].y >= H - enemy[i].h) || (enemy[i].y < 0)){
            enemy[i].speed *= -1;
        }
    }
  //  box1.y1 += box1.speed;
    //if((box1.y1 >= H - box1.h) || (box1.y1 < 0)){
      //  box1.speed *= -1;
   // }
    
      
  //  box2.y2 += box2.speed;
//    if((box2.y2 >= H - box2.h) || (box2.y2 < 0)){
  //      box2.speed *= -1;
    //}
        
      
  //  box3.y3 += box3.speed;
    //if((box3.y3 >= H - box3.h) || (box3.y3 < 0)){
      //  box3.speed *= -1;
   // }
    
    if(hero.moving == true){
        hero.x += 10;
        hero.health += 10;
    }
    
    if(isColide(hero, gem)){
        clearInterval(f);
        alert('You Won !!!!!');
        
    }
    
    
    
    for(i = 0; i < enemy.length; i++){
        if(isColide(hero, enemy[i])){
            hero.health -= 50;
            if(hero.health <= 0){
                clearInterval(f);
                alert('Game Over !!\n Try Again !!');
                
            }
        }
    
    }
    
}


function gameloop(){
    draw();
    update();
    
    
}
initial();
load_image();
var f = setInterval(gameloop, 100);