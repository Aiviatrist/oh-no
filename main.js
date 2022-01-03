var canvas = new fabric.Canvas("myCanvas");
var bw=30;
var bh=30;
var px=10;
var py=10;
var po=" ";
function pu(){
    fabric.Image.fromURL("player.png", function (Img){
     po=Img;
     po.scaleToWidth(150);
     po.scaleToHeight(140);
     po.set({
         top:py,
         left:px
     });
    canvas.add(po);
    });
}

var bo = " ";
function bu(get){
    fabric.Tmage.fromURL(get, function(Img){
      bo=Img;
      bo.scaleToWidth(bw);
      bo.scaleToHeight(bh);
      bo.set({
         top:py,
         left:px
      });
      canvas.add(bo);
    });
}
window.addEventListener("keydown",kd);
function kd(e){
     var kp = e.keycode;
    if(e.shiftKey==true&& kp == "80"){
     bw=bw+10;
     bh=bh+10;
     document.getElementById("cw").innerHTML=bw;
     document.getElementById("ch").innerHTML=bh;
    }

    if(e.shiftKey==true&& kp == "77"){
        bw=bw-10;
        bh=bh-10;
        document.getElementById("cw").innerHTML=bw;
        document.getElementById("ch").innerHTML=bh;
       }

       if(kp=="37"){
        left();
       }
       if(kp=="38"){
        up();
       }
       if(kp=="39"){
        right();
       }
       if(kp=="40"){
        down();
       }
       if(kp=="87"){
        bu("wall.jpg");
       }
       if(kp=="71"){
        bu("ground.png");
       }
       if(kp=="76"){
        bu("light_green.png");
       }
       if(kp=="84"){
        bu("trunk.jpg");
       }
       if(kp=="82"){
        bu("roof.jpg");
       }
       if(kp=="89"){
        bu("yellow_wall.png");
       }
       if(kp=="85"){
        bu("unique.png");
       }
       if(kp=="67"){
        bu("cloud.jpg");
       }
       if(kp=="68"){
        bu("dark_green.png");
       }
}
function up(){
    if(py>=0){
        py=py-bh;
        canvas.remove(po);
        pu();
    }
}
function down(){
    if(py<=500){
        py=py+bh;
        canvas.remove(po);
        pu();
    }
}
function left(){
    if(px>=0){
        px=px-bw;
        canvas.remove(po);
        pu();
    }
}
function right(){
    if(px<=850){
        px=px+bw;
        canvas.remove(po);
        pu();
    }
}