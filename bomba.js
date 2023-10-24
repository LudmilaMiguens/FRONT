let bomba = document.getElementById("btn");
 bomba.addEventListener("click", function (e) {
    let bombaPum = document.getElementById("numBomba").value;
    alert("Corra la bomba se activara en 2 segundos");
    setTimeout(function () {
        cuentaRegresiva(bombaPum);
    }, 2000);
});
function cuentaRegresiva(i) {
    let intervalo = setInterval(function () {
        document.getElementById("bombaAc").innerHTML = i;
        if (i === 0) {
            clearInterval(intervalo);
            alert("PUMMM EXPLOTO");
        }
        else {
            i--;
        }
    }, 1000);
}
