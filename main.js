difference = 0;
rightwirstx = 0;
leftwirstx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550 , 550);

    canvas = createCanvas(550 , 550);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotposes);
}

function draw() {
    background('#969A97');

    document.getElementById("font_size").innerHTML=  "Font size of text will be = " + difference + "px";
    textSize(difference);
    fill('#F90093');
    text('Tanmay' , 50 , 400);
}

function modelLoaded() {
    console.log('Posenet is initialized!')
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        leftwirstx= results[0].pose.leftWrist.x;
        rightwirstx= results[0].pose.rightWrist.x;
        difference = floor(leftwirstx - rightwirstx);

        console.log("left wrist x = " + leftwirstx + " | right wrist x = " + rightwirstx + " | Difference = " + difference);
    }
}