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


// -----------Cookie Testing-----------
console.log("Cookie Testing");
console.log(document.cookie)

const knop1 = document.getElementById("js--knop1")
const knop2 = document.getElementById("js--knop2")

const knop8 = document.getElementById("js--knop8")
const knop9 = document.getElementById("js--knop9")
knop1.onclick = function () {
  setVerhaalCookie("1")
}
knop2.onclick = function () {
  setVerhaalCookie("2")
}

knop8.onclick = function () {
  console.log(getVerhaalCookie());
}
knop9.onclick = function () {
  console.log(getVerhaalCookie());

}

function setVerhaalCookie(cookiename, number) {
  cookie = cookiename + "=" + number;
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
