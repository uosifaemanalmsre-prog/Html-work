

function sum(x, y) {
    alert(Number(x) + Number(y));
}
function subtraction(x, y) {
    alert(Number(x) - Number(y));
}
function multiplication(x, y) {
    alert(Number(x) * Number(y));
}
function division(x, y) {
    alert(Number(x) / Number(y));
}
function laskin_summa() {

    let first = document.getElementById("number1").value;
    let second = document.getElementById("number2").value;

    sum(first, second);
}

function laskin_vahennys() {

    let first = document.getElementById("number1").value;
    let second = document.getElementById("number2").value;

    subtraction(first, second);
}

function laskin_kerto() {

    let first = document.getElementById("number1").value;
    let second = document.getElementById("number2").value;

    multiplication(first, second);
}

function laskin_jako() {

    let first = document.getElementById("number1").value;
    let second = document.getElementById("number2").value;

    division(first, second);
}