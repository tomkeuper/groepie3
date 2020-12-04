var imported = document.createElement('script');
imported.src = '../js/main.js';
document.head.appendChild(imported);


var verhaaltekst2 = document.getElementById("js--verhaal--text");
var verhaaltekst1 = document.getElementById("js--verhaal--text");
var verhaaltekst3 = document.getElementById("js--verhaal--text2");
var verhaaltekst4 = document.getElementById("js--verhaal--text2");

var book = document.getElementById("js--book");

var book_opened = false;

typeText = (verhaal1) =>{
    if(verhaal1 != ""){
      setTimeout(() => {
        verhaaltekst1.innerHTML += verhaal1[0];
        verhaal1.splice(0,1);

        setTimeout(() => {
            typeText(verhaal1);
        }, 2);
      }, 10);
    }
}

typeText2 = (verhaal1, verhaal2) =>{
    if(verhaal1 != ""){
      setTimeout(() => {
        verhaaltekst1.innerHTML += verhaal1[0];
        verhaal1.splice(0,1);
        setTimeout(() => {
            typeText2(verhaal1, verhaal2);
        }, 2);
      }, 10);
    } else {
      if (verhaal2 != "") {
      setTimeout(() => {
        verhaaltekst3.innerHTML += verhaal2[0];
        verhaal2.splice(0,1);
        setTimeout(() => {
            typeText2("", verhaal2);
        }, 10);
      }, 10);
      }
    }
}



book.addEventListener("mouseenter", function( event ) {
  if (!book_opened) {
    if (verhaaltekst3 == null) {
      typeText(Array.from(verhaaltekst2.innerText));
      verhaaltekst1.innerText = "";
    } else {
      console.log("verhaaltext3 != null");
      typeText2(Array.from(verhaaltekst2.innerText), Array.from(verhaaltekst4.innerText))
      verhaaltekst1.innerText = "";
      verhaaltekst3.innerText = "";
    }
    book_opened = true;
  }
}, false);

console.log("loaded book.js")
