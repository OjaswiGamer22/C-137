vid="";
stat="";
objects=[];
function preload(){
vid=createVideo("video.mp4");
vid.hide();

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
}

function draw(){
image(vid,0,0,300,300);
if(stat !=""){
    objectDetector.detect(vid, gotResult);

for(i=0; i<=objects.length; i++){
document.getElementById("status").innerHTML="Status:   Objects Detected";
document.getElementById("nu").innerHTML="Number of Objects Detetcted Are:     "+objects.length;
fill("red");
percent=floor(objects[i].confidence*100);
text(objects[i].label+"     "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("red");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}

function start(){
objectDetector=ml5.objectDetector("cocossd",ModelLoaded);
document.getElementById("status").innerHTML= "Status:    Detecting Objects";
}

function ModelLoaded(){
    console.log("ModelLoaded");
    stat=true;
    vid.loop();
    vid.speed(1);
    vid.volume(0);
    

}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}