canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

var car1x = 50;
var car1y = 10;
var car1height = 90;
var car1width = 170;

var car2x = 50;
var car2y = 80;
var car2height = 90;
var car2width = 170;

var background_image = "race.png";
var car1_image = "Car1.png";
var car2_image = "Car2.png";

function add() {
background_frame = new Image();
background_frame.onload = background_draw;
background_frame.src = background_image;


car1_frame = new Image();
car1_frame.onload = car1_draw;
car1_frame.src = car1_image;

car2_frame = new Image();
car2_frame.onload = car2_draw;
car2_frame.src = car2_image;
}

function background_draw() {
 ctx.drawImage(background_frame,0,0,canvas.width,canvas.height);
}
function car1_draw() {
 ctx.drawImage(car1_frame,car1x,car1y,car1width,car1height);
}

function car2_draw() {
    ctx.drawImage(car2_frame,car2x,car2y,car2width,car2height);
   }


   window.addEventListener("keydown" , car1_move);

function car1_move(e){
key = e.keyCode;
console.log(key);
if (key == '38'){
    up();
    console.log("up");
}
if (key == '37'){
    left();
    console.log("left");
}

if (key == '39'){
    right();
    console.log("right");
}

if (key == '40'){
    down();
    console.log("down");
}
}


function up(){
    if( car1y > 0){
        car1y=car1y-10;
        console.log("When up arrow is pressed , The car1x = "+car1x+",The car1y = "+car1y);
        background_draw();
        car1_draw();
    }
    
    }
    
    function down(){
        if( car1y < 510){
            car1y=car1y+10;
            console.log("When down arrow prssed , The car1x = "+car1x+",The car1y = "+car1y);
            background_draw();
            car1_draw();
        }
        
        }
    
        function right(){
            if( car1x < 830){
                car1x=car1x+10;
                console.log(" When right arrow pressed , The car1x  = "+car1x+",The car1y = "+car1y);
                background_draw();
                car1_draw();
            }
            
            }
    
            function left(){
                if( car1x > 0){
                    car1x=car1x-10;
                    console.log(" When left arrow pressed , The car1x = "+car1x+",The car1y = "+car1y);
                    background_draw();
                    car1_draw();
                }
                
                }





                window.addEventListener("keydown" , car2_move);

function car2_move(e){
key = e.keyCode;
console.log(key);
if (key == '87'){
    up();
    console.log("car1up");
}
if (key == '65'){
    left();
    console.log("car1left");
}

if (key == '68'){
    right();
    console.log("car1right");
}

if (key == '83'){
    down();
    console.log("car1down");
}
}




                
function car1up(){
    if( car2y > 0){
        car2y=car2y-10;
        console.log("When up arrow is pressed , The car2x = "+car2x+",The car2y = "+car2y);
        background_draw();
        car2_draw();
    }
    
    }
    
    function car1down(){
        if( car2y < 510){
            car2y=car2y+10;
            console.log("When down arrow prssed , The car1x = "+car2x+",The car2y = "+car2y);
            background_draw();
            car2_draw();
        }
        
        }
    
        function car1right(){
            if( car2x < 830){
                car2x=car2x+10;
                console.log(" When right arrow pressed , The car2x  = "+car2x+",The car2y = "+car2y);
                background_draw();
                car2_draw();
            }
            
            }
    
            function car1left(){
                if( car2x > 0){
                    car2x=car2x-10;
                    console.log(" When left arrow pressed , The car2x = "+car2x+",The car2y = "+car2y);
                    background_draw();
                    car2_draw();
                }
                
                }