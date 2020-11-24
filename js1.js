function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}
function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}
function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}
function kiertekeles(){

    var q = parseInt(document.getElementById("a").value);
    var w = parseInt(document.getElementById("b").value);
    var e = parseInt(document.getElementById("c").value);

    var elert = q + w + e;
    var szazalek = elert / 18 * 100;

    document.getElementById("eredmeny").innerHTML = "Az eredmény: " + elert + " pont, " + szazalek + "%";

    if (szazalek > 80){
        document.getElementById("jegy").innerHTML = "5 (JELES)"
    }

    else if (szazalek > 60){
        document.getElementById("jegy").innerHTML = "4 (JÓ)"
    }

    else if (szazalek > 40){
        document.getElementById("jegy").innerHTML = "3 (KÖZEPES)"
    }

    else if (szazalek > 25){
        document.getElementById("jegy").innerHTML = "2 (ELÉGSÉGES)"
    }

    else{
        document.getElementById("jegy").innerHTML = "1 (ELÉGTELEN)"
    }
}