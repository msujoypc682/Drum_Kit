var tom_1=new Audio("sounds/tom-1.mp3");
var tom_2=new Audio("sounds/tom-2.mp3");
var tom_3=new Audio("sounds/tom-3.mp3");
var tom_4=new Audio("sounds/tom-4.mp3");
var snare=new Audio("sounds/snare.mp3");
var crash=new Audio("sounds/crash.mp3");
var kick_bass=new Audio("sounds/kick-bass.mp3");

document.addEventListener("keypress", function(event) {
    keyPressed(event.key);
})

for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        keyPressed(this.innerHTML);
    })
}

function keyPressed(key) {
    switch(key) {

        case "w":
            tom_1.play();
            break;
        
        case "a":
            tom_2.play();
            break;
            
        case "s":
            tom_3.play();
            break;

        case "d":
            tom_4.play();
            break;
        
        case "j":
            snare.play();
             break;
                
        case "k":
            crash.play();
            break;
            
        case "l":
            kick_bass.play();
            break;

        default: console.log("Wrong key pressed "+key);
    }
}