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



knop1.onclick = function () {
    setVerhaalCookie(cname, "1", 1)
}
knop2.onclick = function () {
    setVerhaalCookie(cname, "2", 1)
}

knop8.onclick = function () {
    console.log(getVerhaalCookie());
}
knop9.onclick = function () {
    console.log(getVerhaalCookie());

}


console.log("loaded hub.js")
