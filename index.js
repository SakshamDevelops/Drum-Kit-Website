var allButtons = document.querySelectorAll(".drum");
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
  allButtons[i].addEventListener("click",
  function () {
  this.style.color = "white";
  }
);
}


// var audio = new Audio("sounds/tom-2.mp3");
// audio.play();
