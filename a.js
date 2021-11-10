od=""
img=""
obj=[]
status1=""
function setup(){
    canvas=createCanvas(650,650)
    canvas.center()
    od=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="status:detecting objects"
}
function preload(){
img=createVideo("baby.mp4")
}

function modelloaded(){
    console.log("modelloaded")
    status1=true
    od.detect(img,gotresult)
}
function gotresult(error,results){
  if (error) {
      console.error(error);
  } else {
      console.log(results)
      obj=results
  }
}
function draw(){
image(img,0,0,650,650)
if(status1!=" "){
    for (let index = 0; index < obj.length; index++) {
        document.getElementById("status").innerHTML="status:object detected"
        fill("red")
        percent=floor(obj[index].confidence*100)
        text(obj[index].label+" "+percent+"%",obj[index].x,obj[index].y)
        noFill()
        stroke("red")
        rect(obj[index].x,obj[index].y,obj[index].width,obj[index].height)
        if(obj[index].label=="person"){
            document.getElementById("result").innerHTML="Baby Found"
        }
        else{
            document.getElementById("result").innerHTML="Baby Not Found"
        }
    }
}

}