// -------Global Variables-------
var playSounds = true;
var cname = "verhaalnummer";
var debug = true;


// -----------Cookie Testing-----------

if (debug){
  console.log(document.cookie)
}

function setVerhaalCookie(cookiename, number, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  if (getVerhaalCookie(cname) <= number){
    document.cookie = cookiename + "=" + number +  ";" + expires + ";path=/";
    console.log("cookie veranderd naar: " + number)
  }
}

function setCookie(cookiename, number, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cookiename + "=" + number +  ";" + expires + ";path=/";
  console.log("cookie veranderd naar: " + number)
}


function resetVerhaalCookie() {{
  var d = new Date();
  d.setTime(d.getTime() + (1*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=0;" + expires + ";path=/";
  console.log("reset verhaal cookie to: 0")
}

}

function getVerhaalCookie(cookiename){
  var name = cookiename + "="
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


// ------ Background Music -------
  var embed=document.createElement('audio');
  embed.setAttribute('src', '../sounds/backgroundMusic.mp3');
  document.getElementsByTagName('body')[0].appendChild(embed);

  var audio = document.querySelector("audio");
  audio.volume = 0.02;

window.addEventListener("DOMContentLoaded", event => {
  // const audio = document.querySelector("audio");
  if (getVerhaalCookie("volume") != "0.0") {
    console.log("volume");
    audio.play();
  }
});

window.addEventListener("click", event => {
  console.log("click");
  // const audio = document.querySelector("audio");
  if (getVerhaalCookie("volume") != "0.0") {
    console.log("volume");
    audio.play();
  }
});


/*-----------------Audio Toggle------------------*/
var audioFoto = document.getElementById("audioFoto");
var toggle = document.getElementById("toggle");

function swapImage(){
  if(toggle.checked == true){
    audioFoto.src = "../img/soundOff.png";
    document.querySelector("audio").volume = 0.0;
    setCookie("volume", "0.0", 1)
  } else {
    audioFoto.src = "../img/soundOn.png";
    audio.volume = 0.02;
    setCookie("volume", "1.0", 1)
  }
}


console.log("Loaded main.js")
