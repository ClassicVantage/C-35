var database;
var player;
var form;
var game;
var gamestate=0;
var playercount;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    
    game=new Game()
game.getState()
game.start()

}

function draw(){
    background("Black");
    //move the sprite on the following events 
}