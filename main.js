song1 = "";
song2 = "";
leftWrist = "";
rightWrist = "";
leftWristScore = 0;
rightWristScore = 0;

function preload() {
    song1 = loadSound("AstrounautInTheOcean.webm");
    song2 = loadSound("HarryPotter.webm")
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(700, 325);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("Model Initiallized!!");
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristScore = results[0].pose.keypoints[9].score;
        rightWristScore = results[0].pose.keypoints[10].score;
        console.log("leftWristScore :" + leftWristScore);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist X :" + leftWristX + " leftWrist Y :" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist X :" + rightWristX + " rightWrist Y :" + rightWristY);
    }
}

function close1() {
    document.getElementById("warning").style.visibility = "hidden";
}

function draw() {
    image(video, 0, 0, 700, 500);
    fill("red")
    stroke("red")
    if (leftWristScore > 0.2) {
        circle(leftWristX, leftWristY, 50);
        song2.stop();
        if (song1.isPlaying() == false) {
            document.getElementById("song_name").innerHTML = "Song : Astraonaut In The Ocean";
            song1.play();
        }
    }
    if (rightWristScore > 0.2) {
        circle(rightWristX, rightWristY, 50);
        song1.stop();
        if (song2.isPlaying() == false) {
            document.getElementById("song_name").innerHTML = "Song :HarryPotter theme Song";
            song2.play();
        }
    }
}