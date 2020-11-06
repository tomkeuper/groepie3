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


function makeButtonsDarker() {

}



if (debug){
    console.log("loaded hub.js")
}
