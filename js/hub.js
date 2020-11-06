var imported = document.createElement('script');
imported.src = '../js/main.js';
document.head.appendChild(imported);


const knop1 = document.getElementById("js--knop1")
const knop2 = document.getElementById("js--knop2")
const knop3 = document.getElementById("js--knop3")
const knop4 = document.getElementById("js--knop4")
const knop5 = document.getElementById("js--knop5")
const knop6 = document.getElementById("js--knop6")
const knop7 = document.getElementById("js--knop7")
const knop8 = document.getElementById("js--knop8")
const knop9 = document.getElementById("js--knop9")

knop1.addEventListener("click",
    function (event) {
        setVerhaalCookie(cname, "1", 1)
    })
knop2.addEventListener("click",
    function (event) {
        if (getVerhaalCookie(cname) >= 1){
            setVerhaalCookie(cname, "2", 1)
        }
        else {
            if (!debug){
                event.preventDefault();
            }
        }
    })
knop3.addEventListener("click",
    function (event) {
        if (getVerhaalCookie(cname) >= 2){
            setVerhaalCookie(cname, "3", 1)
        }
        else {
            if (!debug){
                event.preventDefault();
            }
        }
    })
knop4.addEventListener("click",
    function (event) {
        if (getVerhaalCookie(cname) >= 3){
            setVerhaalCookie(cname, "4", 1)
        }
        else {
            if (!debug){
                event.preventDefault();
            }
        }
    })
knop5.addEventListener("click",
    function (event) {
        if (getVerhaalCookie(cname) >= 4){
            setVerhaalCookie(cname, "5", 1)
        }
        else {
            if (!debug){
                event.preventDefault();
            }
        }
    })
knop6.addEventListener("click",
    function (event) {
        if (getVerhaalCookie(cname) >= 5){
            setVerhaalCookie(cname, "6", 1)
        }
        else {
            if (!debug){
                event.preventDefault();
            }
        }
    })
knop7.addEventListener("click",
    function (event) {
        if (getVerhaalCookie(cname) >= 6){
            setVerhaalCookie(cname, "7", 1)
        }
        else {
            if (!debug){
                event.preventDefault();
            }
        }
    })
knop8.addEventListener("click",
    function (event) {
        if (getVerhaalCookie(cname) >= 7){
            setVerhaalCookie(cname, "8", 1)
        }
        else {
            if (!debug){
                event.preventDefault();
            }
        }
    })
knop9.addEventListener("click",
    function (event) {
        if (getVerhaalCookie(cname) >= 8){
            setVerhaalCookie(cname, "9", 1)
        }
        else {
            if (!debug){
                event.preventDefault();
            }
        }
    })


getVerhaalCookie(cname)
function changeSentence() {
    getVerhaalCookie(cname)
    switch (getVerhaalCookie(cname)) {
      case "1":
          document.getElementById("js--sentence").innerText = "Feurat ging tijdens zijn herfstvakantie reizen naar de stad Fallujah, de rivier Euphrades. Hij is vernoemd naar deze rivier.";
          break
      case "2":
          document.getElementById("js--sentence").innerText = "De zomer van 1990 betekende het begin van de Golf oorlog";
          break
      case "3":
          document.getElementById("js--sentence").innerText = "s";
          break
      case "4":
          document.getElementById("js--sentence").innerText = "s";
          break
      case "5":
          document.getElementById("js--sentence").innerText = "s";
          break
      case "6":
          document.getElementById("js--sentence").innerText = "s";
          break
      case "7":
          document.getElementById("js--sentence").innerText = "s";
          break
      case "8":
          document.getElementById("js--sentence").innerText = "s";
          break
      case "9":
          document.getElementById("js--sentence").innerText = "s";
          break
      default:
          console.log("cookie was not recognized")
          break
    }
}
changeSentence()

function makeButtonsDarker() {

}

// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
// anime.timeline({loop: true})
//     .add({
//         targets: '.ml3 .letter',
//         opacity: [0,1],
//         easing: "easeInOutQuad",
//         duration: 2250,
//         delay: (el, i) => 150 * (i+1)
//     }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
// });





if (debug){
    console.log("loaded hub.js")
}
