difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,400);
    video.position(50,130);

    canvas = createCanvas(500,400);
    canvas.position(750,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialised!');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw()
{
    document.getElementById("text_size").innerHTML = "Font size of the text will be " + difference + " px";
    background('purple')
    textSize(difference);
    fill('yellow');
    text('Hello',50,300);
}