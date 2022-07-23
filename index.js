

var drums = document.querySelectorAll(".drum");
var soundsPath = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/crash.mp3",
  "sounds/kick-bass.mp3","sounds/snare.mp3"];


function makeSound(c){
  switch (c) {
    case 'w':
      new Audio(soundsPath[0]).play();
      break;
    case 'a':
      new Audio(soundsPath[1]).play();
      break;
    case 's':
      new Audio(soundsPath[2]).play();
      break;
    case 'd':
      new Audio(soundsPath[3]).play();
      break;
    case 'j':
      new Audio(soundsPath[4]).play();
      break;
    case 'k':
      new Audio(soundsPath[5]).play();
      break;
    case 'l':
      new Audio(soundsPath[6]).play();
        break;

    default:
      console.log(this.innerHTML);
      break;
    }
}

// Detect button press
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener('click', function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

  });
}



// Detect keyboard press
document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function buttonAnimation(currentKey){
  var activeButton = document.querySelector('.'+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
