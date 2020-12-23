var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var turns=0;
var yellowL
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score=0;
var gameState="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("green");
  textSize(20)
  fill("white")
 text("Score : "+score,width-130,height-780);
  Engine.update(engine);
  ground.display();
  if (particles!=null){
particles.display();

        if(particles.body.position.y>760){

            if(particles.body.position.x<300){
              score=score+500;
                particles=null;
                if(turns>=5)gameState="end";
  }
 }
}
if (particles!=null){
  particles.display();
  
          if(particles.body.position.y>760){
  
              if(particles.body.position.x>301&&particles.body.position.x<600){
                score=score+100;
                  particles=null;
                  if(turns>=5)gameState="end";
    }
   }
  }
  if (particles!=null){
    particles.display();
    
            if(particles.body.position.y>760){
    
                if(particles.body.position.x>601&&particles.body.position.x<900){
                  score=score+200;
                    particles=null;
                    if(turns>=5)gameState="end";
      }
     }
    }
    if(gameState==="play"){
      text("Turns :"+turns,width-190,height-740);
    }
    else{
      text("5 turns up!",width-190,height-740);
    }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!=="end"){
    turns++;
    particles=new Particle(mouseX,10,10,10);
  }
}