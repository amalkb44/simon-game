var gamePattern=[];
var buttonColors=["green","red","yellow","blue"];
var userClickedPattern=[];
var level=0;
var start=false;

$("h2").on("click", function(){
    
    if(!start){
        $("h2").text("Level "+level);
        nextSequence();
        start=true;
    }
})

$(".btn").on("click" ,function(event){
   var butttonId= event.target.id;
   userClickedPattern.push(butttonId);
   animateButton(butttonId);
   playSound(butttonId);
   checkAntwort(userClickedPattern.length-1)
})

function checkAntwort(buttons){
   
if(userClickedPattern[buttons]===gamePattern[buttons]){
    if(userClickedPattern.length===gamePattern.length){
        setTimeout(function() {
            nextSequence();
        }, 200);
    }   
    }else{
        $("body").addClass("game-over");
        $("h2").text("Restart");
        playSound("wrong");
    
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 50);
       
        }
}


function nextSequence(){
userClickedPattern=[];
level++;
$("h2").text("Level "+level);
var randomNumber= Math.random();
var randomNumber= Math.floor(randomNumber*4);
var randomButtonColor= buttonColors[randomNumber];
gamePattern.push(randomButtonColor);

$("."+randomButtonColor).fadeIn(100).fadeOut(100).fadeIn(100);
     playSound(randomButtonColor);
}

function playSound(name){
    var sound= new Audio("sounds/"+name+".mp3");
    sound.play();
}

function animateButton(buttonClicked){
    $("."+buttonClicked).addClass("animateButton");
    setTimeout(function() {
        $("."+buttonClicked).removeClass("animateButton");
    }, 100);
}

function restartGame(){
    level=0;
    gamePattern=[];
    start=false;
}