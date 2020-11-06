// -------Global Variables-------
var playSounds = true;
var cookie = document.cookie;

/*-----------------Audio Toggle------------------*/
var audioFoto = document.getElementById("audioFoto");
var toggle = document.getElementById("toggle");

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

if (document.location.pathname.split(/\/(?=.)/).length == 3) {
  typeText(Array.from("Hello World"));
} else {
  console.log("nee");
}

// -----------Cookie Testing-----------
console.log("Cookie Testing");
console.log(document.cookie)
