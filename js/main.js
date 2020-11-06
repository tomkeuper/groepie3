/*-----------------Audio Toggle------------------*/
var audioFoto = document.getElementById("audioFoto");
var toggle = document.getElementById("toggle");
var playSounds = true;

function swapImage(){
  if(toggle.checked == true){
    audioFoto.src = "img/soundOff.png";
    playSounds = false;
  } else {
    audioFoto.src = "img/soundOn.png";
    playSounds = true;
  }
}


/*--------------typeText--------------------*/
var verhaaltekst1 = document.getElementById("js--verhaal1--text");
typeText = (verhaal1) =>{
  if(verhaal1 != ""){
    verhaaltekst1.innerHTML += verhaal1[0];
    verhaal1.splice(0,1);
    setTimeout(() => {
      typeText(verhaal1);
    }, 3000);
  }
}

typeText(Array.from("Hello World"));
