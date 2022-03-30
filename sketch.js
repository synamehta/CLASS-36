var canvas,backgroundImg,bgImg,database,form,player,playerCount

function preload(){
    backgroundImg=loadImage("assets/background.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    database=firebase.database()

    game=new GAME();
    game.start();
    
    bgImg=backgroundImg;
}

function draw(){
    background(bgImg);
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}