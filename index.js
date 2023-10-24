var btn = document.getElementById("aqui");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (event) {
    console.log("Hola");
});
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", intercambiarClase);
function intercambiarClase() {
    var _a;
    (_a = document.querySelector("p")) === null || _a === void 0 ? void 0 : _a.classList.toggle("oculto");
}
