var imported = document.createElement('script');
imported.src = '../js/main.js';
document.head.appendChild(imported);


var verhaaltekst2 = document.getElementById("js--verhaal--text");
var verhaaltekst1 = document.getElementById("js--verhaal--text");

var book = document.getElementById("js--book");

var book_opened = false;


typeText = (verhaal1) =>{
    if(verhaal1 != ""){
      setTimeout(() => {
        verhaaltekst1.innerHTML += verhaal1[0];

        verhaal1.splice(0,1);
        setTimeout(() => {
            typeText(verhaal1);
        }, 10);
      }, 10);
    }
}

book.addEventListener("mouseenter", function( event ) {
  if (!book_opened) {
    typeText(Array.from(verhaaltekst2.innerText));
    verhaaltekst1.innerText = "";
    book_opened = true;
  }
}, false);



console.log("loaded book.js")
