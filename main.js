leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
song1=""
song2=""
function preload()
{
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}

function setup()
{
    canvas=createCanvas(600,600)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    posenet=ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses)
}

function draw()
{
    image(video, 0, 0, 600, 600)
}

function modelLoaded()
{
    console.log("PoseNet model is loaded")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftWristX=results.pose.leftWrist.x
        leftWristY=results.pose.leftWrist.y
        console.log("Left wrist's x position = " + leftWristX, "Left wrist's y position = "+ leftWristY)
        rightWristX=results.pose.rightWrist.x
        rightWristY=results.pose.rightWrist.y
        console.log("Right wrist's x position = " + rightWristX, "Right wrist's y position = "+ rightWristY)
    }
}