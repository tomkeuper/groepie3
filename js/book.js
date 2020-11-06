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