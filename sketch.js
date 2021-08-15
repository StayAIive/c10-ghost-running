var ghost, ghost_img;

function preload() {
    ghost_img = loadAnimation("ghost1.png","ghost2.png","ghost3.png");

}

function setup(){
    createCanvas(400,400);

    ghost = createSprite(200,200,10,10);
    ghost.addAnimation("running",ghost_img);
}

function draw(){
    background("black");
    drawSprites()
}