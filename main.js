sound = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(400,150);
    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    sound = loadSound("music.mp3")
}

function draw(){
    image(video,0,0,600,500);
}

ply = "play";

function play(){
    if(ply == "play"){
        sound.play();
        ply = "";
    } else {
        sound.stop();
        ply = "play";
    }
}