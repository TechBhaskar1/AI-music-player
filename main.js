song1="";
song2="";

function setup(){
    canvas=createCanvas(700,500);
    canvas.position(500,325);

    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0 ,0 , 700,500)
}
function close1(){
    document.getElementById("warning").style.visibility="hidden";
}