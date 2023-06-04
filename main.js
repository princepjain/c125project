
noseX=0
noseY=0
difference=0
leftwristX=0
rightwristY=0

function setup(){
captured = createCapture(VIDEO)
captured.size(640,420)
captured.position(5,110)


canvas = createCanvas(550,450);
canvas.position(650,120);

posenettoo = ml5.poseNet(captured , modalloaded)
posenettoo.on("pose" , gotposes)
}

function draw(){
    background("purple")
    fill("pink")
    textSize(difference)
    text("Hiiii", noseX , noseY);
}


function modalloaded(){
    console.log("modal has been loaded")
}


function gotposes(results){
 if(results.length > 0){
     console.log(results)

     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     leftwristX = results[0].pose.leftWrist.x;
     rightwristY = results[0].pose.rightWrist.y;
     difference = floor(leftwristX - rightwristY);
    document.getElementById("abcdefghijk").innerHTML = "The Size Of The Text Is " + difference + "px";
     
 }
}



