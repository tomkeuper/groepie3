// -------Global Variables-------
var playSounds = true;
var cname = "verhaalnummer";

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



function setVerhaalCookie(cookiename, number, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cookiename + "=" + number +  ";" + expires + ";path=/";
  console.log("cookie veranderd naar: " + number)
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


console.log("Loaded main.js")